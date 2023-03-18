import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Tooltip, IconButton, Typography, Divider, Box, Button } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import FilterInput from "src/core/movies/movies/filter/FilterInput";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { useCallback, useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay, { DisplayName } from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { starwarsContentApi, useFetchSpeciesQuery } from "src/core/store/swapi/swapi";
import { selectPage, selectTotalPages } from "src/core/store/swapi/swapi.selectors";
import { dispatchPaging } from "src/core/store/swapi/swapi.reducer";
import { scrollToElementById } from "src/shared/utils/general.utils";


function SpeciesAll() {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const page: number = useAppSelector(selectPage);
  const totalPages: number = useAppSelector(selectTotalPages);
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
  const { data, isFetching, isLoading, error, isSuccess, isError, refetch } = useFetchSpeciesQuery({ 
    entity: 'species', 
    pagination: { page },
    urlParams: filterValue ? { name: filterValue } : undefined
  });

  const onFilterChangeHandler = useCallback((charName: string) => {
    if (charName && charName.trim() !== '') {
    } else {
    }
  }, []);
  
  useEffect(() => {
    scrollToElementById('top-pagination', 300, "end");
  }, [isSuccess]);

  const onPageHandler = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(dispatchPaging(page));
  };

  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="species" />
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
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Grid container xs={ 12 }>
                <Grid xs={ 8 }>
                  <FilterInput filterChange={ onFilterChangeHandler } currentText={ filterValue } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { isFetching && <ProgressCircle size={ 20 } /> }
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
      <Box mt={ 2 }>
        <SimpleGridDisplay data={ data.results } itemUrlPath="species" totalPages={ totalPages } page={ page } onPaged={ onPageHandler }
          totalRecords={ data.total_records } isFetching={ isFetching }  />
      </Box>
    </Stack>
  );
};

export default SpeciesAll;
