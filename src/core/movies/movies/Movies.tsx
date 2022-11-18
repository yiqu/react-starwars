/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useCallback, useMemo, useState } from "react";
import { saveFavorite, updateFavorite } from "src/core/fetchers/favorites";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { FavoriteToSave, HttpResponse, HttpResponse2, HttpResponse2List, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import { axiosPost } from "src/shared/rest/axios-rest";
import MovieCard from "./MovieCard";

const userId = 'yqu';

const Movies = () => {
  const arrOfItems = Array.from(Array(3).keys());

  const [saveFavLoading, setSaveFavLoading] = useState<boolean>(false);
  const [fetchFavoriteTime, setFetchFavoriteTime] = useState<number>(0);

  const {data: favMovies, error: favError, loading: favLoading, mutate: favMutate} = 
    useFetchFavorites({userId: userId, params: {fetchTime: fetchFavoriteTime}});

  const {data, error, loading, mutate} = useFetchMovies<HttpResponse2List<StarwarsFilm>>({ url: 'films', params: {fetchTime: 0} }, favMovies);

  const sorted: ResultProperty<StarwarsFilm>[] | undefined = useMemo(() => {
    const sortedArr = data?.result ?? [];
    if (sortedArr) {
      sortedArr.sort((prev, next) => {
        return prev.properties.episode_id > next.properties.episode_id ? 1 : -1;
      });
    }
    sortedArr.forEach((res: ResultProperty<StarwarsFilm>) => {
      res.properties.userFavorited = favMovies[res.properties.episode_id]?.isCurrentFavorite;
    });

    return sortedArr;
  }, [data, favMovies]);

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

  return (
    <Grid xs={ 12 } container spacing={ 2 } mx={ 2 } my={ 2 }>
      {/* All Movies
      <Button onClick={ refresh }>Refresh</Button> */}
      { error && (<div>Error occured:</div>)}
      { loading ? (<>{ arrOfItems.map((item) => <Grid key={ item } xs={ 4 }> <LoadingSkeleton /> </Grid>) }</>) : 
        (
          sorted?.map((res) => {
            return (
              <Grid key={ res.properties.episode_id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 4 } xl={ 4 }>
                <MovieCard film={ res.properties } onFavoriteToggle={ onFavoriteToggleHandler } 
                  favorited={ favMovies[res.properties.episode_id] } uid={ res.uid } >
                </MovieCard>
              </Grid>
            );
          })
        )
      }

    </Grid>
  );
};

export default Movies;