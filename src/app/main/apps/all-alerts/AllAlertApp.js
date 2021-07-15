import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimpleSplit from '@fuse/core/FusePageSimpleSplit';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from './Breadcrumb';
import DetailSidebarContent from '../note-summary/DetailSidebarContent';
import DetailSidebarHeader from '../note-summary/DetailSidebarHeader';
import AlertList from './AlertList';
import MainSidebarContent from './MainSidebarContent';
import MainSidebarHeader from './MainSidebarHeader';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function AllAlertApp(props) {
	const dispatch = useDispatch();
	const files = useSelector(({ fileManagerApp }) => fileManagerApp.files);
	const selectedItem = useSelector(({ fileManagerApp }) => files[fileManagerApp.selectedItemId]);

	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(Actions.getFiles());
	}, [dispatch]);

	return (
		<FusePageSimpleSplit
			classes={{
				root: 'bg-red',
				header: 'h-60 min-h-60 sm:h-60 sm:min-h-60',
				sidebarHeader: 'h-60 min-h-60 sm:h-60 sm:min-h-60',
				// rightSidebar: 'w-320'
			}}
			header={
				<div className="flex justify-center flex-1 p-8 sm:p-12 relative">
					<Typography variant="h4">All Alerts</Typography>
				</div>
			}
			content={<AlertList pageLayout={pageLayout} history={props.history} />}
			// leftSidebarVariant="temporary"
			// leftSidebarHeader={<MainSidebarHeader />}
			// leftSidebarContent={<MainSidebarContent />}
			rightSidebarHeader={<DetailSidebarHeader />}
			rightSidebarContent={<DetailSidebarContent />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('fileManagerApp', reducer)(AllAlertApp);
