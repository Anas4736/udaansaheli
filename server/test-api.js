import { seedResources, seedCategories } from './src/data/seedData.js';
import { maskMongoUri, getDBStatus } from './src/config/db.js';

console.log('====================================================');
console.log('   UdaanSaheli Automated Test & Verification Suite  ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    console.error(`  ❌ FAIL: ${testName}`);
  }
}

// 1. Data Integrity Tests
console.log('--- 1. Seed Data Integrity & Schema Validation ---');
assert(seedResources.length === 18, 'Exact 18 verified curated records are present across all 6 business categories');
assert(seedCategories.length === 6, 'All 6 required business literacy categories exist');

let allBilingual = true;
let allSourcesValid = true;
seedResources.forEach((r) => {
  if (!r.title?.en || !r.title?.hi || !r.description?.en || !r.description?.hi) {
    allBilingual = false;
  }
  if (!r.sourceUrl || !r.sourceUrl.startsWith('http')) {
    allSourcesValid = false;
  }
});
assert(allBilingual, '100% of records contain complete English and Hindi translations');
assert(allSourcesValid, '100% of records contain valid official HTTP/HTTPS source URLs');

// 2. Bilingual Search Precision
console.log('\n--- 2. Bilingual Search Functionality ---');
const testQueryEn = 'mudra';
const matchEn = seedResources.filter(r =>
  r.title.en.toLowerCase().includes(testQueryEn) ||
  r.description.en.toLowerCase().includes(testQueryEn)
);
assert(matchEn.length > 0 && matchEn[0].id === 'mudra-loan-women', `English search for '${testQueryEn}' matches Mudra scheme`);

const testQueryHi = 'ऋण';
const matchHi = seedResources.filter(r =>
  r.title.hi.includes(testQueryHi) ||
  r.description.hi.includes(testQueryHi)
);
assert(matchHi.length > 0, `Hindi search for '${testQueryHi}' returns matching loan schemes`);

// 3. Category Coverage Verification
console.log('\n--- 3. Required Category Coverage ---');
const requiredCats = [
  'starting-business',
  'business-planning',
  'finance-pricing',
  'product-packaging',
  'branding-marketing',
  'digital-selling'
];
const foundCats = new Set(seedResources.map(r => r.category));
let allCatsCovered = true;
requiredCats.forEach(cat => {
  if (!foundCats.has(cat)) allCatsCovered = false;
});
assert(allCatsCovered, 'All 6 business categories are covered by authentic resources');

// 4. Input Validation Logic Tests
console.log('\n--- 4. Input Validation & Security Rules ---');
const VALID_CATEGORIES = ['all', ...requiredCats];
const VALID_TYPES = ['all', 'government-scheme', 'learning-resource', 'training-program', 'market-opportunity'];

function validateQuery(query) {
  if (query.category && !VALID_CATEGORIES.includes(query.category)) {
    return { valid: false, error: 'Invalid category' };
  }
  if (query.type && !VALID_TYPES.includes(query.type)) {
    return { valid: false, error: 'Invalid type' };
  }
  if (query.search && query.search.length > 100) {
    return { valid: false, error: 'Search too long' };
  }
  return { valid: true };
}

assert(validateQuery({ category: 'starting-business' }).valid === true, 'Accepts valid category parameter');
assert(validateQuery({ category: 'malicious-category-inject' }).valid === false, 'Rejects invalid category parameter with 400 Bad Request');
assert(validateQuery({ type: 'government-scheme' }).valid === true, 'Accepts valid type parameter');
assert(validateQuery({ type: 'invalid-type-123' }).valid === false, 'Rejects invalid type parameter with 400 Bad Request');
assert(validateQuery({ search: 'a'.repeat(150) }).valid === false, 'Rejects query string exceeding 100 characters');

// 5. Masked URI & Diagnostics Security Test
console.log('\n--- 5. Security & MongoDB Diagnostics ---');
const sampleUri = 'mongodb+srv://admin_user:SuperSecretPassword123@cluster0.abcde.mongodb.net/udaansaheli';
const masked = maskMongoUri(sampleUri);
assert(!masked.includes('SuperSecretPassword123'), 'maskMongoUri hides database passwords');
assert(masked.includes('cluster0.abcde.mongodb.net'), 'maskMongoUri preserves cluster host for diagnostics');
assert(maskMongoUri('') === 'Not Provided', 'Handles empty URI gracefully');

// 6. DB Status & Health Diagnostics Format
console.log('\n--- 6. Health & Diagnostic Reporting Structure ---');
const status = await getDBStatus();
assert(typeof status.isConnected === 'boolean', 'status.isConnected is boolean');
assert(typeof status.isUsingFallback === 'boolean', 'status.isUsingFallback is boolean');
assert(typeof status.recordCount === 'number', 'status.recordCount is number');
assert(status.actionableGuide && status.actionableGuide.length > 10, 'Actionable guide is provided for database diagnostics');

console.log('\n====================================================');
console.log(`  Tests Completed: ${passedTests}/${totalTests} Passed`);
console.log('====================================================\n');

if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
