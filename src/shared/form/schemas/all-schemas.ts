import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().required(),
  director: Yup.string().required().min(1),
  characters: Yup.array().min(1, "At least one character is required"),
  // starships: Yup.array().min(1,  "At least one starship is required"),
  // opening_crawl: Yup.string().required(),
  // planets: Yup.array().min(1,  "At least one planet is required"),
  // species: Yup.array().min(1,  "At least one species is required"),
  // vehicles: Yup.array().min(1,  "At least one vehicle is required"),
});