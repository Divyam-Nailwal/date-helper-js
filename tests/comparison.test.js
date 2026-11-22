import { describe, it, expect } from 'vitest';
import { isBefore, isAfter, isBetween } from '../src/comparison.js';

describe('Date Comparison', () => {
  const d1 = new Date(2025, 0, 1);
  const d2 = new Date(2025, 0, 10);
  const d3 = new Date(2025, 0, 20);

  it('compares with isBefore and isAfter', () => {
    expect(isBefore(d1, d2)).toBe(true);
    expect(isBefore(d2, d1)).toBe(false);
    expect(isAfter(d2, d1)).toBe(true);
    expect(isAfter(d1, d2)).toBe(false);
  });

  it('checks isBetween exclusive and inclusive', () => {
    expect(isBetween(d2, d1, d3)).toBe(true);
    expect(isBetween(d1, d1, d3)).toBe(false);
    expect(isBetween(d1, d1, d3, true)).toBe(true);
    expect(isBetween(d3, d1, d3, true)).toBe(true);
  });

  it('works regardless of start and end order in isBetween', () => {
    expect(isBetween(d2, d3, d1)).toBe(true);
  });

  it('throws on invalid dates', () => {
    expect(() => isBefore('bad', d2)).toThrow(TypeError);
    expect(() => isBetween(d1, null, d3)).toThrow(TypeError);
  });
});
