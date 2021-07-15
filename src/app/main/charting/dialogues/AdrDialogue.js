import React, {useState, useEffect} from 'react';
import { makeStyles /*, withStyles */ } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

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
    },
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    // },
}));

function AdrDialogue(){

    const classes = useStyles();

    const dispatch = useDispatch();
    const openDialogue = useSelector(({adr}) => adr.adr.dialogue);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!openDialogue){
            return;
        }
        setOpen(openDialogue.adr);
    },[openDialogue]);

    const getAlladrData = useSelector(({adr}) => adr.adr.allAdrData);
    const [allAdrData, setAllAdrData] = useState([]);

    useEffect(() => {
        if(!getAlladrData){
            return;
        }
        setAllAdrData(getAlladrData);
    },[getAlladrData]);

    const handleClose = () => {
        dispatch(Actions.closeAdrDialogue());
    }

    let tempData = useSelector(({adr}) => adr.adr.selectedAdrData);

    const selectAdrItem = (e,value) => {
        if(tempData.includes(value)){
            return;
        };
        tempData = [...tempData,value];
        dispatch(Actions.setAdr(tempData));
    }

    return(
        <div className={classes.root}>
            <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth="lg">
                <DialogTitle id="simple-dialog-title">Add Allergy Reaction</DialogTitle>
                <Grid container spacing={2} className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className="flex items-center h-36 px-16 w-full mr-6">
                            <Input
                                className="text-xl"
                                placeholder="Search..."
                                disableUnderline
                                fullWidth
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                            />
                            <Icon color="action">search</Icon>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper className={clsx(classes.paper)}>
                            <List component="nav" className="divide-y">
                                {
                                    allAdrData.map((item) => (
                                        <ListItem button key={item.key} onClick={(e) => selectAdrItem(e,item)}>
                                            <ListItemText primary={item.name} ></ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid item xs={12} className="flex flex-wrap p-2">
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.itemHeading}>Indication</Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.itemContent}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <Select
                                        native
                                        // value={state.age}
                                        // onChange={handleChange}
                                        // inputProps={{
                                        //     name: 'age',
                                        //     id: 'age-native-simple',
                                        // }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className="flex flex-wrap p-2">
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.itemHeading}>Indication</Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.itemContent}>
                                <TextField
                                    className={classes.itemTextField}
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
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}

export default withReducer('adr',reducer)(AdrDialogue);