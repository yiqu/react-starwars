import { AppBar, Stack, Button, Tooltip, IconButton, AppBarTypeMap } from "@mui/material";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import Toolbar from '@mui/material/Toolbar';
import { GREY } from "src/theme/palette";

interface ToolbarProps {
  toolbarProps: any;
  children: any;
}

export default function AppToolbar({ toolbarProps, children }: ToolbarProps) {
  
  return (
    <AppBar elevation={ 0 } { ...toolbarProps }>
      <Toolbar 
        variant="regular" 
        sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null, 
          color: (theme) => theme.palette.mode === 'light' ? '#000' : null, 
        } }>
        { children }
      </Toolbar>
    </AppBar>
  );
}