import { toDate } from './utils.js';

/**
 * Checks whether date1 is chronologically earlier than date2.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @returns {boolean}
 */
export function isBefore(date1, date2) {
  return toDate(date1).getTime() < toDate(date2).getTime();
}

/**
 * Checks whether date1 is chronologically later than date2.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @returns {boolean}
 */
export function isAfter(date1, date2) {
  return toDate(date1).getTime() > toDate(date2).getTime();
}

/**
 * Checks whether a date falls between two boundary dates.
 * @param {Date|string|number} date - Date to inspect
 * @param {Date|string|number} startDate - First boundary
 * @param {Date|string|number} endDate - Second boundary
 * @param {boolean} [inclusive=false] - Whether interval boundaries are inclusive
 * @returns {boolean}
 */
export function isBetween(date, startDate, endDate, inclusive = false) {
  const targetTime = toDate(date).getTime();
  const t1 = toDate(startDate).getTime();
  const t2 = toDate(endDate).getTime();

  const min = Math.min(t1, t2);
  const max = Math.max(t1, t2);

  return inclusive
    ? targetTime >= min && targetTime <= max
    : targetTime > min && targetTime < max;
}
