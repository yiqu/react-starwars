import { useCallback } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Stack, Divider } from "@mui/material";
import { StarwarCharacter, StarwarFilmDetail } from "src/shared/models/starwars.model";
import { isArray, upperFirst, startCase } from 'lodash';
import styles from './MovieDetailCard.module.scss';
import useScreenSize from "src/shared/hooks/useIsMobile";

export interface CharacterDetailCardProps {
  character: StarwarCharacter;
}

const displayKeys = ['gender', 'height', 'mass', 'skin_color', 'eye_color', 'hair_color'];

export default function CharacterDetailCard({ character }: CharacterDetailCardProps) {

  const { isMobile } = useScreenSize();

  const convertUnit = useCallback((key: string, value: any) => {
    let res = value;
    if (key === 'height') {
      res = (+value * 0.032).toFixed(2) + ' ft';
    } else if (key === 'mass') {
      res = (+value * 2.2).toFixed(0) + ' lb';
    }
    return res;
  }, []);
  
  return (
    <Card raised={ false }>
      <CardMedia
        component="img"
        alt="poster"
        height="400"
        image={ `${process.env.PUBLIC_URL}/assets/${'character-any'}.png` }
        title="Film poster"
        sx={ {objectFit: 'contain', p: 4} }
      />
      <CardContent>
        <Stack direction="column">
          <Typography  sx={ {fontFamily:'Poppins', fontWeight:'500'} }>
            { character.name }
          </Typography>
          <Typography sx={ {fontWeight: '300'} }>
            { character.birth_year }
          </Typography>
        </Stack>
        <Divider sx={ {my: 2} } />
        <Stack direction="column" sx={ {fontSize: '12.5px', overflow: 'auto'} }>
          <table style={ {borderSpacing: '0px 5px'} }>
            <tbody>
              {
                displayKeys.map((key) => {
                  return (
                    <tr key={ key }>
                      <td style={ {width: '35%'} }>
                        <Typography variant="subtitle2">
                          { startCase(key) }
                        </Typography>
                      </td>
                      <td>
                        { 
                          upperFirst(convertUnit(key, character[key as keyof StarwarCharacter]))
                        }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </Stack>
      </CardContent>

      <CardActions>

      </CardActions>

    </Card>
  );
}