/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";

import MovieIconOutlined from '@mui/icons-material/MovieOutlined';
import MovieIcon from '@mui/icons-material/Movie';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import Person4IconOutlined from '@mui/icons-material/Person4Outlined';
import Person4Icon from '@mui/icons-material/Person4';

import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import { NavigationItem } from "../models/nav-item.model";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { CameraRoll, CameraRollOutlined } from "@mui/icons-material";


export const GET_LEFT_NAV_ITEMS = () => {
  const LEFT_NAV_ITEMS = [
    new NavigationItem('Favorites', 'favorites', ['/', 'favorites'], <FavoriteBorderOutlinedIcon color='primary' />),
    new NavigationItem('All', 'movies', ['/', 'movies'], <MovieIconOutlined color='primary' />),
    new NavigationItem('Characters', 'characters', ['/', 'characters'], <Person4IconOutlined color='primary' />),
    new NavigationItem('Mine', 'personal-films', ['/', 'personal-films'], <CameraRollOutlined color='primary' />),
    new NavigationItem('Add', 'create-new', ['/', 'create-new'], <AddAPhotoOutlinedIcon color='primary' />),
    new NavigationItem('About', 'about', ['/', 'about'], <InfoIconOutlined color='primary' />),
  ];
  return LEFT_NAV_ITEMS;
};

export const getFilledIcon = (pathName: string): JSX.Element => {
  switch (pathName) {
    case 'favorites': {
      return <FavoriteOutlinedIcon color='primary' />;
    }
    case 'movies': {
      return <MovieIcon color='primary' />;
    }
    case 'characters': {
      return <Person4Icon color='primary' />;
    }
    case 'about': {
      return <InfoIcon color='primary' />;
    }
    case 'create-new': {
      return <AddAPhotoIcon color='primary' />;
    }
    case 'personal-films': {
      return <CameraRoll color='primary' />;
    }
  }
  return <>None</>;
};