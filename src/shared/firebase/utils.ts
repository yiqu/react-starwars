import { FirebaseData } from "../models/firebase.model";

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

export const convertFirebaseDataToList = <T>(fireData: FirebaseData<T>): T[] => {

  const result: T[] = [];

  if (fireData) {
    const keys = Object.keys(fireData);
    keys.forEach((key) => {
      result.push({
        fireId: key,
        ...fireData[key],
      });
    });
  }

  return result;
};
