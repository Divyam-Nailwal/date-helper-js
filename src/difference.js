import { toDate } from './utils.js';

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

/**
 * Calculates detailed difference breakdown between two dates.
 * @param {Date|string|number} startDate
 * @param {Date|string|number} endDate
 * @returns {{ days: number, hours: number, minutes: number, seconds: number, totalDays: number, totalHours: number, totalMinutes: number, totalSeconds: number, isNegative: boolean }}
 */
export function getDateDifference(startDate, endDate) {
  const d1 = toDate(startDate);
  const d2 = toDate(endDate);

  const diffMs = d2.getTime() - d1.getTime();
  const isNegative = diffMs < 0;
  const absMs = Math.abs(diffMs);

  const totalSeconds = Math.floor(absMs / MS_SECOND);
  const totalMinutes = Math.floor(absMs / MS_MINUTE);
  const totalHours = Math.floor(absMs / MS_HOUR);
  const totalDays = Math.floor(absMs / MS_DAY);

  const days = totalDays;
  const hours = Math.floor((absMs % MS_DAY) / MS_HOUR);
  const minutes = Math.floor((absMs % MS_HOUR) / MS_MINUTE);
  const seconds = Math.floor((absMs % MS_MINUTE) / MS_SECOND);

  const sign = isNegative ? -1 : 1;

  return {
    days: days * sign,
    hours: hours * sign,
    minutes: minutes * sign,
    seconds: seconds * sign,
    totalDays: totalDays * sign,
    totalHours: totalHours * sign,
    totalMinutes: totalMinutes * sign,
    totalSeconds: totalSeconds * sign,
    isNegative
  };
}

/**
 * Returns elapsed days between two dates.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @param {{ absolute?: boolean }} [options]
 * @returns {number}
 */
export function daysBetween(date1, date2, { absolute = false } = {}) {
  const d1 = toDate(date1);
  const d2 = toDate(date2);
  const diff = Math.trunc((d2.getTime() - d1.getTime()) / MS_DAY);
  return absolute ? Math.abs(diff) : diff;
}

/**
 * Returns elapsed hours between two dates.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @param {{ absolute?: boolean }} [options]
 * @returns {number}
 */
export function hoursBetween(date1, date2, { absolute = false } = {}) {
  const d1 = toDate(date1);
  const d2 = toDate(date2);
  const diff = Math.trunc((d2.getTime() - d1.getTime()) / MS_HOUR);
  return absolute ? Math.abs(diff) : diff;
}

/**
 * Returns elapsed minutes between two dates.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @param {{ absolute?: boolean }} [options]
 * @returns {number}
 */
export function minutesBetween(date1, date2, { absolute = false } = {}) {
  const d1 = toDate(date1);
  const d2 = toDate(date2);
  const diff = Math.trunc((d2.getTime() - d1.getTime()) / MS_MINUTE);
  return absolute ? Math.abs(diff) : diff;
}

/**
 * Returns elapsed seconds between two dates.
 * @param {Date|string|number} date1
 * @param {Date|string|number} date2
 * @param {{ absolute?: boolean }} [options]
 * @returns {number}
 */
export function secondsBetween(date1, date2, { absolute = false } = {}) {
  const d1 = toDate(date1);
  const d2 = toDate(date2);
  const diff = Math.trunc((d2.getTime() - d1.getTime()) / MS_SECOND);
  return absolute ? Math.abs(diff) : diff;
}
