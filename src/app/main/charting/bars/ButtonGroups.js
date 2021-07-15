import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  label : {
    fontSize : '14px'
  },
  underline: {
    textDecoration: "none !important"
  }
}));


export default function ButtonGroups(){

  const classes = useStyles();

  return(
    <div className={classes.root}>
      {/* <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Demographic
      </Fab> */}
      {/* <Link to="/charting/mail/inbox"> */}
      <Link to="/apps/mail/inbox/15459251a6d6b397565" className={classes.underline}>
        <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
          Message/Task
        </Fab>
      </Link>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        <a href="charting#charting_ord" style={{color:"black", textDecoration:"none"}}>
          Plan/Orders
        </a>
      </Fab>
      
      <Link to={{pathname:"/charting/location", hash:"#C4"}} className={classes.underline}>
        <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
          Documents
        </Fab>
      </Link>
      <Link to="/charting/flowsheets" className={classes.underline}>
        <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
          Flowsheets
        </Fab>
      </Link>
      <Link to="/charting/wellness" className={classes.underline}>
        <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
          Wellness
        </Fab>
      </Link>
      <Link to="/charting/summary" className={classes.underline}>
        <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
          Summary
        </Fab>
      </Link>
    </div>
  )
}