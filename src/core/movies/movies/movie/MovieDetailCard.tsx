import { Card, CardMedia, CardContent, Typography, CardActions, Button, Stack, Divider } from "@mui/material";
import { StarwarFilmDetail } from "src/shared/models/starwars.model";
import { isArray, startCase } from 'lodash';
import styles from './MovieDetailCard.module.scss';
import useScreenSize from "src/shared/hooks/useIsMobile";

export interface MovieDetailCardProps {
  movieDetail: StarwarFilmDetail;
}

const displayKeys = ['release_date', 'director', 'producer', 'planets', 'species', 'starships', 'vehicles'];

export default function MovieDetailCard({ movieDetail }: MovieDetailCardProps) {

  const { isMobile } = useScreenSize();
  
  return (
    <Card raised={ false } className={ isMobile ? '' : `${styles.detailcard}` }>
      <CardMedia
        component="img"
        alt="poster"
        height="400"
        image={ `${process.env.PUBLIC_URL}/assets/poster-img/${movieDetail.episode_id}.png` }
        title="Film poster"
      />
      <CardContent>
        <Stack direction="column">
          <Typography  sx={ {fontFamily:'Poppins', fontWeight:'500'} }>
            { movieDetail.title }
          </Typography>
          <Typography sx={ {fontWeight: '300'} }>
            EP { movieDetail.episode_id }
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
                        { isArray(movieDetail[key as keyof StarwarFilmDetail]) ? 
                          (movieDetail[key as keyof StarwarFilmDetail] as Array<string>).length : 
                          movieDetail[key as keyof StarwarFilmDetail]
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