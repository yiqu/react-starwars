import { Link, LoaderFunctionArgs, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { BASE_SW_API } from "src/shared/api/endpoints";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { HttpResponse, ResultProperty, StarwarsContent, StarwarsSearchable } from 'src/shared/models/starwars.model';
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Tooltip, IconButton, Typography, Box } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import { useCallback, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { selectPage, selectTotalPages } from "src/core/store/swapi/swapi.selectors";
import { useFetchCharactersQuery } from "src/core/store/swapi/swapi";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import { scrollToElementById } from "src/shared/utils/general.utils";
import { dispatchPaging } from "src/core/store/swapi/swapi.reducer";

const ENTITY_NAME = "people";

const CharactersAll = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const page: number = useAppSelector(selectPage(ENTITY_NAME));
  const totalPages: number = useAppSelector(selectTotalPages(ENTITY_NAME));
  const { data, isFetching, isLoading, error, isSuccess, isError, refetch } = useFetchCharactersQuery({ 
    entity: ENTITY_NAME, 
    pagination: { page }
  });
  const navigate = useNavigate();


  useEffect(() => {
    scrollToElementById('top-pagination', 300, "end");
  }, [isSuccess]);

  const onPageHandler = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(dispatchPaging({entityId: ENTITY_NAME, pagination: {page: page}}));
  };

  const onResultSelectHandler = (selection: ResultProperty<StarwarsSearchable> | null) => {
    navigate(`./${selection?.uid}`);
  };

  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ ENTITY_NAME } />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!data) {
    return <></>;
  }
  
  return (
    <Stack direction="column" width="100%">
      <AppToolbar toolbarProps={ {
        position: "sticky",
        sx: {top: isMobile ? '56px':'64px'}
      } }>
        <Grid container xs={ 12 }>
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <SearchAutoComplete entity={ ENTITY_NAME } onResultSelect={ onResultSelectHandler } />
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <SimpleGridDisplay data={ data.results } itemUrlPath={ ENTITY_NAME } totalPages={ totalPages } page={ page } onPaged={ onPageHandler }
          totalRecords={ data.total_records } isFetching={ isFetching }  />
      </Box>
    </Stack>
  );
};

export default CharactersAll;

export function loader({ params }: LoaderFunctionArgs): Promise<StarwarsContent[]> {

  const restUrl: string = urlcat(BASE_SW_API, `people`, { limit: PAGE_LIMIT, page: PAGE_COUNT });
  
  const people$ = ajax<HttpResponse<StarwarsContent>>(restUrl).pipe(
    delay(0),
    map((res) => {
      return res.response.results;
    })
  );

  return firstValueFrom(people$);
};