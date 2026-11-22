import { toDate } from './utils.js';

/**
 * Formats elapsed time relative to now or a reference date.
 * @param {Date|string|number} date
 * @param {Date|string|number} [baseDate=new Date()]
 * @returns {string}
 */
export function timeAgo(date, baseDate = new Date()) {
  const target = toDate(date);
  const base = toDate(baseDate);

  const diffMs = base.getTime() - target.getTime();

  if (diffMs < -1000) {
    return timeUntil(target, base);
  }

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 45) {
    return 'just now';
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }

  const years = Math.floor(days / 365);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

/**
 * Formats future duration relative to now or a reference date.
 * @param {Date|string|number} date
 * @param {Date|string|number} [baseDate=new Date()]
 * @returns {string}
 */
export function timeUntil(date, baseDate = new Date()) {
  const target = toDate(date);
  const base = toDate(baseDate);

  const diffMs = target.getTime() - base.getTime();

  if (diffMs < -1000) {
    return timeAgo(target, base);
  }

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 45) {
    return 'just now';
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes === 1 ? 'in 1 minute' : `in ${minutes} minutes`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours === 1 ? 'in 1 hour' : `in ${hours} hours`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return days === 1 ? 'in 1 day' : `in ${days} days`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return months === 1 ? 'in 1 month' : `in ${months} months`;
  }

  const years = Math.floor(days / 365);
  return years === 1 ? 'in 1 year' : `in ${years} years`;
}
