import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import BookIcon from '@material-ui/icons/Book';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  container: {
    background : "#f6f7f9 !important",
    margin : "0",
    width: "100%"
  },
}));

function ADR(props){

  const classes = useStyles();

  const dispatch = useDispatch();
  const adr = useSelector(({adr}) => adr.adr.selectedAdrDatas);
  const [adrDatas, setAdrDatas] = useState([]);

  useEffect(() => {
    setAdrDatas(adr);
  }, [adr])

  const openAdrDialogue = () => {
    dispatch(Actions.openAdrDialogue());
  }

  const deleteadr = (index) => {
    let adrArr = JSON.parse(JSON.stringify(adrDatas));
    adrArr.splice(index, 1);
    console.log(adrArr);
    setAdrDatas(adrArr)
    dispatch(Actions.setAdr(adrArr));
  }

  return(
    <div className={classes.root} id={props.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full" id="asdf">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Adverse Drug Reaction</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">T</Button>
              <AddIcon className="mr-16" onClick={(e) => openAdrDialogue()}/>
              <BookIcon className="mr-16" color="secondary"/>
            </div>

            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} className={classes.container}>
            <Grid item sm={2}>Name</Grid>
            <Grid item sm={2}>Type</Grid>
            <Grid item sm={2}>Reaction</Grid>
            <Grid item sm={2}>Severity</Grid>
            <Grid item sm={2}>Notes</Grid>
            <Grid item sm={2}></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default withReducer('adr', reducer)(ADR);