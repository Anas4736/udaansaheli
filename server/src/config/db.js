import mongoose from 'mongoose';
import Resource from '../models/Resource.js';
import { seedResources } from '../data/seedData.js';

let isConnected = false;
let isUsingFallback = false;
let lastError = null;
let lastConnectedHost = null;
let lastDatabaseName = null;

/**
 * Mask MongoDB connection string to safely report cluster without leaking credentials
 */
export const maskMongoUri = (uri) => {
  if (!uri) return 'Not Provided';
  try {
    return uri.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
  } catch {
    return 'Masked (Malformed URI)';
  }
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '') {
    lastError = 'MONGODB_URI environment variable is not set. The application is running in resilient in-memory mode.';
    console.warn(`⚠️  [UdaanSaheli DB] ${lastError}`);
    isConnected = false;
    isUsingFallback = true;
    return false;
  }

  try {
    console.log(`🔌 [UdaanSaheli DB] Attempting connection to MongoDB (${maskMongoUri(uri)})...`);
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    
    isConnected = true;
    isUsingFallback = false;
    lastError = null;
    lastConnectedHost = conn.connection.host;
    lastDatabaseName = conn.connection.name;

    console.log(`✅ [UdaanSaheli DB] MongoDB Atlas Connected: ${lastConnectedHost}/${lastDatabaseName}`);
    
    // Idempotent initial seed if needed
    await idempotentSeed();
    return true;
  } catch (error) {
    isConnected = false;
    isUsingFallback = true;
    lastError = error.message;
    console.error(`⚠️  [UdaanSaheli DB] MongoDB connection failed: ${error.message}`);
    console.log('🔄 [UdaanSaheli DB] Falling back to high-resilience in-memory seed dataset.');
    return false;
  }
};

/**
 * Idempotently upsert seed resources without dropping collections or deleting data
 */
export const idempotentSeed = async () => {
  if (!isConnected) return;
  try {
    const existingCount = await Resource.countDocuments();
    if (existingCount === 0) {
      console.log('🌱 [UdaanSaheli DB] Empty database detected. Seeding verified resources...');
    }

    const bulkOps = seedResources.map((item) => ({
      updateOne: {
        filter: { id: item.id },
        update: { $set: item },
        upsert: true,
      },
    }));

    const result = await Resource.bulkWrite(bulkOps);
    const totalCount = await Resource.countDocuments();
    console.log(`✅ [UdaanSaheli DB] Seed synchronization complete. Total records in DB: ${totalCount}`);
    return { upserted: result.upsertedCount, modified: result.modifiedCount, total: totalCount };
  } catch (err) {
    console.error('⚠️  [UdaanSaheli DB] Error during idempotent seed:', err.message);
  }
};

export const getDBStatus = async () => {
  let liveCount = seedResources.length;
  if (isConnected) {
    try {
      liveCount = await Resource.countDocuments();
    } catch {
      liveCount = seedResources.length;
    }
  }

  return {
    isConnected,
    isUsingFallback,
    mode: isConnected ? 'MongoDB Atlas Live' : 'In-Memory Resilient Cache',
    recordCount: liveCount,
    host: lastConnectedHost,
    databaseName: lastDatabaseName,
    configuredUri: maskMongoUri(process.env.MONGODB_URI),
    lastError: lastError,
    actionableGuide: !isConnected
      ? (process.env.MONGODB_URI
          ? `MongoDB Atlas failed to connect: ${lastError}. Ensure: 1) Your IP is whitelisted (0.0.0.0/0) in Atlas Network Access, 2) Username/password are correct, and 3) Cluster is active.`
          : 'To connect persistent MongoDB Atlas: Create a free cluster on cloud.mongodb.com, get your connection string, and set MONGODB_URI in your server environment.')
      : 'MongoDB Atlas is connected and active. Data is persistent.'
  };
};
