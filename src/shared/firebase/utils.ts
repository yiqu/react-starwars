export const appendKeyFireData = <T>(fireData: T) => {
  let res: FirebaseDataWithId<T>[] = [];
  const keys = Object.keys(fireData ?? []);
  keys.forEach((key) => {
    res.push({
      id: key,
      ...((fireData as any)[key])
    });
  });
  return res;
};

export type FirebaseDataWithId<T> = T & {id: string};