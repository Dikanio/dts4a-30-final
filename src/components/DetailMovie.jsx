import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function DetailMovie({ movie }) {

  // const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
      maxWidth="false"
    >

      <Grid item xs={3}>
        <Card sx={{ maxHeight: "500px",borderRadius: 1 }} display="inline-block" >

          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={movie.image}
              sx={{ width: "100%", height: "100%" }}
            />
            <div style={{ position: "absolute", color: "white", top: "25%", left: "35%", transform: "translateX(-50%)", maxWidth: '70%', maxHeight: '300px' }}>

              <Typography gutterBottom variant="h4" component="div">
                Title
              </Typography>

              <Typography gutterBottom variant="caption" component="div">
                {movie.description}
              </Typography>
              {/* <Button variant='outlined' >Play</Button> */}
              <Button sx={{ marginRight:1,marginBottom:1, borderRadius: 0.5, minWidth: '100px', textTransform: 'none', backgroundColor: 'white', color: 'black', ":hover": { backgroundColor: 'grey' } }}  >
                <PlayArrowIcon />Play
              </Button>
              <Button sx={{opacity:0.5, border:1, marginRight:1,marginBottom:1, borderRadius: 0.5, minWidth: '100px', textTransform: 'none', backgroundColor: 'black', color: 'white', ":hover": { backgroundColor: 'grey' } }}  >
                <InfoOutlinedIcon /> More Information
              </Button>
            </div>
            
          </div>

        </Card>
      </Grid>

    </Grid>

  );
}
