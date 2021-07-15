import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import * as Actions from './store/actions';

const useStyles = makeStyles((theme) => ({
	removeUnderline: {
		textDecoration: "none !important"
	}
}))

function FlowsheetHeader() {

	const classes = useStyles();
	const dispatch = useDispatch();
	const subFlag = useSelector((state) => state.header.header.subFlag);

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
			<FuseAnimate animation="transition.slideLeftIn" delay={300}>
				<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
					Flowsheet
				</Typography>
			</FuseAnimate>
			<Link to={!subFlag?"/charting":"#"} className={classes.removeUnderline} onClick={()=>{dispatch(Actions.removeSubFlag())}}>
				<Tooltip title="return">
					<IconButton>
						<Icon color={'action'}>keyboard_backspace</Icon>
					</IconButton>
				</Tooltip>
			</Link>
		</div>
	);
}

export default withReducer('header', reducer)(FlowsheetHeader);
