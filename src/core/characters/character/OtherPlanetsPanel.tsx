import { Stack, Typography } from "@mui/material";
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import { StarwarsContent } from "src/shared/models/starwars.model";


export interface CharacterDetailPanelProps {
  loadedPlanets: StarwarsContent[];
}

export default function OtherPlanetsPanel({ loadedPlanets }: CharacterDetailPanelProps) {

  return (
    <Stack direction="column" spacing={ 2 }>
      <Typography>
        Check out other planets:
      </Typography>

      <SimpleGridDisplay data={ loadedPlanets } itemUrlPath="planets" gutterSize="full" />

    </Stack>
  );
}