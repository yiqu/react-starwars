import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Pagination, Paper, Stack, TableSortLabel, TextField, Typography, styled } from "@mui/material";
import { PersonalFilm, PersonalFilmActions, PersonalFilmTableHeaderActions } from "../store/personal-films.state";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GREY } from "src/theme/palette";
import { startCase } from "lodash";
import useScreenSize from "src/shared/hooks/useIsMobile";
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Delete, Edit } from "@mui/icons-material";
import { TABLE_COLUMNS, ellipsis, smallHeaderIds, transformColumnName } from "../utils/table.utils";
import EditDialog from "../edit-dialog/EditDialog";


export interface PersonalFilmsTableProps {
  films: PersonalFilm[];
}

// FALSE: table will auto adjust width to screen, no scrollbar
const showScrollButMoreWidthForTable: boolean = true;

function PersonalFilmsTable({ films }: PersonalFilmsTableProps) {

  const { isAboveXl } = useScreenSize();
  const tableFix = true; // leave this on to prevent overall horizontal scrollbar
  const setTableHardWidth = showScrollButMoreWidthForTable ? '80rem' : false;

  const [openEdit, setOpenEdit] = useState<{open: boolean, film?: PersonalFilm}>({open: false, film: undefined});

  const handleOpenEditDialog = (toEdit: PersonalFilm) => {
    setOpenEdit({open: true, film: toEdit});
  };

  const handleDialogClose = (editedFilm?: PersonalFilm) => {
    setOpenEdit({open: false, film: undefined});
  };

  const handleCellMenuAction = (film: PersonalFilm) => (actionId: PersonalFilmActions) => {
    console.log(film, actionId);
    switch (actionId) {
      case 'edit': {
        handleOpenEditDialog(film);
        break;
      }
    }
  };

  const handleHeaderMenuClick = (colId: string) => (actionId: PersonalFilmTableHeaderActions) => {
    console.log(colId, actionId); 
  };


  return (
    <Box width="100%">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 }>
        <Box flexBasis="30%">
          <Stack direction="row" justifyContent="start" alignItems="center">
            <TextField label="Filter" variant="standard" fullWidth />
            { isAboveXl && <DensityLargeIcon fontSize="small" titleAccess="Above large size screen" /> }
          </Stack>
        </Box>
        <Pagination count={ 10 } showFirstButton showLastButton size="small" />
      </Stack>
      <TableContainer component={ Paper } elevation={ 0 } sx={ { overflowX: 'hidden', '&:hover': {overflowX: 'auto'}} }>
        <Table size="medium" aria-label="table" stickyHeader  style={ { width: setTableHardWidth ? setTableHardWidth : '100%', tableLayout: (tableFix ? 'fixed' : 'auto') } }>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index) => {
                  return (
                    <StyledHeaderCell 
                      key={ col } 
                      style={ col === 'title' ? {...stickyHeaderClass as any} : (smallHeaderIds.includes(col) ? {...smallHeaderCell} : {...mediumHeaderCell}) }
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center" overflow="hidden">
                        <TableSortLabel active={ false } direction="asc" style={ { width: 'calc(100% - 30px)'} }>
                          <Box style={ {...ellipsis} }  title={ `${transformColumnName(col)}` } >
                            { transformColumnName(col) }
                          </Box>
                        </TableSortLabel>
                        <TableHeaderMenu onMenuActionClick={ handleHeaderMenuClick(col) } />
                      </Stack>
                    </StyledHeaderCell>
                  );
                })
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {
              films.map((film: PersonalFilm) => (
                <TableRow
                  key={ film.fireKey }
                  sx={ { '&:hover': {backgroundColor: GREY[300]} } }
                >
                  {
                    TABLE_COLUMNS.map((col, index) => {
                      return (
                        <StyledDataCell key={ `${film.fireKey}${index}` }
                          data-tooltip-id="tooltip"
                          data-tooltip-content={ `${film[col]}` }
                          style={ col === 'title' ? {...stickyDataCellClass as any} : {} }
                        >
                          { transformTableData(film, col, handleCellMenuAction(film)) }
                        </StyledDataCell>
                      );
                    })
                  }
                </TableRow>
              ))
            }
          </TableBody>

        </Table>
      </TableContainer>

      {
        <EditDialog open={ openEdit.open } film={ openEdit.film } onDialogClose={ handleDialogClose } />
      }
      
    </Box>
  );
}

export default PersonalFilmsTable;


export function TableHeaderMenu({ onMenuActionClick }: { onMenuActionClick: (actionId: PersonalFilmTableHeaderActions) => void }) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuActionClick = (actionId: PersonalFilmTableHeaderActions) => (e: any) => {
    onMenuActionClick(actionId);
    handleClose();
  };
  

  return (
    <div data-tooltip-id="tooltip" data-tooltip-content={ `Options` } data-tooltip-offset={ 20 }>
      <IconButton aria-label="delete" size="small" onClick={ handleMenuClick }>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={ {
          'aria-labelledby': 'basic-button',
        } }
      >
        <MenuItem onClick={ handleMenuActionClick('adjust-width') } dense >
          <ListItemIcon>
            <TuneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Adjust Width</ListItemText>
        </MenuItem>
        <MenuItem onClick={ handleMenuActionClick('hide') } dense>
          <ListItemIcon>
            <VisibilityOffIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Hide</ListItemText>
        </MenuItem>
      </Menu>
    </div>
    
  );
}


function transformTableData(film: PersonalFilm, columnId: typeof TABLE_COLUMNS[number], onMenuClick: (actionId: PersonalFilmActions) => void) {
  
  const handleTitleCellMenuAction = (actionId: PersonalFilmActions) => {
    onMenuClick(actionId);
  };

  switch (columnId) {
    case 'canon': {
      return <span> { film.canon ? 'Yes' : 'No'} </span>;
    }
    case 'director': {
      
      return <span> { film.director } </span>;
    }
    case 'openingCrawl': {
      
      return <span> { film.openingCrawl } </span>;
    }
    case 'planets': {
      
      return <></>;
    }
    case 'species': {
      
      return <></>;
    }
    case 'starships': {
      
      return <></>;
    }
    case 'title': {
      return (
        <TableTitleCell title={ film.title } onMenuActionClick={ handleTitleCellMenuAction } />
      );
    }
    case 'vehicles': {
      
      return <></>;
    }
    default: {
      return <></>;
    }
  }
}

export function TableTitleCell({ title, onMenuActionClick }: { title: string; onMenuActionClick: (actionId: PersonalFilmActions) => void }) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleTitleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuActionClick = (actionId: PersonalFilmActions) => (e: any) => {
    onMenuActionClick(actionId);
    handleClose();
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center"> 
      <Typography style={ {...ellipsis} }>
        { title }
      </Typography>
      <IconButton aria-label="delete" size="small" onClick={ handleTitleMenuClick } >
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
      >
        <MenuItem onClick={ handleMenuActionClick('edit') } dense >
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={ handleMenuActionClick('delete') } dense>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
}


const StyledHeaderCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: '15px',
  borderRight: `1px solid ${GREY[400]}`,
  borderColor: GREY[400],
  backgroundColor: GREY[200],
}));

const StyledDataCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: '14px',
  borderRight: `1px solid ${GREY[300]}`,
  borderBottom: "none",
  maxWidth: '22rem', // the max width data cells can have
}));

const stickyHeaderClass = {
  position: 'sticky',
  left: 0,
  zIndex: 3,
  width: showScrollButMoreWidthForTable ? '18rem' : 'initial' // initial for no table scrollbar
};

const stickyDataCellClass = {
  position: 'sticky',
  left: 0, 
  minWidth: showScrollButMoreWidthForTable ? '18rem' : 'initial', // initial for no table scrollbar
  maxWidth: '18rem',
  backgroundColor: '#fff'
};


const largeHeaderCell = {
  width: showScrollButMoreWidthForTable ? '16rem' : 'initial' // initial for no table scrollbar
};

const mediumHeaderCell = {
  width: showScrollButMoreWidthForTable ? '10rem' : 'initial' // initial for no table scrollbar
};

const smallHeaderCell = {
  width: showScrollButMoreWidthForTable ? '8rem' : 'initial' // initial for no table scrollbar
};


