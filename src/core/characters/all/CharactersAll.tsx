import { Link, LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { BASE_SW_API } from "src/shared/api/endpoints";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Tooltip, IconButton, Typography } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import FilterInput from "src/core/movies/movies/filter/FilterInput";
import MovieCard from "src/core/movies/movies/MovieCard";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import LoadingBackdrop from "src/shared/loading-backdrop/LoadingBackdrop";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { useCallback } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { fetchCharacters } from "src/core/store/characters/characters.thunks";
import * as fromCharactersSelectors from '../../store/characters/characters.selectors';
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { HttpParams } from "src/shared/models/http.model";


const CharactersAll = () => {

  //const characters = useRouteLoaderData('swCharacters') as StarwarsContent[];
  const characters: StarwarsContent[] = useAppSelector(fromCharactersSelectors.selectAll);
  const firstTimeLoading: boolean = useAppSelector(fromCharactersSelectors.firstTimeLoading);
  const apiLoading: boolean = useAppSelector(fromCharactersSelectors.apiLoading);
  const currentFetchParams: HttpParams | undefined = useAppSelector(fromCharactersSelectors.extraParams);
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  
  const onFilterChangeHandler = useCallback((charName: string) => {
    if (charName && charName.trim() !== '') {
      dispatch(fetchCharacters({name: charName}));
    } else {
      dispatch(fetchCharacters());
    }
  }, [dispatch]);

  if (firstTimeLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="characters" />
    </Stack>
  );
  
  return (
    <Stack direction="column" width="100%">
      <AppToolbar toolbarProps={ {
        position:"sticky",
        sx:{top: isMobile ? '56px':'64px'}
      } }>
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Grid container xs={ 12 }>
                <Grid xs={ 8 }>
                  <FilterInput filterChange={ onFilterChangeHandler } currentText={ currentFetchParams?.name } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { apiLoading && <ProgressCircle size={ 20 } /> }
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      <SimpleGridDisplay data={ characters } itemUrlPath="characters" />

    </Stack>
  );
};

export default CharactersAll;

export function loader({ params }: LoaderFunctionArgs): Promise<StarwarsContent[]> {

  const restUrl: string = urlcat(
    BASE_SW_API, 
    `people`, 
    { limit: PAGE_LIMIT, page: PAGE_COUNT }
  );

  
  const people$ = ajax<HttpResponse<StarwarsContent>>(restUrl).pipe(
    delay(0),
    map((res) => {
      return res.response.results;
    })
  );

  return firstValueFrom(people$);
};