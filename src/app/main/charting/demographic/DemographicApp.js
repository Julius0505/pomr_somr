import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import DemographicList from './DemographicList';
import DemographicHeader from './DemographicHeader';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function NotesApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(Actions.getNotes());
		dispatch(Actions.getLabels());
	}, [dispatch]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-16 sm:p-24 pb-80',
					content: 'flex min-h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72'
				}}
				header={<DemographicHeader pageLayout={pageLayout} />}
				content={
					<div className="flex flex-col w-full items-center">
						{/* <NewNote /> */}
						<DemographicList />
					</div>
				}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('notesApp', reducer)(NotesApp);
