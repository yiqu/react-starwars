import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import { ReactNode } from 'react';
import useScreenSize from 'src/shared/hooks/useIsMobile';

export interface SearchAndPaginationBarDisplayProps {
  children?: ReactNode;
}

function SearchAndPaginationBarDisplay({ children }: SearchAndPaginationBarDisplayProps) {

  const { isMobile } = useScreenSize();
  
  return (
    <AppToolbar toolbarProps={ {
      position: "sticky",
      sx: {top: isMobile ? '56px':'64px'}
    } }>
      <Grid container xs={ 12 }>
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          { children }
        </Stack>
      </Grid>
    </AppToolbar>
  );
}

export default SearchAndPaginationBarDisplay;