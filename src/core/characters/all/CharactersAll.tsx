import { Link, LoaderFunctionArgs, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { BASE_SW_API } from "src/shared/api/endpoints";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { HttpResponse, ResultProperty, StarwarsContent, StarwarsSearchable } from 'src/shared/models/starwars.model';
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Tooltip, IconButton, Typography, Box, Button } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import { useCallback, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { selectFetchPageUrl, selectNextPageUrl, selectPage, selectPagination, selectTotalPages, selectTotalRecords } from "src/core/store/swapi/swapi.selectors";
import { useFetchCharactersInfiniteQuery, useFetchCharactersQuery } from "src/core/store/swapi/swapi";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import { scrollToElementById } from "src/shared/utils/general.utils";
import { dispatchPaging } from "src/core/store/swapi/swapi.reducer";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSkeleton from "src/shared/components/loading/LoadingSkeleton";
import { flexCenter } from "src/shared/utils/css.utils";
import SearchAndPaginationBarDisplay from "src/core/shared/display/SearchAndPaginationBar";


const ENTITY_NAME = "people";

const CharactersAll = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const fetchUrl: string | undefined = useAppSelector(selectFetchPageUrl(ENTITY_NAME));
  const nextPage: string | null | undefined = useAppSelector(selectNextPageUrl(ENTITY_NAME));
  const totalRecords: number = useAppSelector(selectTotalRecords(ENTITY_NAME));
  const { data, isFetching, isLoading, error, isSuccess, isError, refetch } = useFetchCharactersInfiniteQuery(fetchUrl ?? skipToken);
  
  const navigate = useNavigate();


  useEffect(() => {
    scrollToElementById('top-pagination', 300, "end");
  }, [isSuccess]);

  const onPageHandler = () => {
    dispatch(dispatchPaging({entityId: ENTITY_NAME, pagination: {page: -1, fetchUrl: nextPage}}));
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
      <SearchAndPaginationBarDisplay>
        <Box flexBasis="35%">
          <SearchAutoComplete entity={ ENTITY_NAME } onResultSelect={ onResultSelectHandler } />
        </Box>
        <Box flexBasis="15%" sx={ {display: 'flex'} } justifyContent="end" alignItems="center">
          <Typography>
            1 - { data.results.length } of { totalRecords }
          </Typography>
        </Box>
      </SearchAndPaginationBarDisplay>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size="skinny">
          <InfiniteScroll
            dataLength={ data.results.length }
            next={ onPageHandler }
            hasMore={ !!nextPage }
            loader={ <LoadingSkeleton count={ 3 } sxProps={ {height: '4rem'} }/> }
            endMessage={ <></> }
            className="scroller-parent">
            {
              data.results.map((display: StarwarsContent) => {
                return (
                  <Stack key={ display.uid } direction="column">
                    {
                      <Box sx={ { ...flexCenter, width: '100%' } }>
                        <Button fullWidth component={ Link } to={ `./${display.uid}` } state={ {someData: 'some-cool-data' } } sx={ {height: '3rem'} }> { display.name } </Button>
                      </Box>
                    }
                  </Stack>
                );
              })
            }
          </InfiniteScroll>
        </LayoutWithGutter>
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