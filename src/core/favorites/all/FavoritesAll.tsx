import { FavoriteToSave } from "src/shared/models/starwars.model";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingSkeleton from "src/shared/loading/LoadingSkeleton";
import FavoriteCard from "./FavoriteCard";
import { Box, Typography } from "@mui/material";

export default function FavoritesAll() {

  const favorites: FavoriteToSave[] = useAppSelector(fromFavSelectors.selectFilteredFavorites);
  const isFirstTimeLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsFirstTimeLoading);
  const isLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsLoading);

  if (!isLoading && favorites.length < 1) return (<Grid container><Grid md={ 4 } xs={ 12 }><Typography>No favorites found.</Typography></Grid></Grid>);

  return (
    <LoadingSkeleton loading={ isFirstTimeLoading }>
      <Grid container spacing={ 2 }>
        {
          favorites.map((fav) => {
            return (
              <Grid md={ 2 } xs={ 12 } key={ fav.fireId } >
                <FavoriteCard fav={ fav } />
              </Grid>
            );
          })
        }
      </Grid>

    </LoadingSkeleton>
  );
};