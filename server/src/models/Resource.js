import mongoose from 'mongoose';

const BilingualTextSchema = new mongoose.Schema({
  en: { type: String, required: true },
  hi: { type: String, required: true }
}, { _id: false });

const ApplicationStepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  title: { type: BilingualTextSchema, required: true },
  detail: { type: BilingualTextSchema, required: true }
}, { _id: false });

const ResourceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: BilingualTextSchema,
    required: true
  },
  description: {
    type: BilingualTextSchema,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'starting-business',
      'business-planning',
      'finance-pricing',
      'product-packaging',
      'branding-marketing',
      'digital-selling'
    ],
    index: true
  },
  categoryLabel: {
    type: BilingualTextSchema,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'government-scheme',
      'learning-resource',
      'training-program',
      'market-opportunity'
    ],
    index: true
  },
  typeLabel: {
    type: BilingualTextSchema,
    required: true
  },
  sourceName: {
    type: String,
    required: true
  },
  sourceUrl: {
    type: String,
    required: true
  },
  isVerifiedOfficial: {
    type: Boolean,
    default: true
  },
  isSampleDemo: {
    type: Boolean,
    default: false
  },
  verifiedDate: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'BookOpen'
  },
  eligibility: {
    type: BilingualTextSchema,
    default: { en: '', hi: '' }
  },
  benefits: {
    type: BilingualTextSchema,
    default: { en: '', hi: '' }
  },
  requiredDocuments: [BilingualTextSchema],
  steps: [ApplicationStepSchema],
  tags: [String],
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Resource = mongoose.model('Resource', ResourceSchema);

export default Resource;
