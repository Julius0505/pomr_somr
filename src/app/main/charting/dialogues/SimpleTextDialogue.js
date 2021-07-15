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

function SimpleTextDialogue(){

  const classes = useStyles();

  const dispatch = useDispatch();

  const redux_open = useSelector(({simple_text_dialogue}) => simple_text_dialogue.chartings.dialogue);
  const redux_index = useSelector(({simple_text_dialogue}) => simple_text_dialogue.chartings.simple_text_index);
  

  // useEffect(() => {
  //   dispatch(Actions.getFreeTextDilaogueState())
  // },[dispatch]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(!redux_open){
      return;
    }
    
    setOpen(redux_open.simple_text);
  },[redux_open]);

  // const [index, setIndex] = useState(0);

  useEffect(() => {
    if(!redux_index){
      return;
    }
    // setIndex(redux_index.index);
  },[redux_index]);

  const [value,setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClose = () => {
    setValue('');
    dispatch(Actions.closeSimpleTextDialogue());
  }


  const handleListItemClick =  () => {
    // const data = convertToRaw(editorState.getCurrentContent());

    dispatch(Actions.setSimpleTextData(value));
    handleClose();
  }

  return(
    <div className={classes.root}>
      <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth="md">
        <DialogTitle id="simple-dialog-title">Add Simple Text</DialogTitle>
        <TextField label="Value" value={value} onChange={handleChange}/>
        <DialogActions>
          <Button autoFocus onClick={() => handleListItemClick()} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}

export default withReducer('simple_text_dialogue',reducer)(SimpleTextDialogue);