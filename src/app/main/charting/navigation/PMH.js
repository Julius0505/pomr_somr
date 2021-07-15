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
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import { amber, red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import BookIcon from '@material-ui/icons/Book';

import withReducer from 'app/store/withReducer';
import { useSelector } from 'react-redux';
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

function PMH(props){

  const classes = useStyles();
  const [pmh, setPmh] = useState([]);
  const problemSelection = useSelector(({pmh}) => pmh.problems.problems);

  useEffect(() => {
    setPmh(problemSelection);
  }, [problemSelection])

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
              <Typography className={classes.heading} color="primary" variant="h6">Past Medical History</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">
                Basic HX
              </Button>
              <Button variant="outlined" className="mr-16">
                Complete HX
              </Button>
              <Button className="mr-16" variant="outlined">T</Button>
              <AddIcon className="mr-16"/>
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
        {
            pmh.map((item, index) => 
              item.pmh ? 
                <ListItem
                  key={index}
                  className={clsx(
                  classes.todoItem,
                  'border-solid border-b-1 py-16 px-0 sm:px-8'
                )}
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
                  <IconButton>
                    <Tooltip title="Free Text">
                      <PostAddIcon style={{ color: red[500] }} />
                    </Tooltip>
                  </IconButton>
                  
                  <IconButton>
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

export default withReducer('pmh', reducer)(PMH);