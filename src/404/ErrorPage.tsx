import { Box, Stack, Typography } from "@mui/material";

export interface ErrorPageProp {
  reason?: string;
  debug?: any;
}

export default function ErrorPage({ reason, debug }: ErrorPageProp) {

  return (
    <Box marginY={ 5 } width="100%">
      <Stack direction="column" spacing={ 5 } justifyContent="center" alignItems="center">
        <Typography variant="h5" sx={ {textTransform:'uppercase'} }>
          An error has occurred!
        </Typography>

        <Stack direction="column" spacing={ 1 } justifyContent="center" alignItems="center">
          <Typography variant="body1" fontWeight={ 700 }>
            REASON
          </Typography>
          <Typography variant="body2">
            { reason }
          </Typography>
        </Stack>
        
        <Stack direction="column" spacing={ 1 } justifyContent="center" alignItems="center">
          <Typography variant="body1" fontWeight={ 700 }>
            DEBUG
          </Typography>
          <Typography variant="body2" component="div">
            <pre>
              <code style={ {display: 'flex', textAlign: 'center'} }>
                { JSON.stringify(debug) }
              </code>
            </pre>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};