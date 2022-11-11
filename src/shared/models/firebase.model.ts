// a type that has T data and an 'id' field
export type FirebaseDataWithId<T> = T & { id: string };