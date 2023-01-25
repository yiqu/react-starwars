import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { useDeepCompareEffect } from "react-use";


export interface MovieDetailEntityTableProps {
  columns: string[];
  columnData: any[];
  header: ReactNode;
}

export interface MovieDetailEntityTableData {
  id: string;
  link: string;
}

export default function MovieDetailEntityTable({ columns, columnData, header }: MovieDetailEntityTableProps) {
  
  const [tableData, setTableData] = useState<MovieDetailEntityTableData[]>([]);

  useDeepCompareEffect(() => {
    setTableData(convertTableData(columnData));
  }, [columnData]);

  return (
    <Stack>
      <Box sx={ { width: '100%' } }>
        <Paper sx={ { width: '100%', mb: 2 } } elevation={ 1 }>
          { header }
          <TableContainer>
            <Table sx={ { minWidth: 750 } } size="medium">
              <TableHead>
                <TableRow>
                  {
                    columns.map((col) => {
                      return <TableCell key={ col } width="50%">{ col }</TableCell>;
                    })
                  }
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  tableData.map((row: MovieDetailEntityTableData) => (
                    <TableRow key={ row.link } sx={ { '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': {
                      backgroundColor: (theme)=> theme.palette.action.hover,
                      }} }>
                      {
                        Object.keys(tableData[0]).map((dataKey: string) => {
                          return (
                            <TableCell component="th" scope="row" key={ dataKey }>
                              { row[dataKey as keyof MovieDetailEntityTableData] }
                            </TableCell>
                          );
                        })
                      }
                      
                    </TableRow>
                  ))
                }
              </TableBody>  
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Stack>
  );
};

function convertTableData(data: string[] = []): MovieDetailEntityTableData[] {
  return data.map((char: string) => {
    const arr = char.split("/");
    const charId = arr[arr.length - 1];
    return {
      id: charId,
      link: char
    };
  });
}