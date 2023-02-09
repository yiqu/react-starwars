import { FavoriteToSave } from "src/shared/models/starwars.model";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingSkeleton from "src/shared/loading/LoadingSkeleton";

export default function FavoritesAll() {

  const dispatch = useAppDispatch();
  const favorites: FavoriteToSave[] = useAppSelector(fromFavSelectors.selectFavorited);
  const isFirstTimeLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsFirstTimeLoading);

  return (
    <LoadingSkeleton loading={ isFirstTimeLoading }>
      <Grid container spacing={ 2 }>
        <Grid xs={ 6 }>
          <div>
            FAV item
          </div>
        </Grid>
        <Grid xs={ 6 }>
          <div>
            FAV item
          </div>
        </Grid>
        <Grid xs={ 6 }>
          <div>
            FAV item
          </div>
        </Grid>
      </Grid>

    </LoadingSkeleton>
  );
};