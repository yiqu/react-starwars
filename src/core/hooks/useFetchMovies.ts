/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { useFetcher, useMatches,
  useParams, useNavigate, useLocation, Route, Routes, useLoaderData, defer, Await
} from "react-router-dom";
import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import { axiosStarwarsGet } from "src/shared/rest/starwars-api";
import useSWR from "swr";
import { axiosFetcher } from "../fetchers/movies";

const useFetchMovies = (props: FetchMovieHookProp) => {
  const { data, isValidating, error, mutate } = useSWR([props.url, props.params], axiosFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    loading: isValidating || (!error && !data),
    error,
    mutate
  };
};

export default useFetchMovies;