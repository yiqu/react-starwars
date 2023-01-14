import { AxiosResponse } from 'axios';
import { BASE_FIREBASE_URL } from 'src/shared/api/endpoints';
import { FavoriteToSave } from 'src/shared/models/starwars.model';
import { axiosPost } from 'src/shared/rest/axios';
import urlcat from "urlcat";

const baseUrl: string = 'swdb/';

