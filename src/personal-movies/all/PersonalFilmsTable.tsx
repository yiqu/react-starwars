import { Box, Chip, CircularProgress, IconButton, LinearProgress, ListItemIcon, ListItemText, Menu, MenuItem, Pagination, Paper, Stack, TableSortLabel, TextField, Typography, styled } from "@mui/material";
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
import { useCallback, useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Delete, Edit } from "@mui/icons-material";
import { TABLE_COLUMNS, ellipsis, largeHeaderIds, smallHeaderIds, transformColumnName } from "../utils/table.utils";
import EditDialog, { FilmEdit } from "../edit-dialog/EditDialog";
import TableFilter, { QueryFilter } from "./PersonalFilmsTableFilter";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { updateFilters } from "../store/personal-films.reducer";
import { selectPersonalFilmsFilters } from "../store/personal-films.selectors";
import { useDeletePersonalFilmMutation, useUpdatePersonalFilmMutation } from "../store/personal-films.api";
import ConfirmDialog from "src/shared/components/dialog/ConfirmDialog";
import { toast } from "react-hot-toast";


export interface PersonalFilmsTableProps {
  films: PersonalFilm[];
  loading?: boolean;
}

// FASLE: fit to screen
const tableFitToScreen: boolean = true;

function PersonalFilmsTable({ films, loading }: PersonalFilmsTableProps) {

  const { isAboveXl } = useScreenSize();
  const dispatch = useAppDispatch();
  const [openEdit, setOpenEdit] = useState<{open: boolean, film?: PersonalFilm}>({open: false, film: undefined});
  const [openConfirmDelete, setOpenConfirmDelete] = useState<{open: boolean, film?: PersonalFilm}>({open: false, film: undefined});
  const filters = useAppSelector(selectPersonalFilmsFilters);
  const [updatePersonalFilm, resultPersonalFilm] = useUpdatePersonalFilmMutation();
  const [deletePersonalFilm, deleteResult] = useDeletePersonalFilmMutation();


  const handleOpenEditDialog = (toEdit: PersonalFilm) => {
    setOpenEdit({open: true, film: toEdit});
  };

  const handleDialogClose = (editedFilm?: Partial<PersonalFilm>) => {
    setOpenEdit((current) => {
      return {
        ...current,
        open: false
      };
    });
    
    if (editedFilm && editedFilm.fireKey) {
      updatePersonalFilm({
        fireKey: editedFilm.fireKey,
        data: editedFilm
      });
    }
  };

  const handleConfirmDelete = (choice: boolean) => {
    setOpenConfirmDelete((current) => {
      return {
        ...current,
        open: false
      };
    });
    if (choice && openConfirmDelete.film?.fireKey) {
      const delete$ = deletePersonalFilm(openConfirmDelete.film.fireKey);
      delete$.then((res) => toast.success(`${openConfirmDelete.film?.title} deleted successfully!`));
    }
  };

  const handleCellMenuAction = (film: PersonalFilm) => (actionId: PersonalFilmActions) => {
    switch (actionId) {
      case 'edit': {
        handleOpenEditDialog(film);
        break;
      }
      case 'delete': {
        setOpenConfirmDelete({open: true, film});
        break;
      }
    }
  };

  const handleHeaderMenuClick = (colId: string) => (actionId: PersonalFilmTableHeaderActions) => {
  };

  const handleFilterChange = useCallback((filters: QueryFilter[]) => {
    dispatch(updateFilters(filters));
  }, [dispatch]);


  return (
    <Box width="100%">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 }>
        <Box flexBasis="30%">
          <Stack direction="row" justifyContent="start" alignItems="center">
            <TableFilter onFilterChange={ handleFilterChange } />
          </Stack>
        </Box>
        { isAboveXl && <DensityLargeIcon fontSize="small" titleAccess="Above large size screen" /> }
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <Box mr={ 2 }>
            1 - {films.length} / {films.length}
          </Box>
          <Pagination count={ 10 } showFirstButton showLastButton size="small" />
        </Stack>
        
      </Stack>
      <Stack direction="row" justifyContent="start" alignItems="center" mb={ 2 }>
        {
          filters.map((fil) => {
            return (
              <Chip key={ fil.criteria+fil.value } label={ `${fil.property}: ${fil.value}` } color="warning" />
            );
          })
        }
      </Stack>
      <Box height="5px">
        { (loading || deleteResult.isLoading) && <LinearProgress color="success" /> }
      </Box>
      <TableContainer component={ Paper } elevation={ 0 } sx={ { overflowX: 'hidden', '&:hover': {overflowX: 'auto'}} }>
        <Table size="medium" aria-label="table" stickyHeader  style={ { width: '100%', tableLayout: 'fixed' } }>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index) => {
                  return (
                    <StyledHeaderCell 
                      key={ col } 
                      style={ col === 'title' ? {...stickyHeaderClass as any} : (smallHeaderIds.includes(col) ? {...smallHeaderCell} : (largeHeaderIds.includes(col) ? {...crawlHeaderCell} : {...regularHeaderCell})) }
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
                  sx={ { '&:hover': {backgroundColor: GREY[300]}, opacity: film.isWorking ? 0.6 : 1 } }
                >
                  {
                    TABLE_COLUMNS.map((col, index) => {
                      return (
                        <StyledDataCell key={ `${film.fireKey}${index}` }
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

      {
        <ConfirmDialog open={ openConfirmDelete.open } handleClose={ handleConfirmDelete } title={ `Delete ${openConfirmDelete.film?.title} ?` } message="This action cannot be reversed." />
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
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.director}` }> { film.director } </span>;
    }
    case 'openingCrawl': {
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.openingCrawl}` }> { film.openingCrawl } </span>;
    }
    case 'planets': {
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.planets.name}` }> { film.planets.name } </span>;
    }
    case 'species': {
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.species.map((s) => s.name).join(', ')}` }> { film.species.length } </span>;
    }
    case 'starships': {
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.starships.map((s) => s.name).join(', ')}` }> { film.starships.length } </span>;
    }
    case 'title': {
      return (
        <TableTitleCell title={ film.title } isWorking={ film.isWorking } onMenuActionClick={ handleTitleCellMenuAction } />
      );
    }
    case 'vehicles': {
      return <span data-tooltip-id="tooltip"
      data-tooltip-content={ `${film.vehicles.map((s) => s.name).join(', ')}` }> { film.vehicles.length } </span>;
    }
    default: {
      return <span> TBD </span>;
    }
  }
}

export function TableTitleCell({ title, isWorking, onMenuActionClick }: { title: string; isWorking?: boolean; onMenuActionClick: (actionId: PersonalFilmActions) => void }) {

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
    <Stack direction="row" justifyContent="space-between" alignItems="center" title={ title }>
      <Stack direction="row" justifyContent="start" alignItems="center" style={ {...ellipsis} }>
        <Typography style={ {...ellipsis, marginRight: '10px'} }>
          { title }
        </Typography>
        {
          isWorking && <div>
            <CircularProgress color="inherit" size={ 13 } />
          </div>
        }
      </Stack>
      
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
  width:'18rem' // initial for no table scrollbar
};

const stickyDataCellClass = {
  position: 'sticky',
  left: 0, 
  minWidth: '18rem', // initial for no table scrollbar
  maxWidth: '18rem',
  backgroundColor: '#fff'
};

// rest
const regularHeaderCell = {
  width: tableFitToScreen ? 'initial' : '16rem'  // initial for no table scrollbar
};

const crawlHeaderCell = {
  width: tableFitToScreen ? 'initial': '20rem'  // initial for no table scrollbar
};

// canon
const smallHeaderCell = {
  width: tableFitToScreen ? 'initial' : '9rem' // initial for no table scrollbar
};


