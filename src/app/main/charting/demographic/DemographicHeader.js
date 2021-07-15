import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import * as Actions from './store/actions';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	removeUnderline: {
		textDecoration: "none !important"
	}
}))

function DemographicHeader(props) {
	// const dispatch = useDispatch();
	const classes = useStyles();

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
			<FuseAnimate animation="transition.slideLeftIn" delay={300}>
				<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
					Demographic
				</Typography>
			</FuseAnimate>
			<Link to={"/charting"} className={classes.removeUnderline}>
				<Tooltip title="return">
					<IconButton>
						<Icon color={'action'}>keyboard_backspace</Icon>
					</IconButton>
				</Tooltip>
			</Link>
		</div>
	);
}

export default DemographicHeader;
