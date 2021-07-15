import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	removeUnderline: {
		textDecoration: "none !important"
	}
}))

function Header(props) {

	const classes = useStyles();

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
			<div className="flex flex-shrink items-center sm:w-300">
				<div className="flex items-center">
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6">Problem Selection Grid</Typography>
					</FuseAnimate>
				</div>
			</div>

			<div className="flex flex-1 items-center justify-end">
				<Link to={"/charting"} className={classes.removeUnderline}>
                    <Tooltip title="return">
                        <IconButton>
                            <Icon color={'action'}>keyboard_backspace</Icon>
                        </IconButton>
				    </Tooltip>
                </Link>
			</div>
		</div>
	);
}

export default Header;
