import React, {useState, useEffect} from 'react';
import { makeStyles /*, withStyles */ } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogActions from '@material-ui/core/DialogActions';

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography component="div">{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

let data = [];

function SimpleList(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const items = props.data;
    
    const tempData = useSelector(({psh_dialogue}) => psh_dialogue.psh.selectedPSHDatas);

    const handleListItemClick = (e,value) => {
        if(data.includes(value)){
            return;
        };
        data = [...data,value];
        dispatch(Actions.setPSH(data));
    }

    data = tempData;

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    items.map((item) => (
                        <ListItem button key={item.key} onClick={(e) => handleListItemClick(e,item)}>
                            <ListItemText primary={item.name} ></ListItemText>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function PSHDialogue(){

    const classes = useStyles();

    const dispatch = useDispatch();

    const redux_open = useSelector(({psh_dialogue}) => psh_dialogue.psh.dialogue);
    
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if(!redux_open){
            return;
        }
        setOpen(redux_open.psh);
    },[redux_open]);

    const redux_list_data = useSelector(({psh_dialogue}) => psh_dialogue.psh.allPSHDatas);

    const [list_data, setList_data] = useState([]);
    useEffect(() => {
        if(!redux_list_data){
            return;
        }
        setList_data(redux_list_data);
    },[redux_list_data]);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        dispatch(Actions.closePSHDialogue());
    }

    return(
        <div className={classes.root}>
            <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth="md">
                <DialogTitle id="simple-dialog-title">Past Surgical History</DialogTitle>
                <div>
                    <AppBar position="static" color="transparent">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Common" {...a11yProps(0)} />
                            <Tab label="Favorite" {...a11yProps(1)} />
                            <Tab label="Search" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <SimpleList data={list_data}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default withReducer('psh_dialogue',reducer)(PSHDialogue);