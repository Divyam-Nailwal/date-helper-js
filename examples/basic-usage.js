import {
  formatDate,
  getCurrentDate,
  getCurrentTime,
  getDateDifference,
  daysBetween,
  addDays,
  addMonths,
  timeAgo,
  timeUntil,
  isValidDate,
  isSameDay,
  isBetween
} from '../src/index.js';

console.log('--- Date Formatting ---');
console.log('Formatted date:', formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log('Current date:', getCurrentDate('DD/MM/YYYY'));
console.log('Current time:', getCurrentTime('HH:mm:ss'));

console.log('\n--- Date Calculations ---');
const start = '2025-01-01';
const end = '2025-01-15';
console.log('Days between:', daysBetween(start, end));
console.log('Difference detail:', getDateDifference(start, end));

console.log('\n--- Date Manipulation ---');
const today = new Date();
console.log('In 7 days:', formatDate(addDays(today, 7)));
console.log('In 3 months:', formatDate(addMonths(today, 3)));

console.log('\n--- Relative Time ---');
console.log('Time ago:', timeAgo(new Date(Date.now() - 3600000)));
console.log('Time until:', timeUntil(new Date(Date.now() + 7200000)));

console.log('\n--- Validation & Comparison ---');
console.log('Is valid date:', isValidDate('2025-05-20'));
console.log('Is same day:', isSameDay(today, new Date()));
console.log('Is between:', isBetween(today, '2020-01-01', '2030-01-01'));
