/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useCallback, useMemo, useState } from "react";
import { saveFavorite } from "src/core/fetchers/favorites";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { FavoriteToSave, HttpResponse, HttpResponse2, HttpResponse2List, StarwarsFilm } from "src/shared/models/starwars.model";
import { axiosPost } from "src/shared/rest/axios-rest";
import MovieCard from "./MovieCard";

const userId = 'yqu';

const Movies = () => {
  const arrOfItems = Array.from(Array(3).keys());

  const [saveFavLoading, setSaveFavLoading] = useState<boolean>(false);
  const [fetchFavoriteTime, setFetchFavoriteTime] = useState<number>(0);

  const {data, error, loading, mutate} = useFetchMovies<HttpResponse2List<StarwarsFilm>>({url: 'films', params: {fetchTime: 0}});
  const {data: favMovies, error: favError, loading: favLoading, mutate: favMutate} = 
    useFetchFavorites({userId: userId, params: {fetchTime: fetchFavoriteTime}});

  const sorted = useMemo(() => {
    const sortedArr = data?.result;
    if (sortedArr) {
      return sortedArr.sort((prev, next) => {
        return prev.properties.episode_id > next.properties.episode_id ? 1 : -1;
      });
    }
    return sortedArr;
  }, [data]);

  const onFavoriteHandler = (film: StarwarsFilm) => {
    const { url: filmUrl } = film;
    const filmId = (filmUrl.split("/"))[filmUrl.split("/").length - 2];
    const favorite: FavoriteToSave = {
      filmUrl,
      filmId,
      isCurrentFavorite: true,
      lastUpdated: new Date().getTime(),
      episodeId: film.episode_id
    };
    setSaveFavLoading(true);
    saveFavorite(userId, favorite).then((res) => {
    }).catch((err) => {
      // toast error
    }).finally(() => {
      // show toast save done
      setSaveFavLoading(false);
      setFetchFavoriteTime(new Date().getTime());
    });
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
                <MovieCard film={ res.properties } onFavorite={ onFavoriteHandler } 
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