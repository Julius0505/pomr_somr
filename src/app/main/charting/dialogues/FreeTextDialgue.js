import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function FreeTextDialogue(){

  const dispatch = useDispatch();

  const redux_open = useSelector(({free_text_dialogue}) => free_text_dialogue.chartings.dialogue);

  // useEffect(() => {
  //   dispatch(Actions.getFreeTextDilaogueState())
  // },[dispatch]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(!redux_open){
      return;
    }
    
    setOpen(redux_open.free_text);
  },[redux_open]);

  const [editorState,setEditorState] = useState(EditorState.createEmpty());

  const handleClose = () => {
    setEditorState(EditorState.createEmpty());
    dispatch(Actions.closeFreeTextDialogue());
  }

  const onEditorStateChange = (state) => {
    setEditorState(state);
  }

  const handleListItemClick =  () => {
    const data = convertToRaw(editorState.getCurrentContent());
    dispatch(Actions.setFreeTextData(data));
    handleClose();
  }

  return(
    <div>
      <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth="md">
        <DialogTitle id="simple-dialog-title">Add Free Text</DialogTitle>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editer-content"
          onEditorStateChange={(state) => onEditorStateChange(state)}
        />
        <DialogActions>
          <Button autoFocus onClick={() => handleListItemClick()} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}

export default withReducer('free_text_dialogue',reducer)(FreeTextDialogue);