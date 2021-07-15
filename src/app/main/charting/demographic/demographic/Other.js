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

export default function Other (props) {
    const classes = useStyles();

    function FormRow() {
        return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Electronic communication</Typography>
                    <Typography variant="subtitle1">Do you wish to receive electronic communication from us? </Typography>
                    <Typography variant="subtitle1">Send information to : </Typography>
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