import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import BookIcon from '@material-ui/icons/Book';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    '& .MuiAccordionDetails-root': {
      flexWrap: "wrap"
    },
    '& .MuiFormControlLabel-root': {
      marginRight: "0",
      marginLeft: "0"
    }
  },
  flexPlay: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center"
  },
  flexPlayTitle: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "space-around", 
    border:"1px solid"
  },
  title: {
    textAlign: "center",
    borderBottom: "1px solid",
    marginBottom: "20px"
  }
}));

function ASS(props){

  const classes = useStyles();
  const [ass, setAss] = useState([]);
  const problemSelection = useSelector(({ass}) => ass.problems.problems);
  const dispatch = useDispatch()

  useEffect(() => {
    setAss(problemSelection);
  }, [problemSelection])

  // FormControlLabel

  const handleChange = (e, index) => {
    let tempAss = JSON.parse(JSON.stringify(ass));
    tempAss[index].selection = e.target.value;
    setAss(tempAss);
    dispatch(Actions.setProblems(tempAss))
  };

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
              <Typography className={classes.heading} color="primary" variant="h6">Assessment</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">L</Button>
              <Button variant="outlined" className="mr-16">T</Button>
              <BookIcon color="secondary"/>
            </div>

            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="md:w-1/2 sm:w-full">
            <div className={clsx(classes.title, "w-full")} >
              <Typography variant="h6" >
                Primary Diagnosis(es)
              </Typography>
            </div>
            <div className={clsx(classes.flexPlay, "w-full")} >
              <div className={clsx(classes.flexPlay, "w-2/5")}></div>
              <div className={clsx(classes.flexPlay, "w-3/5")} >
                <div className={clsx(classes.flexPlayTitle, "w-2/5")}>New Problem</div>
                <Divider />
                <div className={clsx(classes.flexPlayTitle, "w-3/5")}>Established Problem</div>
                <Divider />
              </div>
              <div className={clsx(classes.flexPlay, "w-2/5")}></div>
              <div className={clsx(classes.flexPlay, "w-3/5")}>
                <div className="w-1/5">+w/u</div>
                <div className="w-1/5">-w/u</div>
                <div className="w-1/5">exec</div>
                <div className="w-1/5">stbl</div>
                <div className="w-1/5">min</div>
              </div>
            </div>
            {
              ass.map((item, index) => 
                item.ass==="p" ? 
                  <div key={index} className={classes.flexPlay} >
                    <div className={clsx(classes.flexPlay, "w-2/5")}>
                      <ListItem>
                        <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                          <Typography variant="subtitle1" className="todo-title truncate" >
                            {item.item}
                          </Typography>
                        </div>
                      </ListItem>
                    </div>
                    <div className={clsx(classes.flexPlay, "w-3/5")}>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'wu'}
                          onChange={(e)=>handleChange(e, index)}
                          value="wu"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'nwu'}
                          onChange={(e)=>handleChange(e, index)}
                          value="nwu"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'exc'}
                          onChange={(e)=>handleChange(e, index)}
                          value="exc"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'stbl'}
                          onChange={(e)=>handleChange(e, index)}
                          value="stbl"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'min'}
                          onChange={(e)=>handleChange(e, index)}
                          value="min"
                          control={<Radio />}
                        />
                      </div>
                    </div>
                  </div>
                : null
              )
            }
          </div>
          <div className="md:w-1/2 sm:w-full">
            <div className={clsx(classes.title, "w-full")} >
              <Typography variant="h6" >
                Secondary Diagnosis(es)
              </Typography>
            </div>
            <div className={clsx(classes.flexPlay, "w-full")} >
              <div className={clsx(classes.flexPlay, "w-2/5")}></div>
              <div className={clsx(classes.flexPlay, "w-3/5")} >
                <div className={clsx(classes.flexPlayTitle, "w-2/5")}>New Problem</div>
                <Divider />
                <div className={clsx(classes.flexPlayTitle, "w-3/5")}>Established Problem</div>
                <Divider />
              </div>
              <div className={clsx(classes.flexPlay, "w-2/5")}></div>
              <div className={clsx(classes.flexPlay, "w-3/5")}>
                <div className="w-1/5">+w/u</div>
                <div className="w-1/5">-w/u</div>
                <div className="w-1/5">exec</div>
                <div className="w-1/5">stbl</div>
                <div className="w-1/5">min</div>
              </div>
            </div>
            {
              ass.map((item, index) => 
                item.ass==="s" ? 
                  <div key={index} className={classes.flexPlay} >
                    <div className={clsx(classes.flexPlay, "w-2/5")}>
                      <ListItem>
                        <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                          <Typography variant="subtitle1" className="todo-title truncate" >
                            {item.item}
                          </Typography>
                        </div>
                      </ListItem>
                    </div>
                    <div className={clsx(classes.flexPlay, "w-3/5")}>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'wu'}
                          onChange={(e)=>handleChange(e, index)}
                          value="wu"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'nwu'}
                          onChange={(e)=>handleChange(e, index)}
                          value="nwu"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'exc'}
                          onChange={(e)=>handleChange(e, index)}
                          value="exc"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'stbl'}
                          onChange={(e)=>handleChange(e, index)}
                          value="stbl"
                          control={<Radio />}
                        />
                      </div>
                      <div className="w-1/5">
                        <FormControlLabel
                          checked={item.selection === 'min'}
                          onChange={(e)=>handleChange(e, index)}
                          value="min"
                          control={<Radio />}
                        />
                      </div>
                    </div>
                  </div>
                : null
              )
            }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default withReducer('ass', reducer)(ASS);