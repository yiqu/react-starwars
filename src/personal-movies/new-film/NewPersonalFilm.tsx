import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import NewPersonalFilmDialog from "./NewPersonalFilmDialog";

function NewPersonalFilm() {

  const [showDialog, setShowDialog] = useState<boolean>(false);
  
  const handleAddFilm = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Button variant="outlined" startIcon={ <Add /> } onClick={ handleAddFilm }>
        New Film
      </Button> 

      <NewPersonalFilmDialog open={ showDialog } onDialogClose={ handleDialogClose } />
    </>
  );
}

export default NewPersonalFilm;