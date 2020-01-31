import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Switch from '../Switch';
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

const OnlineCard = () => {
  const classes = useStyles();

  return (
    <div className="cardStack">
    <Card className={classes.root} width="200px">
      <CardContent>
        <Typography variant="h4" align="left">
          Online Mode
        </Typography>
        <div className={classes.list}>
          <Typography align="center">Is this application connected to the internet?</Typography>
        </div>
      </CardContent>
      <div className={classes.list}>
      <Switch />
      </div>
    </Card>
    </div>
  );
};


export default OnlineCard;

// export default function OnlineCard() {
//   const classes = useStyles();

//   return (
//     <div className="cardView">
//         <Card className={classes.card} variant="outlined">
//           <CardContent>
//             <Typography variant="h5" component="h2">
//           Online Mode
//             </Typography>
//            <Typography variant="body2" component="h2">
//           Is this applications connected to the internet?
//           </Typography>
//           <Switch />
        
//         </CardContent>
//       </Card>
//     </div>
//     );
//   }
