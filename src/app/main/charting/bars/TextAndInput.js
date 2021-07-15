import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { handleInputChange } from 'react-select/src/utils';

function TextAndInput(props) {
  const dispatch = useDispatch();
  const { title, initialValue, unit } = props;
  const [value, setValue] = React.useState(initialValue);
  const [inputOpen, setInputOpen] = React.useState(false);

  const handleClickText = () => {
    setInputOpen(true);
  }

  function handleClickAway(ev) {
    setInputOpen(false)
  }
  function handleInputChange(e) {
    setValue(e.target.value);
    dispatch(Actions.changeHeight(e.target.value))
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Typography variant="subtitle1" onClick={handleClickText}>
        <b>{title}: </b>
        {inputOpen ?
        <input type="text" style={{fontFamily: `Muli,Roboto,"Helvetica",Arial,sans-serif`}} className="text-16 font-400" autoFocus="true" value={value} onChange={handleInputChange}></input>
          : `${value} ${!unit ? "" : unit}`}
      </Typography>
    </ClickAwayListener>
  )
}

export default TextAndInput;
