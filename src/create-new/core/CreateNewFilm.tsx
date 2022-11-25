/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { createSearchParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import NewFilmDialog from "../new-dialog/NewFilmDialog";

const CreateNewFilm = () => {

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };
  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Grid container >
        <Grid container mx={ 2 } my={ 2 } xs={ 12 } spacing={ 2 }>
          <Grid xs={ 12 } sx={ {display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'} }>
            <Typography variant="h6" >
              Create your own Starwars movie!
            </Typography>
          </Grid>
          <Grid xs={ 12 } sx={ {display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'} }>
            <Typography variant="body2">
              Try adding your own movie with starships, vehicles, species, and planets.
            </Typography>
          </Grid>

          <Grid xs={ 12 } sx={ {display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'} }>
            <Button variant="contained" startIcon={ <AddAPhotoOutlinedIcon /> } onClick={ handleClickOpen }>
              Add New Movie
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <NewFilmDialog onClose={ handleClose } open={ showDialog }></NewFilmDialog>      
    </>
    
  );
};

export default CreateNewFilm;;