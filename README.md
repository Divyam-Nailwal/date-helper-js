# @shukracharya/date-helper-js

A lightweight, zero-dependency JavaScript utility library designed for date formatting, calculation of time spans, date manipulation, relative time presentation, validation, and chronological comparisons.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@shukracharya/date-helper-js.svg)](https://www.npmjs.com/package/@shukracharya/date-helper-js)

## Highlights

- **Zero dependencies**: Pure modern JavaScript (ES Modules).
- **Immutable**: Never mutates the original Date input.
- **Robust**: Handles leap years, month-end clamping, DST transitions, and input validation.
- **Fully tested**: 100% test coverage with Vitest.

## Installation

```bash
npm install @shukracharya/date-helper-js
```

## Quick Start

```javascript
import {
  formatDate,
  daysBetween,
  addDays,
  timeAgo,
  isBetween
} from '@shukracharya/date-helper-js';

// Format dates
console.log(formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'));

// Calculate differences
console.log(daysBetween('2025-01-01', '2025-01-10')); // 9

// Manipulate dates without mutation
const nextWeek = addDays(new Date(), 7);

// Relative human-readable time
console.log(timeAgo(new Date(Date.now() - 300000))); // '5 minutes ago'

// Comparisons
console.log(isBetween(new Date(), '2020-01-01', '2030-01-01')); // true
```

## API Reference

### 1. Date Formatting

#### `formatDate(date, pattern)`
Formats a date instance, date string, or timestamp according to the specified token pattern.
- Supported tokens:
  - `YYYY`: 4-digit year (e.g. `2025`)
  - `YY`: 2-digit year (e.g. `25`)
  - `MM`: 2-digit month (`01`-`12`)
  - `DD`: 2-digit day of month (`01`-`31`)
  - `HH`: 2-digit 24-hour clock (`00`-`23`)
  - `mm`: 2-digit minute (`00`-`59`)
  - `ss`: 2-digit second (`00`-`59`)
- Default pattern: `'YYYY-MM-DD'`

#### `getCurrentDate(pattern)`
Returns the current date formatted according to the given pattern (defaults to `'YYYY-MM-DD'`).

#### `getCurrentTime(pattern)`
Returns the current time formatted according to the given pattern (defaults to `'HH:mm:ss'`).

---

### 2. Date Differences

#### `getDateDifference(startDate, endDate)`
Returns a detailed breakdown object containing:
- `days`: Whole elapsed days
- `hours`: Remaining hours (`0`-`23`)
- `minutes`: Remaining minutes (`0`-`59`)
- `seconds`: Remaining seconds (`0`-`59`)
- `totalDays`, `totalHours`, `totalMinutes`, `totalSeconds`
- `isNegative`: Boolean indicating whether `endDate` precedes `startDate`

#### `daysBetween(date1, date2, options)`
Returns signed or absolute days elapsed between two dates.
- Options: `{ absolute: boolean }` (default `false`)

#### `hoursBetween(date1, date2, options)`
Returns elapsed whole hours between two dates.

#### `minutesBetween(date1, date2, options)`
Returns elapsed whole minutes between two dates.

#### `secondsBetween(date1, date2, options)`
Returns elapsed whole seconds between two dates.

---

### 3. Date Manipulation

All manipulation functions return a brand-new `Date` instance. The input is never modified.

#### `addDays(date, days)` / `subtractDays(date, days)`
Adds or subtracts a specified number of days.

#### `addHours(date, hours)` / `addMinutes(date, minutes)`
Adds hours or minutes to a date.

#### `addMonths(date, months)`
Adds or subtracts months with automatic end-of-month clamping (e.g., adding 1 month to January 31 yields February 28, or February 29 during leap years).

#### `addYears(date, years)`
Adds or subtracts years with proper leap-year adjustment for February 29.

---

### 4. Relative Time

#### `timeAgo(date, [baseDate=new Date()])`
Returns a human-friendly string representing elapsed time in the past:
- `'just now'` (< 45 seconds)
- `'5 minutes ago'`
- `'2 hours ago'`
- `'3 days ago'`
- `'1 month ago'`
- `'1 year ago'`

#### `timeUntil(date, [baseDate=new Date()])`
Returns a human-friendly representation for future dates:
- `'in 5 minutes'`
- `'in 2 hours'`
- `'in 3 days'`

---

### 5. Date Validation

#### `isValidDate(value)`
Returns `true` if the input is a valid date object, parseable date string, or timestamp. Returns `false` for `null`, `undefined`, empty strings, or unparseable inputs.

#### `isToday(date)`
Returns `true` if the date falls on today's calendar day in local time.

#### `isPastDate(date)`
Returns `true` if the date timestamp is earlier than `Date.now()`.

#### `isFutureDate(date)`
Returns `true` if the date timestamp is later than `Date.now()`.

#### `isSameDay(date1, date2)`
Returns `true` if both dates share the same calendar year, month, and day in local time.

#### `isLeapYear(yearOrDate)`
Determines whether a numeric year, Date instance, or date string belongs to a leap year.

---

### 6. Date Comparison

#### `isBefore(date1, date2)`
Returns `true` if `date1` is chronologically prior to `date2`.

#### `isAfter(date1, date2)`
Returns `true` if `date1` is chronologically subsequent to `date2`.

#### `isBetween(date, startDate, endDate, inclusive = false)`
Returns `true` if `date` falls chronologically between `startDate` and `endDate`. Supports both exclusive (default) and inclusive boundary checking.

---

## Testing

Run the test suite using Vitest:

```bash
npm test
```

## Repository

[GitHub: Divyam-Nailwal/date-helper-js](https://github.com/Divyam-Nailwal/date-helper-js)

## License

[MIT](LICENSE) © Divyam Nailwal
