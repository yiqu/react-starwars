/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import useFetchMovies from "src/core/hooks/useFetchMovies";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromAllFilmsSelectors from '../store/all-films/films.selectors';
import * as fromAllFilmsActions from '../store/all-films/films.actions';
import { HttpParams } from "src/shared/models/http.model";
import { AXIOS_ERROR_CODE } from "src/shared/models/axios.model";

export default function AllMovieLayout() {

  const dispatch = useAppDispatch();

  const apiParams: HttpParams | undefined = useAppSelector(fromAllFilmsSelectors.selectApiParams);

  const { allFilms, allFilmsError, allFilmsLoading, allFilmsValidating } = useFetchMovies({ params: undefined });
  
  useEffect(() => {
    dispatch(fromAllFilmsActions.fetchPayloadSuccess(allFilms ?? []));
  }, [allFilms, dispatch]);

  useEffect(() => {
    dispatch(fromAllFilmsActions.setLoading(allFilmsLoading));
  }, [allFilmsLoading, dispatch]);

  useEffect(() => {
    dispatch(fromAllFilmsActions.setValidating(allFilmsValidating));
  }, [allFilmsValidating, dispatch]);

  useEffect(() => {
    if (allFilmsError && allFilmsError.code !== AXIOS_ERROR_CODE.ERR_CANCELED) {
      dispatch(fromAllFilmsActions.fetchFailure(allFilmsError));
    }
  }, [allFilmsError, dispatch]);

  useEffect(() => {
    dispatch(fromAllFilmsActions.setParams2({fetchTime: new Date().getTime()}));
  }, [dispatch]);

  return (
    <Outlet />
  );
};