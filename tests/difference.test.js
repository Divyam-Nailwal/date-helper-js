import { describe, it, expect } from 'vitest';
import {
  getDateDifference,
  daysBetween,
  hoursBetween,
  minutesBetween,
  secondsBetween
} from '../src/difference.js';

describe('Date Difference', () => {
  const d1 = new Date(2025, 0, 1, 10, 0, 0);
  const d2 = new Date(2025, 0, 4, 15, 30, 45);

  it('calculates full breakdown between two dates', () => {
    const diff = getDateDifference(d1, d2);
    expect(diff.days).toBe(3);
    expect(diff.hours).toBe(5);
    expect(diff.minutes).toBe(30);
    expect(diff.seconds).toBe(45);
    expect(diff.isNegative).toBe(false);
  });

  it('handles negative difference when dates are reversed', () => {
    const diff = getDateDifference(d2, d1);
    expect(diff.days).toBe(-3);
    expect(diff.hours).toBe(-5);
    expect(diff.minutes).toBe(-30);
    expect(diff.seconds).toBe(-45);
    expect(diff.isNegative).toBe(true);
  });

  it('calculates daysBetween', () => {
    expect(daysBetween(d1, d2)).toBe(3);
    expect(daysBetween(d2, d1)).toBe(-3);
    expect(daysBetween(d2, d1, { absolute: true })).toBe(3);
  });

  it('calculates hoursBetween', () => {
    const start = new Date(2025, 0, 1, 0, 0, 0);
    const end = new Date(2025, 0, 2, 6, 0, 0);
    expect(hoursBetween(start, end)).toBe(30);
  });

  it('calculates minutesBetween and secondsBetween', () => {
    const start = new Date(2025, 0, 1, 0, 0, 0);
    const end = new Date(2025, 0, 1, 1, 15, 30);
    expect(minutesBetween(start, end)).toBe(75);
    expect(secondsBetween(start, end)).toBe(4530);
  });

  it('throws on invalid inputs', () => {
    expect(() => daysBetween('invalid', d2)).toThrow(TypeError);
    expect(() => hoursBetween(d1, null)).toThrow(TypeError);
  });
});
