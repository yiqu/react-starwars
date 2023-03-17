
export function scrollToElementById(id: string, timeout?: number, position?: ScrollLogicalPosition): void {
  let top = document.getElementById(id);
  if (top) {
    setTimeout(() => {
      top?.scrollIntoView({block: position as any ?? "end"});
      top = null;
    }, timeout ?? 0);
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};


export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};

export function convertCommaDecimalNumberToNumber(num: string): number {
  if (num) {
    const stripped = num.trim();
    return parseFloat(stripped.replace(/,/g, ''));
  }
  return NaN;
}

export function insertIntoArrayAtIndex<T>(arr: T[], index: number, item: T): T[] {
  const arrCopy: T[] = JSON.parse(JSON.stringify(arr));
  arrCopy.splice(index, 0, item);
  return arrCopy;
}

export function capitalizeFirstLetter(str: string): string | undefined {
  if (str) {
    return (str.charAt(0).toUpperCase()) + str.slice(1);
  }
  return undefined;
}

export function objectsEqual(o1: any, o2: any): boolean {
  return typeof o1 === 'object' && Object.keys(o1).length > 0
  ? Object.keys(o1).length === Object.keys(o2).length
      && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
  : o1 === o2;
}

export function arraysEqual(a1: any[], a2: any[]): boolean {
  if (a1 && a2) {
    return a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));
  }
  return false;
}

export function removeEmptyFromObject(obj: any): any {
  if (!obj) {
    return {};
  }
  const result = JSON.parse(JSON.stringify(obj));
  Object.keys(result).forEach((key) => {
    if (result[key] === null || result[key] === undefined) {
      delete result[key];
    }
  });
  return result;
}

export function isObjectEmpty(obj: any): boolean {
  if (obj) {
    const keys = Object.keys(obj);
    return keys.length < 1;
  }
  return false;
}

// Remove objects in an array if the object has the same value by key provided
export function deduplicateObjectArrayByKey<T>(arr: T[], key: string): T[] {
  if (arr && arr.length > 0) {
    const uniqueByValues: any[] = arr.map((res: T) => res[key as keyof T]);
    const filtered = arr.filter((res: T, index: number) => {
      return !uniqueByValues.includes(res[key as keyof T], index + 1);
    });
    return filtered;
  }
  return [];
}

