import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';

function DetailSidebarHeader(props) {
	// const files = useSelector(({ fileManagerApp }) => fileManagerApp.files);
	// const selectedItem = useSelector(({ fileManagerApp }) => files[fileManagerApp.selectedItemId]);

	// if (!selectedItem) {
	// 	return null;
	// }

	return (
		<div className="flex flex-col items-center justify-center h-full p-4 sm:p-12">
			<div className="toolbar flex align-center justify-center">
				<FuseAnimate animation="transition.expandIn" delay={200}>
					<Tooltip title="Note" placement="top">
					<IconButton>
						<Icon>note</Icon>
					</IconButton>
					</Tooltip>
				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn" delay={200}>
				<Tooltip title="Summary" placement="top">

					<IconButton>
						<Icon>import_contacts</Icon>
					</IconButton>
					</Tooltip>
				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn" delay={200}>
				<Tooltip title="File" placement="top">

					<IconButton>
						<Icon>folder_open</Icon>
					</IconButton>
					</Tooltip>
				</FuseAnimate>
			</div>

			{/* <div className="p-12">
				<FuseAnimate delay={200}>
					<Typography variant="subtitle1" className="mb-8">
						{selectedItem.name}
					</Typography>
				</FuseAnimate>
				<FuseAnimate delay={300}>
					<Typography variant="caption" className="">
						<span>Edited</span>
						<span>: {selectedItem.modified}</span>
					</Typography>
				</FuseAnimate>
			</div> */}
		</div>
	);
}

export default DetailSidebarHeader;
