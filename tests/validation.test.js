import { describe, it, expect } from 'vitest';
import {
  isValidDate,
  isToday,
  isPastDate,
  isFutureDate,
  isSameDay,
  isLeapYear
} from '../src/validation.js';

describe('Date Validation', () => {
  it('validates dates correctly with isValidDate', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate('2025-01-01')).toBe(true);
    expect(isValidDate(Date.now())).toBe(true);
    expect(isValidDate('invalid-date')).toBe(false);
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate('')).toBe(false);
  });

  it('identifies today, past and future dates', () => {
    const now = new Date();
    expect(isToday(now)).toBe(true);

    const past = new Date(Date.now() - 100000);
    const future = new Date(Date.now() + 100000);

    expect(isPastDate(past)).toBe(true);
    expect(isFutureDate(future)).toBe(true);
  });

  it('checks isSameDay', () => {
    const d1 = new Date(2025, 4, 15, 8, 30);
    const d2 = new Date(2025, 4, 15, 22, 45);
    const d3 = new Date(2025, 4, 16, 1, 0);

    expect(isSameDay(d1, d2)).toBe(true);
    expect(isSameDay(d1, d3)).toBe(false);
  });

  it('identifies leap years', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2025)).toBe(false);
    expect(isLeapYear(new Date(2024, 5, 1))).toBe(true);
  });
});
