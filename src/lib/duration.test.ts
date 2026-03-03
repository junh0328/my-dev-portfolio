import { describe, expect, it } from 'vitest';
import {
  calculateDuration,
  formatCareerYear,
  formatDuration,
  getCompanyDuration,
} from './duration';

describe('duration utilities', () => {
  it('calculates months including the start month', () => {
    const result = calculateDuration('2024.01', '2024.03');

    expect(result).toEqual({
      years: 0,
      months: 3,
      totalMonths: 3,
    });
  });

  it('formats localized duration strings', () => {
    expect(formatDuration({ years: 2, months: 5, totalMonths: 29 }, 'ko')).toBe(
      '2년 5개월'
    );
    expect(formatDuration({ years: 1, months: 1, totalMonths: 13 }, 'en')).toBe(
      '1 year 1 month'
    );
  });

  it('returns 0 duration for unknown company key', () => {
    expect(getCompanyDuration('unknown')).toEqual({
      years: 0,
      months: 0,
      totalMonths: 0,
    });
  });

  it('formats career year with ordinal suffix in english', () => {
    expect(
      formatCareerYear({ years: 3, months: 0, totalMonths: 36 }, 'en')
    ).toBe('3rd Year');
  });
});
