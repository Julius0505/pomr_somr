import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import { withRouter } from 'react-router-dom';

import Demos from './demographic/Demos';
import EmergencyContact from './demographic/EmergencyContact';
import Employment from './demographic/Employment';
import Pharmacy from './demographic/Pharmacy';
import Other from './demographic/Other';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  width: "100%",
	  padding: theme.spacing(1),
	  margin: "10px",
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
  }));

function DemographicList(props) {
	const classes = useStyles();

	return (
		<div className="flex flex-wrap w-full">
			<Masonry
				breakpointCols={{
					default: 6,
					1920: 5,
					1600: 4,
					1366: 3,
					1280: 4,
					960: 3,
					600: 2,
					480: 1
				}}
				className="my-masonry-grid flex w-full"
				columnClassName="my-masonry-grid_column flex flex-col p-8"
			>
			</Masonry>
			<Paper className={classes.paper}>
				<Typography variant="h5">Demos</Typography>
				<Demos/>
			</Paper>
			<Paper className={classes.paper}>
				<Typography variant="h5">Emergency Contact</Typography>
				<EmergencyContact />
			</Paper>
			<Paper className={classes.paper}>
				<Typography variant="h5">Employment</Typography>
				<Employment />
			</Paper>
			<Paper className={classes.paper}>
				<Typography variant="h5">Pharmacy</Typography>
				<Pharmacy />
			</Paper>
			<Paper className={classes.paper}>
				<Typography variant="h5">Other</Typography>
				<Other />
			</Paper>
			
			
			
			
		</div>
	);
}

export default withRouter(DemographicList);
