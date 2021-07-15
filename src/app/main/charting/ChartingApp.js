import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//built-in components

//import custom components
import CC from './navigation/CC';
import HPI from './navigation/HPI';
import PMH from './navigation/PMH';
import PSH from './navigation/PSH';
import MED from './navigation/MED';
import ADR from './navigation/ADR';
import SH from './navigation/SH';
import FH from './navigation/FH';
import ROS from './navigation/ROS';
import PE from './navigation/PE';
import DD from './navigation/DD';
import ASS from './navigation/ASS';
import ORD from './navigation/ORD';
import EM from './navigation/EM';

//import dialogues
import FreeTextDialogue from './dialogues/FreeTextDialgue';
import SimpleTextDialogue from './dialogues/SimpleTextDialogue';
// import MacroDialogue from './dialogues/MacroDialogue';
import CCDialogue from './dialogues/CCDialogue';
// import CCFullScreenDialogue from './dialogues/CCFullScreenDialogue';
import PSHDialogue from './dialogues/PSHDialogue';
import MedsDialogue from './dialogues/MedsDialogue';
import AdrDialogue from './dialogues/AdrDialogue';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ChartingApp(props){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CC id="charting_cc" />
      <br/>
      <HPI id="charting_hpi"/>
      <br/>
      <PMH id="charting_pmh"/>
      <br/>
      <PSH id="charting_psh"/>
      <br/>
      <MED id="charting_med"/>
      <br />
      <ADR id="charting_adr"/>
      <br />
      <SH id="charting_sh"/>
      <br />
      <FH id="charting_fh"/>
      <br />
      <ROS id="charting_ros"/>
      <br />
      <PE id="charting_pe"/>
      <br />
      <DD id="charting_dd"/>
      <br />
      <ASS id="charting_ass"/>
      <br />
      <ORD id="charting_ord"/>
      <br />
      <EM id="charting_cm"/>
      <br />
      <FreeTextDialogue />
      <SimpleTextDialogue />
      {/* <MacroDialogue /> */}
      <CCDialogue />
      <PSHDialogue />
      <MedsDialogue />
      <AdrDialogue />
      {/* <CCFullScreenDialogue /> */}
    </div>
  );
}

export default ChartingApp;