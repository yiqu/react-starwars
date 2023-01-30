import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from 'axios';
import { HttpResponse2, StarwarCharacter } from "src/shared/models/starwars.model";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HeightIcon from '@mui/icons-material/Height';
import { startCase, upperFirst } from 'lodash';
import MaleIcon from '@mui/icons-material/Male';
import CakeIcon from '@mui/icons-material/Cake';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import Face4Icon from '@mui/icons-material/Face4';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useScreenSize from "src/shared/hooks/useIsMobile";

export interface MoviePopoverContentProps {
  url: string;
  onCloseClick: () => void
}

const displayProps = ['gender', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];

export default function MoviePopoverContent({ url, onCloseClick }: MoviePopoverContentProps) {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ hasError, setHasError ] = useState<any>();
  const [ payload, setPayload ] = useState<StarwarCharacter>();

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    axios.get<HttpResponse2<StarwarCharacter>>(`${url}`, { signal: abortController.signal }).then(
      (res: AxiosResponse<HttpResponse2<StarwarCharacter>>) => {
        setPayload(res.data.result.properties);
      }
    ).catch((err: AxiosError) => {
      setHasError(err.message);
    }).finally(() => {
      setIsLoading(false);
    });

    return (() => {
      abortController.abort();
    });
  }, [url]);

  if (isLoading) return (<Wrapper props={ {alignItems: 'center'} }><ProgressCircle size={ 60 } /></Wrapper>);
  if (!!hasError) return (<Wrapper>Error occurred: { hasError }</Wrapper>);

  return (
    <>
      { 
        payload && <Wrapper >
          <Stack direction="column" spacing={ 0 } width="100%">
            <Stack direction="row" justifyContent="center" alignItems="center" sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? 'primary.main' : '#2b4052', 
              color: (theme) => theme.palette.mode === 'light' ? '#fff' : null} } p={ 2 }>
              <Typography variant="h5" >
                { payload.name }
              </Typography>
            </Stack>
            
            <List>
              {
                displayProps.map((prop) => {
                  return (
                    <ListItem key={ prop } dense>
                      <ListItemIcon>
                        { getIcon(prop) }
                      </ListItemIcon>
                      <ListItemText primary={ startCase(prop) } secondary={ upperFirst(payload[prop as keyof StarwarCharacter]) } />
                    </ListItem>
                  );
                })
              }
            </List>
            <Divider />
            <Stack>
              <Button variant="text" onClick={ onCloseClick }>
                Close
              </Button>
            </Stack>
          </Stack>
        </Wrapper>
      }
    </>
  );
};

const Wrapper: FC<PropsWithChildren<{props?: any}>> = ({ props, children }) => {

  const { isMobile } = useScreenSize();

  return (
    <Box>
      <Paper sx={ {p: 0, width: '100%', height: '100%', minHeight: '20rem', minWidth: (isMobile ? '0rem' : '20rem'), 
        display: 'flex', justifyContent: 'center', alignItems: 'start', ...props} }>
        { children }
      </Paper>
    </Box>
  );
  
};

const getIcon = (propName: string) => {
  const iconMap = {
    gender: <MaleIcon />,
    birth_year: <CakeIcon />,
    height: <HeightIcon />,
    mass: <MonitorWeightIcon />,
    hair_color: <Face4Icon />,
    skin_color: <AccessibilityNewIcon />,
    eye_color: <VisibilityIcon />,
  };
  return (iconMap as any)[propName];
};