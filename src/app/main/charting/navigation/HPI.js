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
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { amber, red } from '@material-ui/core/colors';

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
      display: "block"
    }
  },
}));

function HPI(props){

  const classes = useStyles();
  const [hpi, setHpi] = useState([]);
  const problemSelection = useSelector(({hpi}) => hpi.problems.problems);
  const dispatch = useDispatch();

  useEffect(() => {
    setHpi(problemSelection);
  }, [problemSelection])

  const deleteHPI = (index) => {
    let tempHPI = JSON.parse(JSON.stringify(hpi));
    tempHPI[index].hpi = !tempHPI[index].hpi;
    dispatch(Actions.setProblems(tempHPI));
  }

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
              <Typography className={classes.heading} color="primary" variant="h6">History of Present Illness</Typography>
            </div>

            <div className="w-4/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          {
            hpi.map((item, index) => 
              item.hpi ? 
                <ListItem
                  key={index}
                  className={clsx(
                  classes.todoItem,
                  // { completed: props.todo.completed },
                  'border-solid border-b-1 py-16 px-0 sm:px-8'
                )}
                // onClick={ev => {
                //   ev.preventDefault();
                //   dispatch(Actions.openEditTodoDialog(props.todo));
                // }}
                // dense
                // button
              >
    
                <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                  <Typography
                    variant="subtitle1"
                    className="todo-title truncate"
                  >
                    {item.item}
                  </Typography>
    
                  <div className={clsx(classes.labels, 'flex -mx-2')}>
                    {/* {props.todo.labels.map(label => (
                      <TodoChip
                        className="mx-2 mt-4"
                        title={_.find(labels, { id: label }).title}
                        color={_.find(labels, { id: label }).color}
                        key={label}
                      />
                    ))} */}
                  </div>
                </div>
    
                <div className="px-8">
                  <Button className="mr-16" variant="outlined">P</Button>
                  <Button className="mr-16" variant="outlined">L</Button>
                  <Button className="mr-16" variant="outlined">F</Button>
                  <IconButton
                    // onClick={ev => {
                    //   ev.preventDefault();
                    //   ev.stopPropagation();
                    //   dispatch(Actions.toggleImportant(props.todo));
                    // }}
                  >
                    <PostAddIcon style={{ color: red[500] }} />
                  </IconButton>
                  <IconButton
                    // onClick={ev => {
                    //   ev.preventDefault();
                    //   ev.stopPropagation();
                    //   dispatch(Actions.toggleImportant(props.todo));
                    // }}
                  >
                    <Icon style={{ color: red[500] }}>book</Icon>
                  </IconButton>
                  <IconButton
                    onClick={()=>deleteHPI(index)}
                  >
                    <Icon style={{ color: red[500] }}>close</Icon>
                  </IconButton>
                </div>
              </ListItem>: null
            )
          }
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default withReducer('hpi', reducer)(HPI);