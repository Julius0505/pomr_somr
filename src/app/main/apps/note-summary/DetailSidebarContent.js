import FuseAnimate from '@fuse/core/FuseAnimate';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SplitPane from 'react-flex-split-pane';

const useStyles = makeStyles({
	table: {
		'& th': {
			padding: '16px 0'
		}
	},
	typeIcon: {
		'&.folder:before': {
			content: "'folder'",
			color: '#FFB300'
		},
		'&.document:before': {
			content: "'insert_drive_file'",
			color: '#1565C0'
		},
		'&.spreadsheet:before': {
			content: "'insert_chart'",
			color: '#4CAF50'
		}
	}
});

function DetailSidebarContent(props) {
	// const files = useSelector(({ fileManagerApp }) => fileManagerApp.files);
	// const selectedItem = useSelector(({ fileManagerApp }) => files[fileManagerApp.selectedItemId]);

	const classes = useStyles();

	// if (!selectedItem) {
	// 	return null;
	// }

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={200}>
			<div className="flex align-center justify-center p-16 sm:p-24">
				<Typography variant="subtitle1" className="py-16">
					Patient's note goes here!

				</Typography>
			</div>
		</FuseAnimate>
	);
}

export default DetailSidebarContent;
