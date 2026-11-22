import { toDate, padZero } from './utils.js';

/**
 * Formats a date using specified pattern tokens.
 * Supported tokens: YYYY, YY, MM, DD, HH, mm, ss
 *
 * @param {Date|string|number} date - Date to format
 * @param {string} [pattern='YYYY-MM-DD'] - Format pattern string
 * @returns {string} Formatted date string
 */
export function formatDate(date, pattern = 'YYYY-MM-DD') {
  if (typeof pattern !== 'string') {
    throw new TypeError('Format pattern must be a string');
  }

  const d = toDate(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const replacements = {
    YYYY: String(year),
    YY: String(year).slice(-2),
    MM: padZero(month),
    DD: padZero(day),
    HH: padZero(hours),
    mm: padZero(minutes),
    ss: padZero(seconds)
  };

  return pattern.replace(/YYYY|YY|MM|DD|HH|mm|ss/g, (token) => replacements[token]);
}

/**
 * Returns current date formatted according to the provided pattern.
 * @param {string} [pattern='YYYY-MM-DD']
 * @returns {string}
 */
export function getCurrentDate(pattern = 'YYYY-MM-DD') {
  return formatDate(new Date(), pattern);
}

/**
 * Returns current time formatted according to the provided pattern.
 * @param {string} [pattern='HH:mm:ss']
 * @returns {string}
 */
export function getCurrentTime(pattern = 'HH:mm:ss') {
  return formatDate(new Date(), pattern);
}
