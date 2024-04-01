import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LandFCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 300 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="kiwep MVP app"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Land F- find your stuff
        </Typography>
        <Typography variant="body" color="text.secondary">
        LandF is a versatile platform designed for individuals to search for lost items or report found items. With an intuitive interface, users can easily navigate the platform to reconnect with lost possessions or help others find their lost items. Additionally, LandF provides an administrative dashboard for managing listings and enhancing the user experience."
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href='https://github.com/leasoussan/landf_app'> CODE </a></Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}