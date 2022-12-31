/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Button, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import { saveFavorite, updateFavorite } from "src/core/fetchers/favorites";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { HttpParams } from "src/shared/models/http.model";
import { FavoriteToSave, HttpResponse, HttpResponse2,
  HttpResponse2List, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import FilterInput from "./filter/FilterInput";
import MovieCard from "./MovieCard";

const userId = 'yqu';

const Movies = () => {
  const arrOfItems = Array.from(Array(3).keys());

  const [saveFavLoading, setSaveFavLoading] = useState<boolean>(false);
  const [fetchFavoriteTime, setFetchFavoriteTime] = useState<number>(0);
  const [fetchMoviesParams, setFetchMoviesParams] = useState<HttpParams>({});

  const {data: favMovies, error: favError, loading: favLoading} = 
    useFetchFavorites({userId: userId, params: {fetchTime: fetchFavoriteTime}});

  const { allFilms, allFilmsError, allFilmsLoading, allFilmsValidating } = 
    useFetchMovies({ params: fetchMoviesParams });

  const sorted: ResultProperty<StarwarsFilm>[] | undefined = useMemo(() => {
    const sortedArr = allFilms ?? [];
    if (sortedArr) {
      sortedArr.sort((prev: ResultProperty<StarwarsFilm>, next: ResultProperty<StarwarsFilm>) => {
        return prev.properties.episode_id > next.properties.episode_id ? 1 : -1;
      });
    }
    sortedArr.forEach((res: ResultProperty<StarwarsFilm>) => {
      res.properties.userFavorited = favMovies[res.properties.episode_id]?.isCurrentFavorite;
    });

    return sortedArr;
  }, [allFilms, favMovies]);

  const onFavoriteToggleHandler = (film: StarwarsFilm, currentFavoriteStatus?: FavoriteToSave) => {
    const { url: filmUrl } = film;
    const filmId = (filmUrl.split("/"))[filmUrl.split("/").length - 1];

    const favorite: FavoriteToSave = {
      filmUrl,
      filmId,
      lastUpdated: new Date().getTime(),
      episodeId: film.episode_id,
      isCurrentFavorite: true,
    };

    setSaveFavLoading(true);
    // update current favorited item in DB to false status
    if (currentFavoriteStatus) {
      favorite.isCurrentFavorite = !currentFavoriteStatus.isCurrentFavorite;
      favorite.fireId = currentFavoriteStatus.fireId;
      updateFavorite(userId, favorite).then((res) => {
      }).catch((err) => {

      }).finally(() => {
        setSaveFavLoading(false);
        setFetchFavoriteTime(new Date().getTime());
      });

    } else {
      // create new favorited item to save
      saveFavorite(userId, favorite).then((res) => {
      }).catch((err) => {
        // toast error
      }).finally(() => {
        // show toast save done
        setSaveFavLoading(false);
        setFetchFavoriteTime(new Date().getTime());
      });
    }
  };

  const onFilterChangeHandler = useCallback((filterValue: any) => {
    if (filterValue.movieName) {
      setFetchMoviesParams({
        title: filterValue.movieName
      });
    } else {
      setFetchMoviesParams({});
    }
  }, []);

  if (allFilmsLoading) return <LoadingSkeleton count={ 4 } />;
  if (allFilmsError) return <div>Error Page</div>;

  return (
    <Stack direction="column" p={ 2 }>
      <Grid xs={ 12 } sm={ 3 } mb={ 2 }>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <FilterInput filterChange={ onFilterChangeHandler } />
          { allFilmsValidating && <ProgressCircle size={ 25 } /> }
        </Stack>
        
      </Grid>
      <Grid container disableEqualOverflow rowSpacing={ 4 }>
        {sorted?.map((res) => {
          return (
            <Grid key={ res.properties.episode_id } xs={ 12 } sm={ 4 } smOffset={ 4 }>
              <MovieCard film={ res.properties } onFavoriteToggle={ onFavoriteToggleHandler } 
                favorited={ favMovies[res.properties.episode_id] } uid={ res.uid } >
              </MovieCard>
            </Grid>
          );
        })}

      </Grid>
    </Stack>
  );
};

export default Movies;