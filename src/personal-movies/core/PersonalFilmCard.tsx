import { Card, CardMedia, CardContent, Stack, Typography, CardActions, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { getFilmFavoriteToggleTooltip } from "src/core/utils/films.utils";
import DateDisplay from "src/shared/components/date/DateDisplay";
import { StarwarFilmPersonal } from "src/shared/models/starwars.model";

export default function PersonalFilmCard({
  title,
  canon,
  characters,
  director,
  fireId,
  openingCrawl,
  planets,
  species,
  starships,
  vehicles }: StarwarFilmPersonal) {

    return (
      <Card sx={ {display:'flex',
        flexDirection:'column', 
        justifyContent:'space-between'} } 
        elevation={ 4 }
      >
        <div>
          <CardMedia
            component="img"
            alt="poster"
            height="440"
            image={ `${process.env.PUBLIC_URL}/assets/film/sw-blk-logo.png` }
            sx={ {backgroundColor: '#000', objectFit: 'contain'} }
          />
          <CardContent>
            <Stack direction={ {lg: 'column', xl: 'row'} } justifyContent={ {xl:'space-between', lg:'flex-start'} }
              marginBottom={ {lg:'10px', xl: '0px'} }>
              <Typography gutterBottom variant="h5" component={ Link } to={ `./${fireId}` } sx={ {fontFamily:'Poppins',
              fontWeight:'500'} }>
                { title }
              </Typography>
              <Typography variant="h5" color='text.secondary' sx={ {fontWeight: '300'} }>
              </Typography>
            </Stack>
          
            <Stack spacing={ 1 }>
              <Typography variant="body2" color="text.secondary">
                Released: <DateDisplay date={ 0 } format="MMM Do YYYY" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Directed by: { director }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Produced by: { 'producer' }
              </Typography>
              <Typography variant="body2" color="text.primary">
                { openingCrawl }
              </Typography>
            </Stack>
          
          </CardContent>
        </div>
      
        <CardActions sx={ {display: 'flex', justifyContent: 'space-between'} }>
          <div>
            <Button size="small" component={ Link } to={ `./${fireId}` }>
              Learn More
            </Button>
          </div>
        </CardActions>
      </Card>
    );
}