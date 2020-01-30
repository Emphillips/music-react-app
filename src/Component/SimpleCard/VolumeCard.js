import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../App.css";


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

})


export default function VolumeCard() {
  const classes = useStyles();

  return (
    <div className="cardView">
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
          Simple Card
            </Typography>
           <Typography variant="body2" component="h2">
          Test Test Test
          </Typography>
         <Typography variant="h5" component="h2">
          adjective
        </Typography>
        </CardContent>
      </Card>
    </div>
    );
  }
