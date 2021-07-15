import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function MessageHeader(props) {

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Link to={"/charting"}>
						<Tooltip title="return">
							<IconButton>
								<Icon color={'action'}>keyboard_backspace</Icon>
							</IconButton>
						</Tooltip>
					</Link>
				</FuseAnimate>

				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Message/Task
					</Typography>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default MessageHeader;