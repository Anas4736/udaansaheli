import mongoose from 'mongoose';
import Resource from '../models/Resource.js';
import { seedResources } from '../data/seedData.js';

let isConnected = false;
let isUsingFallback = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('⚠️  [UdaanSaheli DB] No MONGODB_URI provided. Running in resilient in-memory mode.');
    isUsingFallback = true;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    isUsingFallback = false;
    console.log(`✅ [UdaanSaheli DB] MongoDB Atlas Connected: ${conn.connection.host}`);
    
    // Auto-seed if empty
    await autoSeedIfEmpty();
    return true;
  } catch (error) {
    console.error(`⚠️  [UdaanSaheli DB] MongoDB connection failed: ${error.message}`);
    console.log('🔄 [UdaanSaheli DB] Falling back to high-resilience in-memory seed dataset.');
    isUsingFallback = true;
    return false;
  }
};

export const getDBStatus = () => {
  return {
    isConnected,
    isUsingFallback,
    mode: isUsingFallback ? 'In-Memory Resilient Cache' : 'MongoDB Atlas Live',
    recordCount: seedResources.length
  };
};

export const autoSeedIfEmpty = async () => {
  if (!isConnected) return;
  try {
    const count = await Resource.countDocuments();
    if (count === 0) {
      console.log('🌱 [UdaanSaheli DB] Database is empty. Seeding initial verified resources...');
      await Resource.insertMany(seedResources);
      console.log(`✅ [UdaanSaheli DB] Seeded ${seedResources.length} verified records successfully.`);
    } else {
      console.log(`ℹ️  [UdaanSaheli DB] Database contains ${count} records. Ready.`);
    }
  } catch (err) {
    console.error('⚠️  [UdaanSaheli DB] Error in autoSeedIfEmpty:', err.message);
  }
};
