import { toDate } from './utils.js';

function validateNumber(value, name) {
  if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
    throw new TypeError(`Expected ${name} to be a finite number`);
  }
}

/**
 * Returns a new Date with added days.
 * @param {Date|string|number} date
 * @param {number} days
 * @returns {Date}
 */
export function addDays(date, days) {
  validateNumber(days, 'days');
  const d = toDate(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Returns a new Date with subtracted days.
 * @param {Date|string|number} date
 * @param {number} days
 * @returns {Date}
 */
export function subtractDays(date, days) {
  validateNumber(days, 'days');
  return addDays(date, -days);
}

/**
 * Returns a new Date with added hours.
 * @param {Date|string|number} date
 * @param {number} hours
 * @returns {Date}
 */
export function addHours(date, hours) {
  validateNumber(hours, 'hours');
  const d = toDate(date);
  d.setHours(d.getHours() + hours);
  return d;
}

/**
 * Returns a new Date with added minutes.
 * @param {Date|string|number} date
 * @param {number} minutes
 * @returns {Date}
 */
export function addMinutes(date, minutes) {
  validateNumber(minutes, 'minutes');
  const d = toDate(date);
  d.setMinutes(d.getMinutes() + minutes);
  return d;
}

/**
 * Returns a new Date with added months, handling end-of-month clamping.
 * @param {Date|string|number} date
 * @param {number} months
 * @returns {Date}
 */
export function addMonths(date, months) {
  validateNumber(months, 'months');
  const d = toDate(date);
  const targetDay = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(targetDay, daysInMonth));
  return d;
}

/**
 * Returns a new Date with added years, handling leap day adjustment.
 * @param {Date|string|number} date
 * @param {number} years
 * @returns {Date}
 */
export function addYears(date, years) {
  validateNumber(years, 'years');
  const d = toDate(date);
  const targetDay = d.getDate();
  const targetMonth = d.getMonth();
  d.setFullYear(d.getFullYear() + years);
  if (d.getMonth() !== targetMonth) {
    d.setDate(0);
  }
  return d;
}
