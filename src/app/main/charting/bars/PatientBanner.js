import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ButtonGroups from './ButtonGroups';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsuranceMenu from './InsuranceMenu';
import LocationMenu from './LocationMenu';
import TextAndInput from './TextAndInput';
import BmiCalculator from './BmiCalculator';

// axios.get(`http://nodeserver.mdt.washim.net/api/patient/get`, {})
//     .then(response => {
//       // setPatients(response.data);
//       // console.log(response.data)
//     })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tooltip: {
    maxWidth: 500,
    fontSize: "20px"
  }
}));

function PatientBanner(props) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);
  const [patients, setPatients] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [weightOpen, setWeightOpen] = React.useState(false);
  const [creatin, setCreatin] = React.useState(localStorage.creatin);
  const [age, setAge] = React.useState(58);
  const [result, setResult] = React.useState();
  const { isFixed, weight, height } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)
  const { patient } = props;
  const currentYear = (new Date()).getFullYear();
  const Age = currentYear - patient.DateOfBirth.split("/")[2];

  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickWeight = () => {
    setWeightOpen(true);
  }

  // Weight Field
  const [inputOpen, setInputOpen] = React.useState(false);

  const handleClickText = () => {
    setInputOpen(true);
  }

  function handleClickAway(ev) {
    setInputOpen(false)
  }
  function handleInputChange(e) {

  }

  function handleCreatin(e) {
    setCreatin(e.target.value);
    localStorage.setItem('creatin', e.target.value)
  }
  // 

  var creatinResult = 0
  if (age && weight && creatin) {
    creatinResult = ((140 - age) * (weight * 0.45359237) * 0.85 / 72 / creatin).toFixed(0)
  }
  return (
    <>
      <div className="flex">
        <Link className="w-1/6" to='/charting/demographic'>
          <img className="w-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase" />
        </Link>
        <div className="flex w-5/6">
          <div className="flex flex-col justify-between pl-8 w-1/4">
            <Typography variant="subtitle1"><b>Name:</b> {patient.FirstName} {patient.LastName}</Typography>
            <Typography variant="subtitle1"><b>DOB:</b> {patient.DateOfBirth}</Typography>
            <Typography variant="subtitle1"><b>Demo:</b> {Age} y/o {patient.Demo}</Typography>
            {/* <Typography variant="subtitle1"><b>Location:</b> {patient.Location}</Typography> */}
            <LocationMenu />
            <Typography variant="subtitle1"><b>DOLE:</b> {patient.DOLE}</Typography>
          </div>
          <div className="flex flex-col justify-between pl-8 w-1/4">
            <TextAndInput title="Cont#" initialValue={patient.MobileNumber} />
            <TextAndInput title="Emer#" initialValue={patient.Emergency} />
            <InsuranceMenu title="1° ins" />
            <InsuranceMenu title="2° ins" />
            <InsuranceMenu title="3° ins" />

          </div>
          <div className="flex flex-col justify-between pl-8 w-1/4">
            <ClickAwayListener onClickAway={handleClickAway}>
              <Typography variant="subtitle1" onClick={handleClickText}>
                <b>Weight: </b>
                {inputOpen ?
                  <input type="text" style={{ fontFamily: `Muli,Roboto,"Helvetica",Arial,sans-serif` }} className="text-16 font-400" autoFocus="true" value={weight} onChange={(e) => dispatch(Actions.changeWeight(e.target.value))}></input>
                  : `${weight} lbs (${(weight * 0.45359237).toFixed(1)} Kg)`}
              </Typography>
            </ClickAwayListener>
            <Typography variant="subtitle1"><b>Weight Δ:</b> +25 lbs/24m</Typography>
            <TextAndInput title="Height" initialValue={60} unit="inches" />
            <Typography onClick={handlePopupClick} className="cursor-pointer" variant="subtitle1"><b>CrCl:</b> {creatinResult ? `${creatinResult} mL/min` : " "}</Typography>
            <Popover id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              style={{ padding: "16px" }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              <Paper>
                <Typography className="text-center p-4 bg-orange-300"><b>Creatinine Clearance</b></Typography>

                <div className="w-full py-4 px-8">
                  <Typography className="my-8">Sex: Female</Typography>
                  <TextField
                    id="outlined-adornment-weight"
                    label="Age"
                    value={age}
                    disabled
                    onChange={(e) => setAge(e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">Years</InputAdornment>,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-full py-4 px-8">
                  <TextField
                    id="outlined-adornment-weight"
                    label="Weight"
                    value={weight}
                    onChange={(e) => dispatch(Actions.changeWeight(e.target.value))}
                    disabled
                    InputProps={{
                      endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-full py-4 px-8">
                  <TextField
                    id="outlined-adornment-weight"
                    label="Creatinline"
                    value={creatin}
                    onChange={handleCreatin}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div>
                  <Typography>Result: {creatinResult && creatinResult} mL/min</Typography>
                </div>
              </Paper>
            </Popover>
            {/* <Typography variant="subtitle1"><b>BMI:</b> {(703 * (190 / (64 * 64))).toFixed(2)}</Typography> */}
            <BmiCalculator />
          </div>

          <div className="flex flex-col pl-8 pr-16 w-1/4">
            <Tooltip classes={{ tooltip: classes.tooltip }} title="CSV, Allergy1, Allergy2, Allergy3, Allergy4, Allergy5">
              <Typography variant="subtitle1" noWrap={true}><b>Allergies:</b> CSV, Allergy1, Allergy2, Allergy3, Allergy4, Allergy5</Typography>
            </Tooltip>
            <Tooltip classes={{ tooltip: classes.tooltip }} title="PMC, Pharmacy1, Pharmacy2, Pharmacy3, Pharmacy4, Pharmacy5">
              <Typography variant="subtitle1" noWrap={true}><b>Pharmacy:</b> PMC, Pharmacy1, Pharmacy2, Pharmacy3, Pharmacy4, Pharmacy5</Typography>
            </Tooltip>
            {/* <Typography variant="subtitle1" noWrap={true}><b>Pharmacy:</b> PMC</Typography> */}
            {/* <Typography variant="subtitle1"></Typography> */}
            <br />
            <br />
            <Typography variant="subtitle1" className="text-right"><IconButton onClick={() => setMore(!more)}><Icon>add</Icon></IconButton></Typography>
            {/* <Typography variant="h6" className="text-right"><IconButton onClick={() => dispatch(Actions.setFixed(!isFixed))}><Icon>{isFixed ? "arrow_forward" : "arrow_upward"}</Icon></IconButton></Typography> */}
            {/* <div></div> */}
          </div>
        </div>
      </div>
      {more && (
        <Typography variant="h6">More info goes here</Typography>
        // <div className="flex flex-col" >
        //   <div className="flex justify-between">
        //     <div className="flex">
        //       <div className="bg-yellow-100">DEMOS</div>
        //       <div>
        //         <Typography variant="subtitle2">Phone(mobile)</Typography>
        //         <Typography variant="subtitle2">Phone(work)</Typography>
        //         <Typography variant="subtitle2">Phone(home)</Typography>
        //         <Typography variant="subtitle2">Email</Typography>
        //         <Typography variant="subtitle2">DOB</Typography>
        //         <Typography variant="subtitle2">Sex</Typography>
        //         <Typography variant="subtitle2">SS #</Typography>
        //         <Typography variant="subtitle2">Location</Typography>
        //       </div>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Allergies</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Reminders</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Physicians</Typography>
        //       <Typography variant="subtitle2">Primary</Typography>
        //       <Typography variant="subtitle2">Specialist#1</Typography>
        //       <Typography variant="subtitle2">Specialist#2</Typography>
        //       <Typography variant="subtitle2">Specialist#3</Typography>
        //       <Typography variant="subtitle2">Specialist#4</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Encounters</Typography>
        //       <Typography variant="subtitle2">FED</Typography>
        //       <Typography variant="subtitle2">LED</Typography>
        //       <Typography variant="subtitle2">NED</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Address1</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //       <Typography variant="subtitle2">Phone</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Address2</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //       <Typography variant="subtitle2">Phone</Typography>
        //     </div>
        //   </div>

        //   <div className="flex justify-between">
        //     <div className="flex">
        //       <div className="bg-yellow-100">Emergency CONTACT</div>
        //       <div>
        //         <Typography variant="h6">Emergency Contact1</Typography>
        //         <Typography variant="subtitle2">First name</Typography>
        //         <Typography variant="subtitle2">Last name</Typography>
        //         <Typography variant="subtitle2">Relation</Typography>
        //         <Typography variant="subtitle2">Phone(mobile)</Typography>
        //         <Typography variant="subtitle2">Phone(home)</Typography>
        //         <Typography variant="subtitle2">Phone(work)</Typography>
        //         <Typography variant="subtitle2">email address</Typography>
        //         <Typography variant="subtitle2">Street</Typography>
        //         <Typography variant="subtitle2">City</Typography>
        //         <Typography variant="subtitle2">State</Typography>
        //         <Typography variant="subtitle2">Zip</Typography>
        //       </div>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Emergency Contact3</Typography>
        //       <Typography variant="subtitle2">First name</Typography>
        //       <Typography variant="subtitle2">Last name</Typography>
        //       <Typography variant="subtitle2">Relation</Typography>
        //       <Typography variant="subtitle2">Phone(mobile)</Typography>
        //       <Typography variant="subtitle2">Phone(home)</Typography>
        //       <Typography variant="subtitle2">Phone(work)</Typography>
        //       <Typography variant="subtitle2">email address</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Emergency Contact3</Typography>
        //       <Typography variant="subtitle2">First name</Typography>
        //       <Typography variant="subtitle2">Last name</Typography>
        //       <Typography variant="subtitle2">Relation</Typography>
        //       <Typography variant="subtitle2">Phone(mobile)</Typography>
        //       <Typography variant="subtitle2">Phone(home)</Typography>
        //       <Typography variant="subtitle2">Phone(work)</Typography>
        //       <Typography variant="subtitle2">email address</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //     </div>
        //   </div>
        //   <div className="flex justify-between">
        //     <div className="flex">
        //       <div className="bg-yellow-100">Emergency CONTACT</div>
        //       <div>
        //         <Typography variant="h6">Emergency Contact1</Typography>
        //         <Typography variant="subtitle2">First name</Typography>
        //         <Typography variant="subtitle2">Last name</Typography>
        //         <Typography variant="subtitle2">Relation</Typography>
        //         <Typography variant="subtitle2">Phone(mobile)</Typography>
        //         <Typography variant="subtitle2">Phone(home)</Typography>
        //         <Typography variant="subtitle2">Phone(work)</Typography>
        //         <Typography variant="subtitle2">email address</Typography>
        //         <Typography variant="subtitle2">Street</Typography>
        //         <Typography variant="subtitle2">City</Typography>
        //         <Typography variant="subtitle2">State</Typography>
        //         <Typography variant="subtitle2">Zip</Typography>
        //       </div>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Emergency Contact3</Typography>
        //       <Typography variant="subtitle2">First name</Typography>
        //       <Typography variant="subtitle2">Last name</Typography>
        //       <Typography variant="subtitle2">Relation</Typography>
        //       <Typography variant="subtitle2">Phone(mobile)</Typography>
        //       <Typography variant="subtitle2">Phone(home)</Typography>
        //       <Typography variant="subtitle2">Phone(work)</Typography>
        //       <Typography variant="subtitle2">email address</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //     </div>
        //     <div>
        //       <Typography variant="h6">Emergency Contact3</Typography>
        //       <Typography variant="subtitle2">First name</Typography>
        //       <Typography variant="subtitle2">Last name</Typography>
        //       <Typography variant="subtitle2">Relation</Typography>
        //       <Typography variant="subtitle2">Phone(mobile)</Typography>
        //       <Typography variant="subtitle2">Phone(home)</Typography>
        //       <Typography variant="subtitle2">Phone(work)</Typography>
        //       <Typography variant="subtitle2">email address</Typography>
        //       <Typography variant="subtitle2">Street</Typography>
        //       <Typography variant="subtitle2">City</Typography>
        //       <Typography variant="subtitle2">State</Typography>
        //       <Typography variant="subtitle2">Zip</Typography>
        //     </div>
        //   </div>

        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        // </div>

      )}
    </>
  )
}

export default PatientBanner;
