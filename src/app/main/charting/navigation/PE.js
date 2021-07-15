import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BookIcon from '@material-ui/icons/Book';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  fTable: {
    margin: "0",
    minWidth: "1500px",
    width: "100%"
  },
  fHeading: {
    margin: "0",
    fontSize: "18px"
  },
  fContent: {
    margin: "0"
  },
  sTable: {
    margin: "0",
    minWidth: "600px"
  },
  sHeading: {
    margin: "0",
    fontSize: "18px"
  },
  sContent: {
    margin: "0"
  },
  itemTextField: {
    width: "100px"
  },
  itemSmallField: {
    width: "60px"
  },
  itemSelectField: {
    width: "60px",
    paddingRight: "6px"
  }
}));

const tempPEData = [
  {
    bmi: "NaN",
    bpfirst: "dv",
    bpsecond: "10",
    date: "2020-9-16 12:58",
    diagnosis: {data: undefined},
    heightft: "10",
    heightinch: "3",
    pulse: "60",
    pulseox: 95,
    resp: "1",
    temp: "1",
    weight: "1"
  }
]

export default function PE(props){

  const classes = useStyles();

  const newDate = new Date();
  const date = moment(newDate).format("YYYY-MM-DD");
  let hour = newDate.getHours();
  if(hour.toString().length !== 2) hour="0"+hour;
  let min = newDate.getMinutes();
  if(min.toString().length !== 2) min="0"+min;
  const initialDate = date + "T" + hour + ":" + min;

  const handleDateChange = (e) => {
    console.log(initialDate, e.target.value)
  }

  return(
    <div className={classes.root} id={props.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Physical Exam</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button className="mr-16" variant="outlined">P</Button>
              <Button className="mr-16" variant="outlined">L</Button>
              <Button className="mr-16" variant="outlined">T</Button>
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
          <div className="w-full">
            <div className="w-full overflow-x-scroll">
              <Grid container spacing={2} className={classes.fTable}>
                <Grid container spacing={2} className={classes.fHeading}>
                  <Grid item sm={2} className="text-center">Date and Time</Grid>
                  <Grid item sm={2} className="text-center">BP</Grid>
                  <Grid item sm={2} className="flex">
                    <Grid item sm={4} className="text-center">Pulse</Grid>
                    <Grid item sm={4} className="text-center">Resp</Grid>
                    <Grid item sm={4} className="text-center">Temp</Grid>
                  </Grid>
                  <Grid item sm={2} className="text-center">Height</Grid>
                  <Grid item sm={2} className="flex">
                    <Grid item sm={6} className="text-center">Weight</Grid>
                    <Grid item sm={6} className="text-center">BMI</Grid>
                  </Grid>
                  <Grid item sm={2} className="text-center">Pulse Ox</Grid>
                </Grid>
                {
                  tempPEData.map((item, index) => 
                    <Grid key={index} container spacing={2} className={classes.fContent}>
                      <Grid item sm={2} className="flex">
                        <Grid item sm={2} className="text-center">
                          <Icon style={{ color: red[500] }}>close</Icon>
                        </Grid>
                        <Grid item sm={10} className="text-center">
                          <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue={initialDate}
                            className={classes.textField}
                            onChange={handleDateChange}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        
                      </Grid>
                      <Grid item sm={2} className="flex">
                        <Grid item sm={5} className="text-center">
                          <TextField
                            className={classes.itemTextField}
                            defaultValue={item.bpfirst}
                          />
                        </Grid>
                        <Grid item sm={2} className="text-center">
                          <Typography variant="h6">/</Typography>
                        </Grid>
                        <Grid item sm={5} className="text-center">
                          <TextField
                            className={classes.itemTextField}
                            defaultValue={item.bpsecond}
                          />
                        </Grid>
                      </Grid>
                      <Grid item sm={2} className="flex">
                        <Grid item sm={4} className="text-center">
                          <TextField
                            className={classes.itemSmallField}
                            defaultValue={item.pulse}
                          />
                        </Grid>
                        <Grid item sm={4} className="text-center">
                          <TextField
                            className={classes.itemSmallField}
                            defaultValue={item.resp}
                          />
                        </Grid>
                        <Grid item sm={4} className="text-center">
                          <TextField
                            className={classes.itemSmallField}
                            defaultValue={item.temp}
                          />
                        </Grid>
                      </Grid>
                      <Grid item sm={2} className="flex">
                        <Grid item sm={6} className="text-center">
                          <TextField
                            className={classes.itemSelectField}
                            defaultValue={item.bpfirst}
                          />
                          <Select native>
                            <option value={10}>ft</option>
                          </Select>
                        </Grid>
                        <Grid item sm={6} className="text-center">
                          <TextField
                            className={classes.itemSelectField}
                            defaultValue={item.bpsecond}
                          />
                          <Select native>
                            <option value={10}>in</option>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid item sm={2} className="flex">
                        <Grid item sm={6} className="text-center">
                          <TextField
                            className={classes.itemSelectField}
                            defaultValue={item.weight}
                          />
                          <Select native>
                            <option value={10}>lbs</option>
                          </Select>
                        </Grid>
                        <Grid item sm={6} className="text-center">
                          <TextField
                            className={classes.itemSmallField}
                            defaultValue={item.bmi}
                          />
                        </Grid>
                      </Grid>
                      <Grid item sm={2} className="text-center">
                        <TextField
                          className={classes.itemSelectField}
                          defaultValue={item.weight}
                        />
                        <Select native>
                          <option value={10}>room air</option>
                          <option value={10}>1 liter</option>
                          <option value={10}>2 liter</option>
                          <option value={10}>3 liter</option>
                          <option value={10}>4 liter</option>
                          <option value={10}>5 liter</option>
                          <option value={10}>50% venti-mask</option>
                          <option value={10}>100% non-rebreather</option>
                        </Select>
                      </Grid>
                    </Grid>
                  )
                }
              </Grid>
            </div>
            <div className="w-full">
              <ListItem>      
                <div className="flex flex-1 overflow-hidden px-8">
                  <div className="w-1/4">
                    <Typography variant="subtitle1" className="todo-title truncate" >
                      Constitutional
                    </Typography>
                  </div>
                  <div className="w-3/4">
                    <div className="text-left">            
                      Appearance
                    </div>
                    <div className="text-left">
                      fg
                    </div>
                  </div>
                </div>
    
                <div className="px-8">
                  <Button className="mr-16" variant="outlined">Expand</Button>
                  <Button className="mr-16" variant="outlined">Default</Button>
                  <IconButton
                    // onClick={()=>deleteHPI(index)}
                  >
                    <Icon style={{ color: red[500] }}>close</Icon>
                  </IconButton>
                </div>
              </ListItem>
              <ListItem>      
                <div className="flex flex-1 overflow-hidden px-8">
                  <div className="w-1/4">
                    <Typography variant="subtitle1" className="todo-title truncate" >
                      HEENT
                    </Typography>
                  </div>
                  <div className="w-3/4">
                    <div className="text-left">Head/Face</div>
                    <div className="text-left">
                    Eyes
                    </div>
                    <div className="text-left">
                      Ears
                    </div>
                    <div className="text-left">
                      Earlobes
                    </div>
                  </div>
                </div>
    
                <div className="px-8">
                  <Button className="mr-16" variant="outlined">Expand</Button>
                  <Button className="mr-16" variant="outlined">Default</Button>
                  <IconButton
                    // onClick={()=>deleteHPI(index)}
                  >
                    <Icon style={{ color: red[500] }}>close</Icon>
                  </IconButton>
                </div>
              </ListItem>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}