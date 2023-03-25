import loadable from '@loadable/component';
import { Router } from '@remix-run/router';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { loader as movieDetailLoader } from 'src/core/movies/movies/movie/action-loaders/movie-loaders';
import { loaderWithPlanets } from 'src/core/characters/character/action-loaders/loaders';


// Lazy load components
const CoreLayout = loadable(() => import('../core/core/CoreLayout'));
const CoreEntityLayout = loadable(() => import('../core/core/entity/CoreEntityLayout'));
const CoreEntityAll = loadable(() => import('../core/core/entity/all/CoreEntityAll'));
const CoreEntityDetail = loadable(() => import('../core/core/entity/detail/CoreEntityDetail'));

const MovieLayoutLazy = loadable(() => import('../core/movies/AllMoviesLayout'));
const CoreMoviesLazy = loadable(() => import('../core/movies/movies/Movies'));
const CoreMovieLazy = loadable(() => import('../core/movies/movies/movie/Movie'));

const FavoritesLayout = loadable(() => import('../core/favorites/FavoritesLayout'));
const FavoritesAll = loadable(() => import('../core/favorites/all/FavoritesAll'));
const Favorite = loadable(() => import('../core/favorites/favorite/Favorite'));

const PlanetsLayout = loadable(() => import('../core/planets/PlanetsLayout'));
const PlanetsAll = loadable(() => import('../core/planets/all/PlanetsAll'));
const Planet = loadable(() => import('../core/planets/planet/Planet'));

const VehiclesLayout = loadable(() => import('../core/vehicles/VehiclesLayout'));
const VehiclesAll = loadable(() => import('../core/vehicles/all/VehiclesAll'));
const Vehicle = loadable(() => import('../core/vehicles/detail/Vehicle'));

const StarshipsLayout = loadable(() => import('../core/starships/StarshipsLayout'));
const StarshipsAll = loadable(() => import('../core/starships/all/StarshipsAll'));
const Starship = loadable(() => import('../core/starships/detail/Starship'));

const SpeciesLayout = loadable(() => import('../core/species/SpeciesLayout'));
const SpeciesAll = loadable(() => import('../core/species/all/SpeciesAll'));
const Specie = loadable(() => import('../core/species/detail/Specie'));

const CharactersLayout = loadable(() => import('../core/characters/CharactersLayout'));
const CharactersAll = loadable(() => import('../core/characters/all/CharactersAll'));
const CharacterLayout = loadable(() => import('../core/characters/character/CharacterLayout'));

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
          }
        ]
      },
      {
        path: 'characters',
        element: <CharactersLayout />,
        id: 'swCharacters',
        children: [
          {
            index: true,
            element: <CharactersAll />,
          },
          {
            path: ':characterId',
            element: <CharacterLayout />,
            loader: loaderWithPlanets
          },
        ]
      },
      {
        path: 'planets',
        element: <PlanetsLayout />,
        id: 'swPlanets',
        children: [
          {
            index: true,
            element: <PlanetsAll />,
          },
          {
            path: ':planetId',
            element: <Planet />,
          },
        ]
      },
      {
        path: 'vehicles',
        element: <VehiclesLayout />,
        id: 'vehicles',
        children: [
          {
            index: true,
            element: <VehiclesAll />,
          },
          {
            path: ':vehicleId',
            element: <Vehicle />,
          },
        ]
      },
      {
        path: 'starships',
        element: <StarshipsLayout />,
        id: 'starships',
        children: [
          {
            index: true,
            element: <StarshipsAll />,
          },
          {
            path: ':starshipId',
            element: <Starship />,
          },
        ]
      },
      {
        path: 'species',
        element: <SpeciesLayout />,
        id: 'species',
        children: [
          {
            index: true,
            element: <SpeciesAll />,
          },
          {
            path: ':specieId',
            element: <Specie />,
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
      },
      {
        path: 'core',
        element: <CoreLayout />,
        children: [
          { index: true, element: <Navigate replace to="starships" /> },
          {
            path: ':coreEntityId',
            element: <CoreEntityLayout />,
            id: 'coreEntity',
            children: [
              {
                index: true,
                element: <CoreEntityAll />,
              },
              {
                path: ':coreEntityDetailId',
                element: <CoreEntityDetail />,
              },
            ]
          },
        ]
      }
    ]
  }
]);

export default routeList;