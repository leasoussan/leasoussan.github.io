import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function KiwepCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 300 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="kiwep MVP app"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          KIWEP - Learn by Practice
        </Typography>
        <Typography variant="body" color="text.secondary">
        Kiwep is an interactive learning platform designed for teachers and students. Teachers create projects tailored to the curriculum, while students select specific components to explore. Through collaboration and mission requests, students engage actively, supporting each other's learning
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" href='https://github.com/leasoussan/kiwep' rel="noopener noreferrer">      
      CODE
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}