import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { useAppDispatch } from "src/store/appHook";
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";
import { useFetchPlanetQuery } from "src/core/store/swapi/swapi";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import ErrorPage from "src/404/ErrorPage";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import { useMemo, useState } from "react";
import { StarwarsPlanet } from "src/shared/models/starwars.model";
import { QueryObj } from "src/shared/models/url";
import { startCase } from 'lodash';
import { isNumeric, numberFormatter } from "src/shared/utils/number.utils";


function Planet() {
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const { planetId } = useParams();
  const [ openEditDialog, setOpenEditDialog ] = useState<boolean>(false);
  const { data, isLoading, isFetching, error, isError, refetch } = useFetchPlanetQuery(planetId!);

  const display = useMemo(() => {
    let list: QueryObj[] = [];
    list = displayList.map((key: string) => {
      return {
        key,
        value: (`${data?.result.properties[key as keyof StarwarsPlanet]}`)
      };
    });
    return list;
  }, [data]);

  const onRefreshHandler = () => {
    refetch();
  };

  const onEditHandler = () => {
    setOpenEditDialog(true);
  };

  const onDialogCloseHandler = (editedData?: StarwarsPlanet) => {
  };
  
  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="starship" />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!data) {
    return null;
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
              <Button startIcon={ <RefreshIcon /> } variant="text" onClick={ onRefreshHandler }>Refresh</Button>
              <Divider orientation="vertical" variant="middle" flexItem sx={ {mr: 1, ml: 1} } />
              <Button startIcon={ <EditIcon /> } variant="text" onClick={ onEditHandler }>Edit</Button>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              { isFetching && <ProgressCircle size={ 20 } /> }
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      <Box mt={ 2 } m={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'med' }>
          <Grid xs={ 12 } sx={ {border: '1px solid #ddd', borderRadius: '10px', p: 2} }>
            <Stack direction={ isMobile ? "column" : "row" } justifyContent="start" alignItems="center">
              <Typography variant='h4' sx={ {fontWeight: 500} } mr={ 2 }>
                { data.result.properties.name }
              </Typography>
              <Typography variant='body1' title={ `${data.result.properties.population} population` }>
                ({ isNumeric(data.result.properties.population) ? ((numberFormatter.format(+data.result.properties.population))) : data.result.properties.population } pop.)
              </Typography>
            </Stack>
            <Divider sx={ {my: 2} } />
            <Stack direction="column" >
              {
                display.map((res) => {
                  return (
                    <Box key={ res.key } mb={ 1 }>
                      <Stack direction={ isMobile ? "column" : "row" } justifyContent="start" 
                        alignItems={ isMobile ? "start" : "center" }>
                        <Typography variant='h6' fontWeight={ 300 }>
                          { startCase(res.key) }
                        </Typography>
                        {!isMobile && <Typography mr={ 1.5 }>:</Typography>}
                        <Typography variant='h5'>
                          { isNumeric(res.value) ? ((+res.value).toLocaleString()) : res.value }
                        </Typography>
                      </Stack>
                    </Box>
                  );
                })
              }
            </Stack>
          </Grid>
        </LayoutWithGutter>
      </Box>

    </Stack>
  );
}

export default Planet;


const displayList = ['diameter', 'rotation_period', 'orbital_period', 'gravity', 'population', 'climate', 
  'terrain', 'surface_water'];