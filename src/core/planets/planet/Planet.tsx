import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { StarwarsPlanet } from "src/shared/models/starwars.model";
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { upperFirst, startCase, isNumber, capitalize } from 'lodash';
import { ELLIPIS_STYLE } from "src/theme/typography";
import React, { memo } from "react";
import { isNumeric, numberFormatter } from "src/shared/utils/number.utils";

export interface PlanetProps {
  planet?: StarwarsPlanet;
}

const keysToDisplay = ['name', 'terrain', 'climate', 'diameter', 'gravity', 'orbital_period', 'population', 'rotation_period', 'surface_water'];
const heights = [70, 200, 70, 140, 110, 150, 90, 80, 130, 90, 100, 150, 30, 50, 80];

export default function Planet({ planet }: PlanetProps) {

  if (!planet) return <Box>No planet</Box>;

  return (
    <Masonry columns={ 3 } spacing={ 2 }>
      { keysToDisplay.map((key, index) => (
        <Card key={ key } sx={ { minHeight: heights[index], p: 3 } }>
          <PlanetDisplay displayKey={ key } value={ planet[key as keyof StarwarsPlanet] } />
        </Card>
      ))}
    </Masonry>
  );
}


const PlanetDisplay = ({ displayKey, value }: {displayKey: string, value: string}) => {
  return (
    <Stack direction="column" spacing={ 2 }>
      <Box>
        <Typography variant="h6" sx={ {...ELLIPIS_STYLE} }>
          { startCase(displayKey) }
        </Typography>
        <Divider />
      </Box>
     
      <Box>
        <DisplayItem text={ value } />
      </Box>
    </Stack>
  );
};

export interface DisplayListProps {
  text: string;
}

const DisplayItem = React.memo(function DisplayList({ text }: DisplayListProps) {
  const arr = text.split(",");
  return (
    <List>
      { arr.map((dis) => {
        return (
          <ListItem key={ dis } title={ dis }>
            <Typography variant="h5" fontFamily="Poppins" sx={ {...ELLIPIS_STYLE} } fontWeight={ 300 }>
              { isNumeric(dis) ? numberFormatter.format(+dis) : capitalize(dis.trim()) }
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
});
