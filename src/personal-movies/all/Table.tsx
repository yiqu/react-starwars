import { Box, Pagination, Paper, Stack, TableSortLabel, TextField, styled } from "@mui/material";
import { PersonalFilm } from "../store/personal-films.state";
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

export interface PersonalFilmsTableProps {
  films: PersonalFilm[];
}

function PersonalFilmsTable({ films }: PersonalFilmsTableProps) {

  const { isAboveXl } = useScreenSize();

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
        <Table size="medium" aria-label="table" stickyHeader  style={ { width: isAboveXl ? '100%' : '80rem', tableLayout: (isAboveXl ? 'auto' : 'fixed') } }>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index) => {
                  return (
                    <StyledHeaderCell 
                      key={ col } 
                      style={ col === 'title' ? {...stickyHeaderClass as any} : (smallHeaderIds.includes(col) ? {...smallHeaderCell} : {...mediumHeaderCell}) }
                    >
                      <TableSortLabel active={ false } direction="asc">
                        { transformColumnName(col) }
                      </TableSortLabel>
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
                        // <TableCell align={ index === 0 ? 'left' : 'left' } key={ col }>
                        //   { transformTableData(film, col) }
                        // </TableCell>
                        <StyledDataCell key={ `${film.fireKey}${index}` }
                          data-tooltip-id="tooltip"
                          data-tooltip-content={ `${film[col]}` }
                          style={ col === 'title' ? {...stickyDataCellClass as any} : {} }
                        >
                          { transformTableData(film, col) }
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
    </Box>
  );
}

export default PersonalFilmsTable;

const smallHeaderIds = ['canon'];
const largeHeaderIds = ['openingCrawl'];

const StyledHeaderCell = styled(TableCell)(() => ({
  paddingTop: '3px',
  paddingBottom: '3px',
  lineHeight: '2rem',
  fontSize: '15px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: GREY[200],
  borderRight: '1px solid',
  borderColor: GREY[400]
}));

const StyledDataCell = styled(TableCell)(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  borderRight: `1px solid ${GREY[300]}`,
  borderBottom: "none",
  maxWidth: '22rem', // the max width data cells can have
  lineHeight: 1,
  fontSize: '14px'
}));

const stickyHeaderClass = {
  position: 'sticky',
  left: 0,
  zIndex: 3,
  width: '15rem'
};

const stickyDataCellClass = {
  position: 'sticky',
  left: 0,
  minWidth: '15rem',
  maxWidth: '15rem',
  backgroundColor: '#fff'
};

const largeHeaderCell = {
  width: '16rem'
};

const mediumHeaderCell = {
  width: '10rem'
};

const smallHeaderCell = {
  width: '5rem'
};


const TABLE_COLUMNS = ['title',  'openingCrawl', 'director', 'canon', 'planets', 'species', 'starships', 'vehicles'] as const;

function transformTableData(film: PersonalFilm, columnId: typeof TABLE_COLUMNS[number]) {

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
      
      return <span> { film.title } </span>;
    }
    case 'vehicles': {
      
      return <></>;
    }
    default: {
      return <></>;
    }
  }
}

export const transformColumnName = (colId: string) => {
  let result = colId;
  switch (colId) {
    case "openingCrawl": {
      result = 'Opening Crawl';
      break;
    }
    default: {
      result = startCase(colId);
    }
  }
  return result;
};