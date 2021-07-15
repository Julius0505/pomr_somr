import React, {useState, useEffect} from 'react';
import { makeStyles /*, withStyles */ } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';


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
        maxWidth: "100%"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        background : "#f6f7f9 !important",
        margin : "0",
        width: "100%"
    },
    itemHeading: {
        textAlign: "left",
        padding: "10px"
    },
    itemContent: {
        textAlign: "left"
    },
    itemTextField: {
        width: "100%"
    }
}));

function MedsDialogue(){

    const classes = useStyles();

    const dispatch = useDispatch();
    const openDialogue = useSelector(({meds}) => meds.meds.dialogue);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!openDialogue){
            return;
        }
        setOpen(openDialogue.meds);
    },[openDialogue]);

    const getAllMedsData = useSelector(({meds}) => meds.meds.allMedsData);
    const [allMedsData, setAllMedsData] = useState([]);

    useEffect(() => {
        if(!getAllMedsData){
            return;
        }
        setAllMedsData(getAllMedsData);
    },[getAllMedsData]);

    const handleClose = () => {
        dispatch(Actions.closeMedsDialogue());
    }

    const [tabValue, setTabValue] = useState(0);
    function handleChangeTab(event, value) {
		setTabValue(value);
	}

    return(
        <div className={classes.root}>
            <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth={false}>
                <DialogTitle id="simple-dialog-title">Add Medication</DialogTitle>
                <Grid container spacing={2} className={classes.container}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Tabs
                                value={tabValue}
                                onChange={handleChangeTab}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                classes={{ root: 'w-full h-64' }}
                            >
                                <Tab className="h-64 normal-case" label="Basic Info" />
                                <Tab className="h-64 normal-case" label="Product Images" />
                                <Tab className="h-64 normal-case" label="Pricing" />
                                <Tab className="h-64 normal-case" label="Inventory" />
                                <Tab className="h-64 normal-case" label="Shipping" />
                            </Tabs>
                            <div className="p-16 sm:p-24 max-w-2xl">
                                {tabValue === 0 && (
                                    <div>
                                        
                                    </div>
                                )}
                                {tabValue === 1 && (
                                    <div>
                                        
                                    </div>
                                )}
                                {tabValue === 2 && (
                                    <div>
                                        
                                    </div>
                                )}
                                {tabValue === 3 && (
                                    <div>
                                        
                                    </div>
                                )}
                                {tabValue === 4 && (
                                    <div>
                                        
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={clsx(classes.paper)}>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Name</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Indication</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Dosage</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Sig</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Duration</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Dispense</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Packages</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Phamacies</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Prescriber</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="flex flex-wrap p-2">
                                <Grid item xs={3}>
                                    <Typography variant="h6" className={classes.itemHeading}>Special Instruction</Typography>
                                </Grid>
                                <Grid item xs={9} className={classes.itemContent}>
                                    <TextField
                                        className={classes.itemTextField}
                                        // id="outlined-helperText"
                                        //defaultValue="Default Value"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}

export default withReducer('meds',reducer)(MedsDialogue);