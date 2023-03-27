import { Outlet, useParams } from "react-router-dom";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Button } from "@mui/material";
import FilterInput from "src/core/movies/movies/filter/FilterInput";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { useCallback } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { useAppDispatch } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";

function CoreEntityLayout() {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const { coreEntityId } = useParams<string>();

  const onFilterChangeHandler = useCallback((charName: string) => {
    if (charName && charName.trim() !== '') {
    } else {
    }
  }, []);

  const onNextPageHandler = () => {
  };

  const onPrevPageHandler = () => {
  };

  if (false) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="planets" />
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
                  <FilterInput filterChange={ onFilterChangeHandler } currentText={ '' } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { false && <ProgressCircle size={ 20 } /> }
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
      
      <div>
        <Button onClick={ onPrevPageHandler }>Previous</Button>
        <Button onClick={ onNextPageHandler }>Next</Button>
      </div>
      {/* <SimpleGridDisplay data={ [] } itemUrlPath="xxx" /> */}

      <Outlet />

    </Stack>
  );
};

export default CoreEntityLayout;
