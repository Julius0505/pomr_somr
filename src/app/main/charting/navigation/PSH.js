import React, { useState, useEffect } from 'react';
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
import AddIcon from '@material-ui/icons/Add';
import BookIcon from '@material-ui/icons/Book';
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
  },
}));

function PSH(props){

  const classes = useStyles();

  const dispatch = useDispatch();
  const psh = useSelector(({psh}) => psh.psh.selectedPSHDatas);
  const [pshDatas, setPSHDatas] = useState([]);

  useEffect(() => {
    setPSHDatas(psh);
  }, [psh])

  const openPSHDialogue = () => {
    dispatch(Actions.openPSHDialogue());
  }

  const deletePSH = (index) => {
    let tempPSH = JSON.parse(JSON.stringify(pshDatas));
    tempPSH.splice(index, 1);
    setPSHDatas(tempPSH)
    dispatch(Actions.setPSH(tempPSH));
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
              <Typography className={classes.heading} color="primary" variant="h6">Past Surgical History</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">
                Basic HX
              </Button>
              <Button variant="outlined" className="mr-16">
                Complete HX
              </Button>
              <Button className="mr-16" variant="outlined">T</Button>
              <AddIcon className="mr-16" onClick={(e) => openPSHDialogue()}/>
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
          <div className="w-full divide-y-1 divide-gray">
            {
              pshDatas && pshDatas.length > 0 ? pshDatas.map((item, index) => 
                <ListItem
                  key={index}
                >
                <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                  <Typography
                    variant="subtitle1"
                    className="todo-title truncate"
                  >
                    {item.name}
                  </Typography>

                  <div className={clsx(classes.labels, 'flex -mx-2')}>
                  </div>
                </div>

                <div className="px-8">
                  <Button className="mr-16" variant="outlined">T</Button>
                  <IconButton
                    onClick={()=>deletePSH(index)}
                  >
                    <Icon style={{ color: red[500] }}>close</Icon>
                  </IconButton>
                </div>
              </ListItem>
              ):null
            }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default withReducer('psh', reducer)(PSH);