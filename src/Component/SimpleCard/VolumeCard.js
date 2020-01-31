import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Slider from '../Slider';
import "../../App.css";


const useStyles = makeStyles(theme => ({
  root: {
  
    borderRadius: 12,
    minWidth: 275,
    textAlign: 'center',
  },
    header: {
    textAlign: 'center',
    spacing: 10,
  },
    list: {
    padding: '10px',
  },
    action: {
    display: 'flex',
    justifyContent: 'space-around',
  },

}));

const VolumeCard = () => {
  const classes = useStyles();

  return (
    <div className="cardStack">
      <Card className={classes.root} width="200px">
        <CardContent>
          <Typography variant="h4" align="left">
            Master Volume
          </Typography>
          <div className={classes.list}>
            <Typography align="center">Overrides all other sound settings in this application</Typography>
          </div>
        </CardContent>
        <div className={classes.list}>
        <Slider />
        </div>
      </Card>
      </div>
    );
  };
  //   <div className="cardView">
  //       <Card className={classes.card} variant="outlined">
  //         <CardContent>
  //           <Typography variant="h5" component="h2">
  //         Master Volume
  //           </Typography>
  //          <Typography variant="body2" component="h2">
  //         Overrides all other sound settings in this application
  //         </Typography>
  //        <Slider />
  //       </CardContent>
  //     </Card>
  //   </div>
  //   );
  // }

  export default VolumeCard;