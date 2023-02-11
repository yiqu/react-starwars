// a type that has T data and an 'id' field
export type FirebaseDataWithId<T> = T & { id: string };

export interface FirebaseData<T> {
  [key: string]: T;
}

export interface FirebasePostPayload {
  name: string;
}