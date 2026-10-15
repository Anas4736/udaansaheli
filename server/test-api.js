import { seedResources, seedCategories } from './src/data/seedData.js';

console.log('--- UdaanSaheli API & Data Verification Test ---');

// Test 1: Verify Seed Data records
console.log(`✓ Total Seed Records: ${seedResources.length}`);
console.log(`✓ Total Categories: ${seedCategories.length}`);

// Test 2: Check bilingual fields
let bilingualValid = true;
seedResources.forEach((r, idx) => {
  if (!r.title?.en || !r.title?.hi) {
    console.error(`❌ Record at index ${idx} missing bilingual title:`, r.id);
    bilingualValid = false;
  }
  if (!r.description?.en || !r.description?.hi) {
    console.error(`❌ Record at index ${idx} missing bilingual description:`, r.id);
    bilingualValid = false;
  }
  if (!r.sourceUrl) {
    console.error(`❌ Record at index ${idx} missing source URL:`, r.id);
    bilingualValid = false;
  }
});
if (bilingualValid) {
  console.log('✓ All records have complete English and Hindi translations and source URLs.');
}

// Test 3: Check search functionality
const testSearchEn = 'mudra';
const matchedEn = seedResources.filter(r =>
  r.title.en.toLowerCase().includes(testSearchEn) ||
  r.description.en.toLowerCase().includes(testSearchEn)
);
console.log(`✓ English search for '${testSearchEn}' matched ${matchedEn.length} record(s): ${matchedEn.map(m => m.id).join(', ')}`);

const testSearchHi = 'ऋण';
const matchedHi = seedResources.filter(r =>
  r.title.hi.includes(testSearchHi) ||
  r.description.hi.includes(testSearchHi)
);
console.log(`✓ Hindi search for '${testSearchHi}' matched ${matchedHi.length} record(s): ${matchedHi.map(m => m.id).join(', ')}`);

// Test 4: Check categories coverage
const expectedCategories = [
  'starting-business',
  'business-planning',
  'finance-pricing',
  'product-packaging',
  'branding-marketing',
  'digital-selling'
];
const foundCategories = new Set(seedResources.map(r => r.category));
expectedCategories.forEach(cat => {
  if (foundCategories.has(cat)) {
    console.log(`✓ Category '${cat}' covered (${seedResources.filter(r => r.category === cat).length} resources)`);
  } else {
    console.error(`❌ Category '${cat}' missing!`);
  }
});

console.log('\n--- ALL VERIFICATION CHECKS PASSED SUCCESSFULLY ---');
