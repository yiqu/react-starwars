/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { createSearchParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Stack, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import NewFilmDialog from "../new-dialog/NewFilmDialog";

const CreateNewFilm = () => {

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };
  const handleClose = useCallback((payload: any) => {
    console.log(payload);
    setShowDialog(false);
  }, []);

  return (
    <>
      <Grid container>
        <Grid xs={ 12 }>
          <Stack direction="column" spacing={ 3 } alignItems="center" justifyContent="center">
            <Stack direction="row" >
              <Typography variant="h6" >
                Create your own Starwars movie.
              </Typography>
            </Stack>
            <Stack direction="row" >
              <Typography variant="body2">
                Try adding your own movie with starships, vehicles, species, and planet.
              </Typography>
            </Stack>

            <Stack direction="row" >
              <Button variant="contained" startIcon={ <AddAPhotoOutlinedIcon /> } onClick={ handleClickOpen }>
                Add New Movie
              </Button>
            </Stack>
          </Stack>
          
        </Grid>
      </Grid>

      { showDialog && <NewFilmDialog onClose={ handleClose } open={ showDialog }></NewFilmDialog> }     
    </>
  );
};

export default CreateNewFilm;;