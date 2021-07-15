import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';

import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
	root: {
		'&.user': {
			'& .username, & .email': {
				transition: theme.transitions.create('opacity', {
					duration: theme.transitions.duration.shortest,
					easing: theme.transitions.easing.easeInOut
				})
			}
		}
	},
	avatar: {
		width: 72,
		height: 72,
		position: 'absolute',
		top: 64,
		padding: 8,
		background: theme.palette.background.default,
		boxSizing: 'content-box',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		}),
		'& > img': {
			borderRadius: '50%'
		}
	}
}));

function UserNavbarHeader(props) {
	const user = useSelector(({ auth }) => auth.user);

	const classes = useStyles();

	return (
		<AppBar
			position="static"
			color="primary"
			elevation={0}
			classes={{ root: classes.root }}
			className="user relative flex flex-col items-center justify-center pb-40 mb-32 z-0"
		>
			<div className="flex w-full items-center h-64">
				<div className="flex flex-col justify-center items-center flex-1 ml-36">
					<Typography className="username text-16 whitespace-no-wrap" color="inherit">
						{user.data.displayName}
					</Typography>
					<Typography className="email text-13 mt-8 opacity-50 whitespace-no-wrap" color="inherit">
						{user.data.email}
					</Typography>
				</div>

				<Hidden mdDown>
					<NavbarFoldedToggleButton className="w-40 h-40 p-0 " />
				</Hidden>
			</div>


			<Avatar
				className={clsx(classes.avatar, 'avatar')}
				alt="user photo"
				src={
					user.data.photoURL && user.data.photoURL !== ''
						? user.data.photoURL
						: 'assets/images/avatars/profile.jpg'
				}
			/>
		</AppBar>
	);
}

export default UserNavbarHeader;
