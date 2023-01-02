/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import useFetchPersonalFilms from '../hooks/useFetchPersonalFilms';
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { Stack, Tooltip, IconButton } from '@mui/material';
import FilterInput from 'src/core/movies/movies/filter/FilterInput';
import MovieCard from 'src/core/movies/movies/MovieCard';
import ProgressCircle from 'src/shared/components/progress/CircleProgress';
import AppToolbar from 'src/shared/components/toolbar/Toolbar';
import { DataBlockDisplayMode } from 'src/shared/models/general.model';
import useScreenSize from 'src/shared/hooks/useIsMobile';
import { createSearchParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { StarwarFilmPersonal } from 'src/shared/models/starwars.model';
import PersonalFilmCard from './PersonalFilmCard';



export default function PersonalFilms() {

  const [refetch, triggerRefetch] = useState<number>(0);
  const { isMobile } = useScreenSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);

  const { personalFilms, personalFilmsLoading, personalFilmsError, personalFilmsValidating } = 
    useFetchPersonalFilms({user: 'yqu', params: {fetchTime: refetch}});

  const filmPageDisplayToggleHandler = () => {
    const nextDisplayMode = {
      moviePageDisplayMode: getNextDisplayState(filmPageDisplayMode)
    };
    setSearchParams(nextDisplayMode);
  };

  if (personalFilmsLoading) return <LoadingSkeleton count={ 4 } />;
  if (personalFilmsError) return <div>Error Page</div>;

  return (
    <>
      <AppToolbar 
        toolbarProps={ {
        position:"sticky",
        sx:{top: isMobile ? '56px':'64px'}
        } }
      >
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              { personalFilmsLoading && <ProgressCircle size={ 20 } /> }
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
                <IconButton onClick={ filmPageDisplayToggleHandler }>
                  { filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />) }
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      <Stack direction="column" p={ 2 } width="100%">
        <Grid container disableEqualOverflow rowSpacing={ 4 }>
          {personalFilms?.map((res: StarwarFilmPersonal) => {
            return (
              <Grid key={ res.fireId } xs={ 12 } sm={ 4 } smOffset={ 4 }>
                <PersonalFilmCard { ...res } />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};