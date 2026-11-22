import { describe, it, expect } from 'vitest';
import { formatDate, getCurrentDate, getCurrentTime } from '../src/format.js';

describe('Date Formatting', () => {
  const testDate = new Date(2025, 3, 5, 14, 8, 9); // 2025-04-05 14:08:09

  it('formats YYYY-MM-DD by default', () => {
    expect(formatDate(testDate)).toBe('2025-04-05');
  });

  it('supports DD/MM/YYYY pattern', () => {
    expect(formatDate(testDate, 'DD/MM/YYYY')).toBe('05/04/2025');
  });

  it('supports MM/DD/YYYY pattern', () => {
    expect(formatDate(testDate, 'MM/DD/YYYY')).toBe('04/05/2025');
  });

  it('supports DD-MM-YYYY pattern', () => {
    expect(formatDate(testDate, 'DD-MM-YYYY')).toBe('05-04-2025');
  });

  it('supports time patterns HH:mm and HH:mm:ss', () => {
    expect(formatDate(testDate, 'HH:mm')).toBe('14:08');
    expect(formatDate(testDate, 'HH:mm:ss')).toBe('14:08:09');
  });

  it('supports composite datetime pattern', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2025-04-05 14:08:09');
  });

  it('accepts date string inputs', () => {
    const formatted = formatDate('2025-12-25T10:00:00', 'YYYY-MM-DD');
    expect(formatted).toBe('2025-12-25');
  });

  it('throws on invalid date input', () => {
    expect(() => formatDate('not-a-date')).toThrow(TypeError);
    expect(() => formatDate(null)).toThrow(TypeError);
    expect(() => formatDate(undefined)).toThrow(TypeError);
  });

  it('throws on non-string pattern', () => {
    expect(() => formatDate(testDate, 123)).toThrow(TypeError);
  });

  it('returns valid formatted strings from getCurrentDate and getCurrentTime', () => {
    expect(getCurrentDate('YYYY')).toMatch(/^\d{4}$/);
    expect(getCurrentTime('HH:mm:ss')).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });
});
