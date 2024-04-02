import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
// import '../cards.css'


export default function VisualeyesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="kiwep MVP app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Visualeyes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Vizualeyes is a multifunctional tool catering to coaches and
          self-coaching endeavors. Users can efficiently manage weekly
          timetables, set and track goals, and utilize visualization tools for
          enhanced productivity and progress tracking.
          Vizualeyes is a multifunctional tool catering to coaches and
          self-coaching endeavors. Users can efficiently manage weekly
          timetables, set and track goals, and utilize visualization tools for
          enhanced productivity and progress tracking.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.com/leasoussan/visualeyes_app"> CODE 
        </Button>
        <Link
          component={Button}
          href={"/visualeyes_projet_detail"}
        >
          See Project
        </Link>
      </CardActions>
    </Card>
  );
}
