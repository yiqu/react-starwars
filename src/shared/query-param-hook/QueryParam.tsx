/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import { QueryObj, UrlQuery } from "../models/url";

function useQuery(): UrlQuery {
  const { search } = useLocation();

  const searchParams = React.useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
  
  const allParams: QueryObj[] = [];

  searchParams.forEach((val, key) => {
    allParams.push({
      key,
      value: val
    });
  });

  return {
    urlSearchParams: searchParams,
    allParams: allParams
  };
}

export default useQuery;

