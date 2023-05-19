import { Box } from "@mui/material";
import { PersonalFilm } from "../store/personal-films.state";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface PersonalFilmsTableProps {
  films: PersonalFilm[];
}

function PersonalFilmsTable({ films }: PersonalFilmsTableProps) {

  return (
    <Box width="100%">
      <TableContainer>
        <Table size="medium" aria-label="table" stickyHeader>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index) => {
                  return (
                    <TableCell align={ index === 0 ? 'left' : 'left' } key={ col }>{ col }</TableCell>
                  );
                })
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {films.map((film: PersonalFilm) => (
              <TableRow
                key={ film.fireKey }
              >
                {
                  TABLE_COLUMNS.map((col, index) => {
                    return (
                      <TableCell align={ index === 0 ? 'left' : 'left' } key={ col }>
                        { transformTableData(film, col) }
                      </TableCell>
                    );
                  })
                }
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}

export default PersonalFilmsTable;


const TABLE_COLUMNS = ['title', 'canon', 'director', 'openingCrawl', 'planets', 'species', 'starships', 'vehicles'] as const;

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