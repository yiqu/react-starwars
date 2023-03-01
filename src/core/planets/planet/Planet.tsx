import { Box } from "@mui/material";
import { StarwarsPlanet } from "src/shared/models/starwars.model";

export interface PlanetProps {
  planet?: StarwarsPlanet;
}

export default function Planet({ planet }: PlanetProps) {

  return (
    <Box>
      {planet?.name}
    </Box>
  );
}
