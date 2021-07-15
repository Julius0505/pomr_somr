import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
// import Menu from '@material-ui/core/Menu';
import NoteIcon from '@material-ui/icons/Note';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const newDate = new Date();
const year = newDate.getFullYear();
let month = newDate.getMonth()+1;
let day = newDate.getDate();
if(month.toString().length !== 2) {
  month = "0" + month;
}
if(day.toString().length !== 2) {
  day = "0" + day;
}
const defaultDate = year+"-"+month+"-"+day;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 200,
    backgroundColor: '#61dafb',
    borderRadius: '5px',
    height: '38px',
    position: 'relative',
    top: '2px',
    paddingLeft: '10px',
    width: '50px'
  },
  selectSP: {
    margin: '5px',
    minWidth: '80px',
    backgroundColor: '#61dafb',
    borderRadius: '5px',
    position: 'relative',
    top: '2px',
    height: '39px',
    paddingLeft: '10px',
  },
  selectLocation: {
    top: '1px',
    margin: '0',
    backgroundColor: '#61dafb',
    borderRadius: '5px',
    position: 'relative',
    left: '6px',
    height: '39px',
  },
  selectLocationIcon: {
    padding: "6px",
    marginLeft: '1px',
    marginRight: '1px',
    minWidth: '45px',
    backgroundColor: '#61dafb',
    borderRadius: '5px',
    height: '38px',
    position: 'relative',
    top: '2px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  oldnotesDropdown: {
    position: "absolute",
    zIndex: "10",
    backgroundColor: "#61dafb"
  },
  underline: {
    textDecoration: "none !important"
  }
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function NoteToolbar(){

  const classes = useStyles();

  const [location, setLocation] = useState('Location');
  const [sp, setSP] = useState('SOMR');
  const [type, setType] = useState('Progress Note');
  const [save, setSave] = useState('Save Complete');
  // const [date, setDate] = useState();

  const [refFunc] = useState(
    {
      item_ref: React.createRef(),
      dropdown_ref: React.createRef(),

      location_ref: React.createRef(),
      location_dropdown_ref: React.createRef(),

      sp_ref: React.createRef(),
      sp_dropdown_ref: React.createRef(),

      type_ref: React.createRef(),
      type_dropdown_ref: React.createRef(),

      save_ref: React.createRef(),
      save_dropdown_ref: React.createRef()
    }
  )

  useEffect(() => {
    refFunc.dropdown_ref.current.style.display = "none";
    refFunc.location_dropdown_ref.current.style.display = "none";
    refFunc.sp_dropdown_ref.current.style.display = "none";
    refFunc.type_dropdown_ref.current.style.display = "none";
    refFunc.save_dropdown_ref.current.style.display = "none";
  }, [
    refFunc.dropdown_ref, 
    refFunc.location_dropdown_ref, 
    refFunc.sp_dropdown_ref, 
    refFunc.type_dropdown_ref,
    refFunc.save_dropdown_ref,
  ])

  const dropdownOn = (ref) => {
    let left;
    let dropdownRef;
    let top;
    switch (ref) {
      case 'item_ref':
        left = refFunc.item_ref.current.offsetLeft;
        top = refFunc.item_ref.current.offsetTop;
        dropdownRef = refFunc.dropdown_ref.current;
        break;
      case 'location_ref': 
        left = refFunc.location_ref.current.offsetLeft;
        top = refFunc.location_ref.current.offsetTop;
        dropdownRef = refFunc.location_dropdown_ref.current;
        break;
      case 'sp_ref': 
        left = refFunc.sp_ref.current.offsetLeft;
        top = refFunc.sp_ref.current.offsetTop;
        dropdownRef = refFunc.sp_dropdown_ref.current;
        break;
      case 'type_ref':
        left = refFunc.type_ref.current.offsetLeft;
        top = refFunc.type_ref.current.offsetTop;
        dropdownRef = refFunc.type_dropdown_ref.current;
        break;
      case 'save_ref':
        left = refFunc.save_ref.current.offsetLeft;
        top = refFunc.save_ref.current.offsetTop;
        dropdownRef = refFunc.save_dropdown_ref.current;
        break;
      default: break;
    }
    dropdownRef.style.display = "block";
    dropdownRef.style.left = left+"px";
    dropdownRef.style.top = (top+41)+"px";
  }

  const dropdownOff = (ref) => {
    switch (ref) {
      case 'item_ref':
        refFunc.dropdown_ref.current.style.display = "none";
        break;
      case 'location_ref':
        refFunc.location_dropdown_ref.current.style.display = "none";
        break;
      case 'sp_ref':
        refFunc.sp_dropdown_ref.current.style.display = "none";
        break;
      case 'type_ref':
        refFunc.type_dropdown_ref.current.style.display = "none";
        break;
      case 'save_ref':
        refFunc.save_dropdown_ref.current.style.display = "none";
        break;
      default: break;
    }
  }

  const handleValue = (where, value) => {
    switch (where) {
      case 'location':
        setLocation(value);
        break;
      case 'sp':
        setSP(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'save':
        setSave(value);
        break;
      default: break;
    }
  }

  const handleDate = (e) => {
    // setDate(e.target.value)
  }

  return(
    <div style={{textAlign:"center"}}>
      <Tooltip title="Location">
        <Button
          className={classes.selectSP}
          ref={refFunc.location_ref}
          variant="contained"
          color="secondary"
          onMouseEnter={()=>dropdownOn('location_ref')}
          onMouseLeave={()=>dropdownOff('location_ref')}
        >
          <Icon color="action">room</Icon>
          {location}
        </Button>
      </Tooltip>
      <div
        className={classes.oldnotesDropdown}
        ref={refFunc.location_dropdown_ref}
        onMouseEnter={()=>dropdownOn('location_ref')}
        onMouseLeave={()=>dropdownOff('location_ref')}
      >
        <MenuItem onClick={()=>handleValue('location', 'Haper Personal Care Home')}>Haper Personal Care Home</MenuItem>
        <MenuItem onClick={()=>handleValue('location', 'Heritage Health Care')}>Heritage Health Care</MenuItem>
        <MenuItem onClick={()=>handleValue('location', 'Washington Internal Medicine')}>Washington Internal Medicine</MenuItem>
        <MenuItem onClick={()=>handleValue('location', 'Quiet Oaks Nursing Home')}>Quiet Oaks Nursing Home</MenuItem>
        <MenuItem onClick={()=>handleValue('location', 'Tignall Assisted Living')}>Tignall Assisted Living</MenuItem>
        <MenuItem onClick={()=>handleValue('location', 'Wills Memorial Hospital')}>Wills Memorial Hospital</MenuItem>
      </div>
      
      <Tooltip title="somr/pomr">
        <Link 
          to='#'
          onMouseEnter={()=>dropdownOn('sp_ref')}
          onMouseLeave={()=>dropdownOff('sp_ref')}
          className={classes.underline}
        >
          <Button
            className={classes.selectSP}
            ref={refFunc.sp_ref}
            variant="contained"
            color="secondary"
          >
            <Icon color="action">receipt</Icon>
            {sp}
          </Button>
        </Link>
      </Tooltip>
      <div
        className={classes.oldnotesDropdown}
        ref={refFunc.sp_dropdown_ref}
        onMouseEnter={()=>dropdownOn('sp_ref')}
        onMouseLeave={()=>dropdownOff('sp_ref')}
      >
        <MenuItem onClick={()=>handleValue('sp', 'somr')}>SOMR</MenuItem>
        <MenuItem onClick={()=>handleValue('sp', 'pomr')}>POMR</MenuItem>
      </div>

      <Tooltip title="free text">
        <Link to="/charting/free-text" className={classes.underline}>
          <Button
            className={classes.selectSP}
            variant="contained"
            color="secondary"
          >
            <Icon color="action">text_fields</Icon>
          </Button>
        </Link>
      </Tooltip>
      <Tooltip title="new note">
        <Button
          className={classes.selectSP}
          variant="contained"
          color="secondary"
        >
          <Icon color="action">note_add</Icon>
        </Button>
      </Tooltip>

      <Tooltip title="old notes">
        <Link
          to='/charting/old-notes'
          onMouseEnter={()=>dropdownOn('item_ref')}
          onMouseLeave={()=>dropdownOff('item_ref')}
          className={classes.underline}
        >
          <Button
            className={classes.selectSP}
            ref={refFunc.item_ref}
            variant="contained"
            color="secondary"

          >
            <Icon color="action">note</Icon>
          </Button>
        </Link>
      </Tooltip>
      <div
        className={classes.oldnotesDropdown}
        ref={refFunc.dropdown_ref}
        onMouseEnter={()=>dropdownOn('item_ref')}
        onMouseLeave={()=>dropdownOff('item_ref')}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <NoteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Last 1st note" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <NoteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Last 2nd note" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <NoteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Last 3th note" />
        </StyledMenuItem>
      </div>

      <Tooltip title="Type of Note">
          <Button
            className={classes.selectSP}
            ref={refFunc.type_ref}
            variant="contained"
            color="secondary"
            onMouseEnter={()=>dropdownOn('type_ref')}
            onMouseLeave={()=>dropdownOff('type_ref')}
          >
            <Icon color="action">speakers_note</Icon>
            {type}
          </Button>
      </Tooltip>
      <div
        className={classes.oldnotesDropdown}
        ref={refFunc.type_dropdown_ref}
        onMouseEnter={()=>dropdownOn('type_ref')}
        onMouseLeave={()=>dropdownOff('type_ref')}
      >
        <MenuItem onClick={()=>handleValue('type', 'Progress Note')}>Progress Note</MenuItem>
        <MenuItem onClick={()=>handleValue('type', 'History and Physical')}>History and Physical</MenuItem>
        <MenuItem onClick={()=>handleValue('type', 'Consult Note')}>Consult Note</MenuItem>
        <MenuItem onClick={()=>handleValue('type', 'Correspondence')}>Correspondence</MenuItem>
      </div>

      <Tooltip title="Save">
        <Button
          className={classes.selectSP}
          ref={refFunc.save_ref}
          variant="contained"
          color="secondary"
          onMouseEnter={()=>dropdownOn('save_ref')}
          onMouseLeave={()=>dropdownOff('save_ref')}
        >
          <Icon color="action">save</Icon>
          {save}
        </Button>
      </Tooltip>
      <div
        className={classes.oldnotesDropdown}
        ref={refFunc.save_dropdown_ref}
        onMouseEnter={()=>dropdownOn('save_ref')}
        onMouseLeave={()=>dropdownOff('save_ref')}
      >
        <MenuItem onClick={()=>handleValue('save', 'Save Complete')}>Save Complete</MenuItem>
        <MenuItem onClick={()=>handleValue('save', 'Save Incomplete')}>Save Incomplete</MenuItem>
      </div>

      <Tooltip title="preview">
        <Link to="/charting/preview" className={classes.underline}>
          <Button
            className={classes.selectSP}
            variant="contained"
            color="secondary"
          >
            <Icon color="action">visibility</Icon>
          </Button>
        </Link>
      </Tooltip>
      <Tooltip title="send">
          <Button
            className={classes.selectSP}
            variant="contained"
            color="secondary"

          >
            <Icon color="action">send</Icon>
          </Button>
      </Tooltip>
      <Tooltip title="problem selection grid">
        <Link to="/charting/problem" className={classes.underline}>
          <Button
            className={classes.selectSP}
            variant="contained"
            color="secondary"
          >
            <Icon color="action">grid_on</Icon>
          </Button>
        </Link>
      </Tooltip>
      <Tooltip title="template">
        <Link to="/charting/templates" className={classes.underline}>
          <Button
            className={classes.selectSP}
            variant="contained"
            color="secondary"
          >
            <Icon color="action">filter_frames</Icon>
          </Button>
        </Link>
      </Tooltip>
      
      <Button
        className={classes.selectSP}
        variant="contained"
        color="secondary">
        <Icon color="action" style={{marginRight:"10px"}}>access_alarms</Icon>
          <TextField
            style={{width:"150px"}}
            id="date"
            type="date"
            defaultValue={defaultDate}
            className={classes.textField}
            onChange={handleDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
      </Button>
    </div>
  )
}