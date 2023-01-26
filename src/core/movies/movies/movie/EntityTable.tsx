import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import { upperFirst } from 'lodash';
import usePopover from "src/shared/hooks/usePopover";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Popover from '@mui/material/Popover';


export interface MovieDetailEntityTableProps {
  columns: string[];
  columnData: any[];
  header: ReactNode;
}

export interface MovieDetailEntityTableData {
  id: string;
  detail: string;
}

export default function MovieDetailEntityTable({ columns, columnData, header }: MovieDetailEntityTableProps) {
  
  const [tableData, setTableData] = useState<MovieDetailEntityTableData[]>([]);
  const { popover, handlePopoverClose, handlePopoverOpen } = usePopover({ id: 'film-detail-popover'});

  useDeepCompareEffect(() => {
    setTableData(convertTableData(columnData));
  }, [columnData]);

  const onViewClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    handlePopoverOpen(e.currentTarget);
  };

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
                      return <TableCell key={ col } width="50%">{ upperFirst(col) }</TableCell>;
                    })
                  }
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  tableData.map((row: MovieDetailEntityTableData) => (
                    <TableRow key={ row.detail } sx={ { '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': {
                      backgroundColor: (theme)=> theme.palette.action.hover,
                      }} }>
                      {
                        Object.keys(tableData[0]).map((dataKey: string) => {
                          return (
                            <TableCell component="th" scope="row" key={ dataKey } >
                              <Box sx={ {display: 'flex'} }>
                                <Typography title={ row[dataKey as keyof MovieDetailEntityTableData] } sx={ {cursor: 'pointer'} }>
                                  {
                                    dataKey === 'id' ? (row[dataKey as keyof MovieDetailEntityTableData]) : 
                                    (
                                      <Button variant="outlined" size="small" onClick={ onViewClickHandler }>View</Button>
                                    )
                                  }
                                </Typography>
                              </Box>
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
      { popover }
    </Stack>
  );
};

function convertTableData(data: string[] = []): MovieDetailEntityTableData[] {
  return data.map((char: string) => {
    const arr = char.split("/");
    const charId = arr[arr.length - 1];
    return {
      id: charId,
      detail: char
    };
  });
}