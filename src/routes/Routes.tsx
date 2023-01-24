import loadable from '@loadable/component';
import { Router } from '@remix-run/router';
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { loader as movieDetailLoader } from '../core/movies/movies/movie/Movie';

// Lazy load components
const MovieLayoutLazy = loadable(() => import('../core/movies/AllMoviesLayout'));
const CoreMoviesLazy = loadable(() => import('../core/movies/movies/Movies'));
const CoreMovieLazy = loadable(() => import('../core/movies/movies/movie/Movie'));

const FavoritesLayout = loadable(() => import('../core/favorites/FavoritesLayout'));
const FavoritesAll = loadable(() => import('../core/favorites/all/FavoritesAll'));
const Favorite = loadable(() => import('../core/favorites/favorite/Favorite'));

const CharactersLayout = loadable(() => import('../core/characters/CharactersLayout'));
const CharactersAll = loadable(() => import('../core/characters/all/CharactersAll'));

const CreateNewFilmLayout = loadable(() => import('../create-new/CreateNewFilmLayout'));
const CreateNewFilm = loadable(() => import('../create-new/core/CreateNewFilm'));

const PersonalFilmLayout = loadable(() => import('../personal-movies/PersonalFilmLayout'));
const PersonalFilm = loadable(() => import('../personal-movies/core/PersonalFilms'));

const AboutLazy = loadable(() => import('../about/About'));
const NotFoundLazy = loadable(() => import('../404/NotFound'));

const routeList: Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundLazy />,
    children: [
      { index: true, element: <Navigate replace to="movies" /> },
      {
        path: 'movies',
        element: <MovieLayoutLazy />,
        children: [
          {
            index: true,
            element: <CoreMoviesLazy />
          },
          {
            path: ':movieId',
            element: <CoreMovieLazy />,
            loader: movieDetailLoader
          }
        ]
      },
      {
        path: 'favorites',
        element: <FavoritesLayout />,
        children: [
          {
            index: true,
            element: <FavoritesAll />
          },
          {
            path: ':favoriteId',
            element: <Favorite />,
            //loader: QuoteDetailLoader
          }
        ]
      },
      {
        path: 'characters',
        element: <CharactersLayout />,
        children: [
          {
            index: true,
            element: <CharactersAll />
          },
        ]
      },
      {
        path: 'create-new',
        element: <CreateNewFilmLayout />,
        children: [
          {
            index: true,
            element: <CreateNewFilm />
          },
        ]
      },
      {
        path: 'personal-films',
        element: <PersonalFilmLayout />,
        children: [
          {
            index: true,
            element: <PersonalFilm />
          },
        ]
      },
      {
        path: 'about',
        element: <AboutLazy />
      }
    ]
  }
]);

export default routeList;