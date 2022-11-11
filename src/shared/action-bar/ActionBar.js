/* eslint-disable no-unused-vars */
import { Stack } from "@mui/material";
import { Button } from '@mui/material';
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';

export const ActionBar = (props) => {


  return (
    <React.Fragment>
      <Stack direction={ 'row' } spacing={ 2 } justifyContent="center" >
        {
          props.actions.map((action) => {
            return (
              <div key={ action.id }>
                <Button variant="outlined" disableElevation onClick={ props.actionClick(action) }> { action.display } </Button>
              </div>
            );
          })
        }
      </Stack>

    </React.Fragment>
  );

};

export default ActionBar;