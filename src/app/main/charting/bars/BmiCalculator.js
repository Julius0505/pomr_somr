import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';
import Bar from "./bmi-adult.png"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  paper: {
    padding: "16px",
    background: "#fcf5f5"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 6,
  },
  typo: {
    padding: 6,
    color: "#666"
  },
  divider: {
    height: 28,
    margin: 4,
  },
  slider: {
    color: ""
  },
  valueLabel: {
    '& *': {
      background: '#52af77',
      color: '#fff',
    },
  },
}));

const marks = [
  {
    value: 10,
    label: '',
  },
  {
    value: 50,
    label: '',
  },
];

// Slider Part
function valuetext(value) {

  return `${value}°C`;
}

export default function CustomizedInputBase() {
  const classes = useStyles();
  const { weight, height } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)
  // const [bmi, setBmi] = useState(20);

  // useEffect(() => {
  //   setBmi(heightUnit == "inch" ? (703 * (weight / (height * height))).toFixed(2) : (weight / (height * height / 10000)).toFixed(2));

  // }, [setBmi, bmi])
  // Popover Part
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // -------------------Weight Part
  // const [weightUnit, setWeightUnit] = useState('Kg');
  // const [weight, setWeight] = useState(70)
  // const handleChangeWeightUnit = () => {
  //   if (weightUnit === "lbs") {
  //     setWeightUnit('Kg');
  //     setWeight((weight * 0.45359237).toFixed(1));
  //     setHeightUnit('cm');
  //     setHeight((height / 0.393701).toFixed(1))
  //   } else {
  //     setWeightUnit('lbs');
  //     setWeight((weight / 0.45359237).toFixed(1));
  //     setHeightUnit('inch');
  //     setHeight((height * 0.393701).toFixed(1))
  //   }
  // }
  // const handleChangeWeight = (e) => {
  //   setWeight(e.target.value);
  // }

  // ---------------Height Part
  // const [heightUnit, setHeightUnit] = useState('cm');
  // const [height, setHeight] = useState(180)
  // const handleChangeHeightUnit = () => {
  //   if (heightUnit === "inch") {
  //     setHeightUnit('cm');
  //     setHeight((height / 0.393701).toFixed(1));
  //     setWeightUnit('Kg');
  //     setWeight((weight * 0.45359237).toFixed(1));
  //   } else {
  //     setHeightUnit('inch');
  //     setHeight((height * 0.393701).toFixed(1));
  //     setWeightUnit('lbs');
  //     setWeight((weight / 0.45359237).toFixed(1));
  //   }
  // }
  // const handleChangeHeight = (e) => {
  //   setHeight(e.target.value);
  // }

  // -------------BMI Result
  // var bmi = heightUnit == "inch" ? (703 * (weight / (height * height))).toFixed(2) : (weight / (height * height / 10000)).toFixed(2);
  var bmi = (703 * (weight / (height * height))).toFixed(2);

  return (
    <div>
      <Typography aria-describedby={id} onClick={handleClick} style={{ width: "max-content" }} variant="subtitle1"><b>BMI:</b> {bmi} Kg/m<sup>2</sup></Typography>
      <Popover
        id={id}
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
        }}
        classes={{ paper: classes.paper }}
      >
        <Paper component="form" className={classes.root}>
          <InputBase
            disabled
            className={classes.input}
            value={weight}
            // onChange={handleChangeWeight}
            placeholder="Input Weight"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Typography className={classes.typo}>
            {/* {weightUnit} */}
            lbs
            </Typography>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton className={classes.iconButton}
          //  onClick={handleChangeWeightUnit}
           >
            <Icon>compare_arrows</Icon>
          </IconButton>
        </Paper>

        <Paper component="form" className={clsx(classes.root, 'mt-8')}>
          <InputBase
            disabled
            className={classes.input}
            value={height}
            // onChange={handleChangeHeight}
            placeholder="Input Height"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Typography className={classes.typo}>
            {/* {heightUnit} */}
            Inch
            </Typography>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton className={classes.iconButton}
          //  onClick={handleChangeHeightUnit}
           >
            <Icon>compare_arrows</Icon>
          </IconButton>
        </Paper>

        <Slider
          value={bmi}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          marks={marks}
          step={0.1}
          valueLabelDisplay="on"
          classes={{ root: classes.slider, valueLabel: classes.valueLabel }}
          className="mt-32"
          disabled
          min={11}
          max={50}
        />
        <img src={Bar} alt="bar" style={{marginTop: "-19px"}} />
      </Popover>
    </div>
  );
}