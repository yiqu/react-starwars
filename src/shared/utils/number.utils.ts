/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min: number, max: number): number => {
  const minn = Math.ceil(min);
  const maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
};

export function isNumeric(val: any): boolean {
  if (typeof val === 'number') {
    return true;
  }
  return !isNaN(+val) && !isNaN(parseFloat(val + ''));
}

export function getLocaleNumber(num: any): string {
  return (+num).toLocaleString(undefined);
}


export const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' });