
export function transformFirebaseData<T>(fireData: {[key: string]: T}): T[] {
  let result: T[] = [];
  if (fireData) {
    const keys = Object.keys(fireData ?? {});
    keys.forEach((key) => {
      result.push({
        fireId: key,
        ...fireData[key]
      });
    });
  }
  return result;
}