import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "30px",
    backgroundColor: "#f6f7f9"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Pharmacy (props) {
    const classes = useStyles();

    function FormRow() {
        return (
        <React.Fragment>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">User</Typography>
                    <Typography variant="subtitle1">Phone(mobile) : </Typography>
                    <Typography variant="subtitle1">Phone(work) : </Typography>
                    <Typography variant="subtitle1">Phone(home) : </Typography>
                    <Typography variant="subtitle1">Email : </Typography>
                    <Typography variant="subtitle1">DOB : </Typography>
                    <Typography variant="subtitle1">Sex : </Typography>
                    <Typography variant="subtitle1">SS # : </Typography>
                    <Typography variant="subtitle1">Location : </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Allergies</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Reminders</Typography>
                </Paper>
            </Grid>
			<Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Physicians</Typography>
                    <Typography variant="subtitle1">Primary : </Typography>
                    <Typography variant="subtitle1">Specialist # 1 : </Typography>
                    <Typography variant="subtitle1">Specialist # 2 : </Typography>
                    <Typography variant="subtitle1">Specialist # 3 : </Typography>
                    <Typography variant="subtitle1">Specialist # 4 : </Typography>
                </Paper>
            </Grid>
			<Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Encounters</Typography>
                    <Typography variant="subtitle1">FED : </Typography>
                    <Typography variant="subtitle1">LED : </Typography>
                    <Typography variant="subtitle1">NED : </Typography>
                </Paper>
            </Grid>
			<Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Address1</Typography>
                    <Typography variant="subtitle1">Street : </Typography>
                    <Typography variant="subtitle1">City : </Typography>
                    <Typography variant="subtitle1">State : </Typography>
                    <Typography variant="subtitle1">Zip : </Typography>
                    <Typography variant="subtitle1">Phone : </Typography>
                </Paper>
            </Grid>
			<Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Address2</Typography>
					<Typography variant="subtitle1">Street : </Typography>
                    <Typography variant="subtitle1">City : </Typography>
                    <Typography variant="subtitle1">State : </Typography>
                    <Typography variant="subtitle1">Zip : </Typography>
                    <Typography variant="subtitle1">Phone : </Typography>
                </Paper>
            </Grid>
        </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}