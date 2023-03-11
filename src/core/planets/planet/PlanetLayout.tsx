import { Box, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import Planet from "./Planet";
import urlcat from "urlcat";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { HttpResponse2, StarwarsPlanet } from "src/shared/models/starwars.model";
import LayoutWithMedGutter from "src/shared/components/layouts/LayoutWithMedGutter";

function PlanetLayout() {
  const { planetId } = useParams<string>();
  const [{ data, loading, error }, refetch, cancel] = useAxios<HttpResponse2<StarwarsPlanet>>('', {
    manual: true
  });

  useEffect(() => {
    const restUrl: string = urlcat(BASE_SW_API, `planets/:planetId`, { planetId });
    refetch({url: restUrl});
  }, [planetId, refetch]);

  if (loading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="planet" />
    </Stack>
  );

  if (error) return (
    <>{ error.message } </>
  );

  return (
    <Box sx={ {p: 2} } width="100%">
      <LayoutWithMedGutter size={ "med" }>
        <Typography variant='h4' sx={ {fontWeight: 500, mb: 4} }>
          { data?.result.properties.name }
        </Typography>
        <Planet planet={ data?.result.properties } />
      </LayoutWithMedGutter>
    </Box>
  );
}

export default PlanetLayout;