import { toDate } from './utils.js';

/**
 * Checks whether the input can be parsed into a valid Date.
 * @param {*} date
 * @returns {boolean}
 */
export function isValidDate(date) {
  if (date === null || date === undefined || date === '') {
    return false;
  }
  try {
    const d = toDate(date);
    return !Number.isNaN(d.getTime());
  } catch {
    return false;
  }
}

/**
 * Checks if the given date is today in local time.
 * @param {Date|string|number} date
 * @returns {boolean}
 */
export function isToday(date) {
  return isSameDay(date, new Date());
}

/**
 * Checks if the given date is in the past compared to current time.
 * @param {Date|string|number} date
 * @returns {boolean}
 */
export function isPastDate(date) {
  return toDate(date).getTime() < Date.now();
}

/**
 * Checks if the given date is in the future compared to current time.
 * @param {Date|string|number} date
 * @returns {boolean}
 */
export function isFutureDate(date) {
  return toDate(date).getTime() > Date.now();
}

/**
 * Checks if two dates fall on the same calendar day in local time.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @returns {boolean}
 */
export function isSameDay(date1, date2) {
  const d1 = toDate(date1);
  const d2 = toDate(date2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

/**
 * Determines whether a year or date's year is a leap year.
 * @param {number|Date|string} yearOrDate
 * @returns {boolean}
 */
export function isLeapYear(yearOrDate) {
  let year;
  if (typeof yearOrDate === 'number') {
    year = yearOrDate;
  } else {
    year = toDate(yearOrDate).getFullYear();
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
