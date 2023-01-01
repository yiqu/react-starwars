/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';

export default function AllMovieLayout() {

  return (
    <Grid container sx={ {bgcolor:(theme) => theme.palette.mode === 'light' ? 'grey.100' : null } }>

      <Outlet />

    </Grid>
  );
};