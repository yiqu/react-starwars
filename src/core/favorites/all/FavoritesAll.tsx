import { FavoriteToSave } from "src/shared/models/starwars.model";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingSkeleton from "src/shared/loading/LoadingSkeleton";
import FavoriteCard from "./FavoriteCard";

export default function FavoritesAll() {

  const favorites: FavoriteToSave[] = useAppSelector(fromFavSelectors.selectFavorited);
  const isFirstTimeLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsFirstTimeLoading);

  return (
    <LoadingSkeleton loading={ isFirstTimeLoading }>
      <Grid container spacing={ 2 }>
        {
          favorites.map((fav) => {
            return (
              <Grid md={ 4 } xs={ 12 } key={ fav.fireId } >
                <FavoriteCard fav={ fav } />
              </Grid>
            );
          })
        }
      </Grid>

    </LoadingSkeleton>
  );
};