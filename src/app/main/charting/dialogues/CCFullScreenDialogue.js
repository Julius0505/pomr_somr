import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CCFullScreenDialogue(){

  const classes = useStyles();

  const dispatch = useDispatch();

  const redux_open = useSelector(({cc_fullscreen_dialogue}) => cc_fullscreen_dialogue.chartings.dialogue);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(!redux_open){
      return;
    }
    setOpen(redux_open.full);
  },[redux_open]);


  const handleClose = (e) => {
    dispatch(Actions.closeFullScreenDialogue());
  }

  const handleListItemClick = (e) => {
    handleClose();
  }

  return(
    <div>
      <Dialog onClose={() => handleClose()} fullScreen={true} open={open}>
        <DialogTitle id="simple-dialog-title">Add Simple Text</DialogTitle>
        
        <DialogActions>
          <Button autoFocus onClick={() => handleListItemClick()} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withReducer('cc_fullscreen_dialogue',reducer)(CCFullScreenDialogue);