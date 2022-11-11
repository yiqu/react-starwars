/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { useFetcher, useMatches,
  useParams, useNavigate, useLocation, Route, Routes, useLoaderData, defer, Await
} from "react-router-dom";
import useQuery from "../query-param-hook/QueryParam";

const useShowComments = () => {
  const location = useLocation();
  const { urlSearchParams: queryParams, allParams } = useQuery();

  return {
    shouldShow: false
  };
};

export default useShowComments;