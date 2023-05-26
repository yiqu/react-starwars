import * as Yup from 'yup';

export const newFilmValidationSchema = Yup.object({
  title: Yup.string().required(),
  director: Yup.string().required().min(1),
  openingCrawl: Yup.string().required('Opening crawl text is a required field').min(5, 'At least 5 characters is required for crawl text'),
  characters: Yup.array().min(1, "At least one character is required"),
  starships: Yup.array().min(1,  "At least one starship is required"),
  planets: Yup.object().required("Planet is a required field"),
  species: Yup.array().min(1,  "At least one species is required"),
  vehicles: Yup.array().min(1,  "At least one vehicle is required"),
});


export const editFilmValidationSchema = Yup.object().shape({
  title: Yup.string().trim().min(2).required(),
  director: Yup.string().trim().min(2).required(),
});