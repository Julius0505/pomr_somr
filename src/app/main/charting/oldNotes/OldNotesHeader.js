import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	removeUnderline: {
		textDecoration: "none !important"
	}
}))

function OldNotesHeader(props) {

	const classes = useStyles();

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<FuseAnimate animation="transition.slideLeftIn" delay={300}>
				<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
					Old Notes
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

export default OldNotesHeader;