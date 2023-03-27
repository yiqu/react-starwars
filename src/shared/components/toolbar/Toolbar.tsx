import { AppBar } from "@mui/material";
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
          pr: 0
        } }>
        { children }
      </Toolbar>
    </AppBar>
  );
}