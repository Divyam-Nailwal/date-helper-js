import { describe, it, expect } from 'vitest';
import { timeAgo, timeUntil } from '../src/relative.js';

describe('Relative Time', () => {
  const base = new Date(2025, 0, 10, 12, 0, 0);

  it('formats past events with timeAgo', () => {
    const justNow = new Date(base.getTime() - 10 * 1000);
    expect(timeAgo(justNow, base)).toBe('just now');

    const fiveMinsAgo = new Date(base.getTime() - 5 * 60 * 1000);
    expect(timeAgo(fiveMinsAgo, base)).toBe('5 minutes ago');

    const twoHoursAgo = new Date(base.getTime() - 2 * 60 * 60 * 1000);
    expect(timeAgo(twoHoursAgo, base)).toBe('2 hours ago');

    const threeDaysAgo = new Date(base.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(timeAgo(threeDaysAgo, base)).toBe('3 days ago');
  });

  it('formats future events with timeUntil', () => {
    const fiveMinsAhead = new Date(base.getTime() + 5 * 60 * 1000);
    expect(timeUntil(fiveMinsAhead, base)).toBe('in 5 minutes');

    const twoDaysAhead = new Date(base.getTime() + 2 * 24 * 60 * 60 * 1000);
    expect(timeUntil(twoDaysAhead, base)).toBe('in 2 days');
  });

  it('handles cross-calling when signs are inverted', () => {
    const future = new Date(base.getTime() + 5 * 60 * 1000);
    expect(timeAgo(future, base)).toBe('in 5 minutes');

    const past = new Date(base.getTime() - 2 * 60 * 60 * 1000);
    expect(timeUntil(past, base)).toBe('2 hours ago');
  });

  it('throws on invalid date input', () => {
    expect(() => timeAgo('not-valid')).toThrow(TypeError);
  });
});
