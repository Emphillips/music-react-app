import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import DropSelect from '../Drop';
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

const QualityCard = () => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} width="200px">
      <CardContent>
        <Typography variant="h4" align="center">
          Sound Quality
        </Typography>
        <div className={classes.list}>
          <Typography align="center">Is this application connected to the internet?</Typography>
        </div>
      </CardContent>
      <div className={classes.list}>
      <DropSelect />
      </div>
    </Card>
  );
};


export default QualityCard;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import DropSelect from '../Drop';
// import "../../App.css";


// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },

// })


// export default function QualityCard() {
//   const classes = useStyles();

//   return (
//     <div className="cardView">
//         <Card className={classes.card} variant="outlined">
//           <CardContent>
//             <Typography variant="h5" component="h2">
//           Sound Quality
//             </Typography>
//            <Typography variant="body2" component="h2">
//           Manually control the music quality in event of poor connection
//           </Typography>
//          <DropSelect />
//         </CardContent>
//       </Card>
//     </div>
//     );
//   }
