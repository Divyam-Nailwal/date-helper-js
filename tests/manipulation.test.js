import { describe, it, expect } from 'vitest';
import {
  addDays,
  subtractDays,
  addHours,
  addMinutes,
  addMonths,
  addYears
} from '../src/manipulation.js';

describe('Date Manipulation', () => {
  it('does not mutate original date', () => {
    const original = new Date(2025, 0, 15);
    const originalTimestamp = original.getTime();
    addDays(original, 5);
    expect(original.getTime()).toBe(originalTimestamp);
  });

  it('adds and subtracts days', () => {
    const base = new Date(2025, 0, 10);
    expect(addDays(base, 5).getDate()).toBe(15);
    expect(subtractDays(base, 5).getDate()).toBe(5);
  });

  it('adds hours and minutes across midnight boundaries', () => {
    const base = new Date(2025, 0, 1, 23, 30, 0);
    const nextHour = addHours(base, 2);
    expect(nextHour.getDate()).toBe(2);
    expect(nextHour.getHours()).toBe(1);

    const nextMin = addMinutes(base, 45);
    expect(nextMin.getDate()).toBe(2);
    expect(nextMin.getMinutes()).toBe(15);
  });

  it('handles month addition and end-of-month clamping', () => {
    // Jan 31 + 1 month should clamp to Feb 28 in a non-leap year
    const jan31 = new Date(2025, 0, 31);
    const feb = addMonths(jan31, 1);
    expect(feb.getMonth()).toBe(1);
    expect(feb.getDate()).toBe(28);

    // Jan 31 + 1 month in leap year (2024) -> Feb 29
    const jan31_2024 = new Date(2024, 0, 31);
    const febLeap = addMonths(jan31_2024, 1);
    expect(febLeap.getMonth()).toBe(1);
    expect(febLeap.getDate()).toBe(29);
  });

  it('handles leap day when adding years', () => {
    // Feb 29, 2024 + 1 year -> Feb 28, 2025
    const leapDay = new Date(2024, 1, 29);
    const nextYear = addYears(leapDay, 1);
    expect(nextYear.getFullYear()).toBe(2025);
    expect(nextYear.getMonth()).toBe(1);
    expect(nextYear.getDate()).toBe(28);
  });

  it('throws on non-numeric increments or invalid date', () => {
    expect(() => addDays(new Date(), 'two')).toThrow(TypeError);
    expect(() => addDays('invalid-date', 2)).toThrow(TypeError);
  });
});
