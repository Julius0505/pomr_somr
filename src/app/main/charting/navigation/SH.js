import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    '& .MuiAccordionDetails-root': {
      display: "block"
    },
    '& .MuiTableRow-root': {
      height: "fit-content !important"
    },
    '& .makeStyles-paper-501': {
      width: "auto",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    },
  },
  paper: {
    position: 'absolute',
    backgroundColor: "#eaeaea",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "auto",
    left: "50%",
    top: "30%",
    transform: "translate(-50%, -50%)"
  },
  tobacco: {
    padding: "0 20px",
    display: "flex"
  },
  formTitle: {
    lineHeight: "2.6",
    marginRight: "25px"
  },
  fitContainer: {
    margin: "0"
  }
}));

export default function SH(props){

  const classes = useStyles();
  
  //  Modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // FormControlLabel
  const [selectedValue, setSelectedValue] = React.useState('never');

  const handleChangeTobacco = (event) => {
    setSelectedValue(event.target.value);
  };

  const [living, setLiving] = useState('unspecified')
  const handleRadioSelect = (e) => {
    setLiving(e.target.value)
  }

  const [marital, setMarital] = useState('unspecified')
  const handleMaterialSelect = (e) => {
    setMarital(e.target.value)
  }

  const [education, setEducation] = useState('unspecified')
  const handleEducationSelect = (e) => {
    setEducation(e.target.value)
  }

  const [primary, setPrimary] = useState('english')
  const handlePrimarySelect = (e) => {
    setPrimary(e.target.value)
  }

  const [employment, setEmployment] = useState('unspecified')
  const handleEmploymentSelect = (e) => {
    setEmployment(e.target.value)
  }

  const [religious, setReligious] = useState('unspecified')
  const handleReligiousSelect = (e) => {
    setReligious(e.target.value)
  }

  const body = (
    <div className={classes.paper}>
      <h2 style={{marginBottom: "10px"}}>Tobacco</h2>
      <Grid container spacing={1}>
        <Paper>
          <div className={classes.tobacco}>
            <Typography variant="h6" className={classes.formTitle}>Use Status:</Typography>
            <FormControlLabel
                checked={selectedValue === 'never'}
                onChange={handleChangeTobacco}
                value="never"
                control={<Radio />}
                label="Never"
                labelPlacement="end"
            />
            <FormControlLabel
                checked={selectedValue === 'former'}
                onChange={handleChangeTobacco}
                value="former"
                control={<Radio />}
                label="Former"
                labelPlacement="end"
            />
            <FormControlLabel
                checked={selectedValue === 'current'}
                onChange={handleChangeTobacco}
                value="current"
                control={<Radio />}
                label="Current"
                labelPlacement="end"
            />
          </div>
          <div className={classes.tobacco}>
            <Typography variant="h6" style={{marginRight: "25px"}}>Amount:</Typography>
            <TextField  />
            {/* <FormControlLabel
                checked={selectedValue === 'former'}
                onChange={handleChangeTobacco}
                value="former"
                control={<Radio />}
                label="Former"
                labelPlacement="end"
            />
            <FormControlLabel
                checked={selectedValue === 'current'}
                onChange={handleChangeTobacco}
                value="current"
                control={<Radio />}
                label="Current"
                labelPlacement="end"
            /> */}
          </div>
        </Paper>
      </Grid>
    </div>
  );

  return(
    <div className={classes.root} id={props.id}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Social History</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">P</Button>
              <Button variant="outlined" className="mr-16">L</Button>
            </div>

            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" onClick={handleOpen} />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-full">
            <div className="w-full">
              <Grid container spacing={2} className={classes.fitContainer}>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">
                    Subtance Use
                  </Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">Tobacco</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">Alcohol</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">illicut drug</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">Caffein use</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant="h6" className="font-bold">abc</Typography>
                </Grid>
              </Grid>
            </div>
            <div className="w-full">
              <Grid container spacing={2} className={classes.fitContainer}>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Living Situation</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={living === 'unspecified'}
                    onChange={handleRadioSelect}
                    value="unspecified"
                    control={<Radio />}
                    label="Unspecified"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'lwfr'}
                    onChange={handleRadioSelect}
                    value="lwfr"
                    control={<Radio />}
                    label="Live with friends"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'la'}
                    onChange={handleRadioSelect}
                    value="la"
                    control={<Radio />}
                    label="Lives alone"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'lwfa'}
                    onChange={handleRadioSelect}
                    value="lwfa"
                    control={<Radio />}
                    label="Lives with family"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'lwp'}
                    onChange={handleRadioSelect}
                    value="lwp"
                    control={<Radio />}
                    label="Lives with parents"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'lwr'}
                    onChange={handleRadioSelect}
                    value="lwr"
                    control={<Radio />}
                    label="Lives with roommate"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={living === 'nh'}
                    onChange={handleRadioSelect}
                    value="nh"
                    control={<Radio />}
                    label="Nursing home"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Marital Status</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={marital === 'unspecified'}
                    onChange={handleMaterialSelect}
                    value="unspecified"
                    control={<Radio />}
                    label="Unspecified"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'divorced'}
                    onChange={handleMaterialSelect}
                    value="divorced"
                    control={<Radio />}
                    label="Divorced"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'married'}
                    onChange={handleMaterialSelect}
                    value="married"
                    control={<Radio />}
                    label="Married"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'other'}
                    onChange={handleMaterialSelect}
                    value="other"
                    control={<Radio />}
                    label="Other"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'separated'}
                    onChange={handleMaterialSelect}
                    value="separated"
                    control={<Radio />}
                    label="Separated"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'single'}
                    onChange={handleMaterialSelect}
                    value="single"
                    control={<Radio />}
                    label="Single"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={marital === 'windowed'}
                    onChange={handleMaterialSelect}
                    value="windowed"
                    control={<Radio />}
                    label="Widowed"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Education Level</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={education === 'unspecified'}
                    onChange={handleRadioSelect}
                    value="unspecified"
                    control={<Radio />}
                    label="Unspecified"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'grade8'}
                    onChange={handleEducationSelect}
                    value="grade8"
                    control={<Radio />}
                    label="8th grade or less"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'college'}
                    onChange={handleEducationSelect}
                    value="college"
                    control={<Radio />}
                    label="College"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'ged'}
                    onChange={handleEducationSelect}
                    value="ged"
                    control={<Radio />}
                    label="GED"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'highscl'}
                    onChange={handleEducationSelect}
                    value="highscl"
                    control={<Radio />}
                    label="High School"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'other'}
                    onChange={handleEducationSelect}
                    value="other"
                    control={<Radio />}
                    label="Other"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'postgraduate'}
                    onChange={handleEducationSelect}
                    value="postgraduate"
                    control={<Radio />}
                    label="Postgraduate"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={education === 'technicol'}
                    onChange={handleEducationSelect}
                    value="technicol"
                    control={<Radio />}
                    label="Technical college"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Primary Language</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={primary === 'chineses'}
                    onChange={handlePrimarySelect}
                    value="chineses"
                    control={<Radio />}
                    label="Chineses"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'english'}
                    onChange={handlePrimarySelect}
                    value="english"
                    control={<Radio />}
                    label="English"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'german'}
                    onChange={handlePrimarySelect}
                    value="german"
                    control={<Radio />}
                    label="German"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'italian'}
                    onChange={handlePrimarySelect}
                    value="italian"
                    control={<Radio />}
                    label="Italian"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'other'}
                    onChange={handlePrimarySelect}
                    value="other"
                    control={<Radio />}
                    label="Other"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'russian'}
                    onChange={handlePrimarySelect}
                    value="russian"
                    control={<Radio />}
                    label="Russian"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={primary === 'spanish'}
                    onChange={handlePrimarySelect}
                    value="spanish"
                    control={<Radio />}
                    label="Spanish"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Employment Status</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={employment === 'unspecified'}
                    onChange={handleRadioSelect}
                    value="unspecified"
                    control={<Radio />}
                    label="Unspecified"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'full'}
                    onChange={handleEmploymentSelect}
                    value="full"
                    control={<Radio />}
                    label="Full-Time"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'homemaker'}
                    onChange={handleEmploymentSelect}
                    value="homemaker"
                    control={<Radio />}
                    label="Homemaker"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'other'}
                    onChange={handleEmploymentSelect}
                    value="other"
                    control={<Radio />}
                    label="Other"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'part'}
                    onChange={handleEmploymentSelect}
                    value="part"
                    control={<Radio />}
                    label="Part-Time"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'retired'}
                    onChange={handleEmploymentSelect}
                    value="retired"
                    control={<Radio />}
                    label="Retired"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={employment === 'unemployed'}
                    onChange={handleEmploymentSelect}
                    value="unemployed"
                    control={<Radio />}
                    label="Unemployed"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xl={12} lg={12} className="flex">
                  <Grid item sm={2}>
                    <Typography variant="h6" className="font-bold pt-4">Religious Preference</Typography>
                  </Grid>
                  <FormControlLabel
                    checked={religious === 'unspecified'}
                    onChange={handleRadioSelect}
                    value="unspecified"
                    control={<Radio />}
                    label="Unspecified"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'buddhist'}
                    onChange={handleReligiousSelect}
                    value="buddhist"
                    control={<Radio />}
                    label="Buddhist"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'catholic'}
                    onChange={handleReligiousSelect}
                    value="catholic"
                    control={<Radio />}
                    label="Catholic"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'christian'}
                    onChange={handleReligiousSelect}
                    value="christian"
                    control={<Radio />}
                    label="Christian"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'jw'}
                    onChange={handleReligiousSelect}
                    value="jw"
                    control={<Radio />}
                    label="Jehovah's Witness"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'jewish'}
                    onChange={handleReligiousSelect}
                    value="jewish"
                    control={<Radio />}
                    label="Jewish"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'muslim'}
                    onChange={handleReligiousSelect}
                    value="muslim"
                    control={<Radio />}
                    label="Muslim"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    checked={religious === 'other'}
                    onChange={handleReligiousSelect}
                    value="other"
                    control={<Radio />}
                    label="Other"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          
        </AccordionDetails>
        
      </Accordion>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}