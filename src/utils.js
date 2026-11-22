/**
 * Normalizes input to a valid Date instance.
 * @param {Date|string|number} input
 * @returns {Date}
 */
export function toDate(input) {
  if (input === null || input === undefined || input === '') {
    throw new TypeError('Invalid date input: value cannot be null, undefined, or empty');
  }

  let date;
  if (input instanceof Date) {
    date = new Date(input.getTime());
  } else if (typeof input === 'string' || typeof input === 'number') {
    date = new Date(input);
  } else {
    throw new TypeError('Invalid date input: expected Date instance, string, or timestamp');
  }

  if (Number.isNaN(date.getTime())) {
    throw new TypeError('Invalid date provided');
  }

  return date;
}

/**
 * Left-pads a numeric value with leading zeros.
 * @param {number} value
 * @param {number} length
 * @returns {string}
 */
export function padZero(value, length = 2) {
  return String(value).padStart(length, '0');
}
