/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import useFetchMovies from "src/core/hooks/useFetchMovies";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromAllFilmsSelectors from '../store/all-films/films.selectors';
import * as fromAllFilmsActions from '../store/all-films/films.actions';
import { HttpParams } from "src/shared/models/http.model";

export default function AllMovieLayout() {

  const dispatch = useAppDispatch();
  const apiParams: HttpParams | undefined = useAppSelector(fromAllFilmsSelectors.selectApiParams);

  const { allFilms, allFilmsError, allFilmsLoading, allFilmsValidating } = useFetchMovies({ params: apiParams });
  
  useEffect(() => {
    dispatch(fromAllFilmsActions.fetchPayloadSuccess(allFilms ?? []));
  }, [allFilms, dispatch]);

  useEffect(() => {
    dispatch(fromAllFilmsActions.setFirstTimeLoading(allFilmsLoading));
  }, [allFilmsLoading, dispatch]);

  useEffect(() => {
    dispatch(fromAllFilmsActions.setApiLoading(allFilmsValidating));
  }, [allFilmsValidating, dispatch]);

  return (
    <Outlet />
  );
};