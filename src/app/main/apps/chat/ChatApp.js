import FusePageCarded from '@fuse/core/FusePageCarded';
import FusePageSimpleSplit from '@fuse/core/FusePageSimpleSplit';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatContent from './ChatContent';
import ChatAppSidebarContent from './ChatAppSidebarContent';
import ChatAppSidebarHeader from './ChatAppSidebarHeader';
import DetailSidebarContent from '../note-summary/DetailSidebarContent';
import DetailSidebarHeader from '../note-summary/DetailSidebarHeader';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function ChatApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		// dispatch(Actions.getFilters());
		// dispatch(Actions.getFolders());
		// dispatch(Actions.getLabels());
	}, [dispatch]);

	return (
		<FusePageSimpleSplit
			classes={{
				root: 'w-full',
				content: 'flex flex-col',
				header: 'items-center min-h-60 h-60 sm:h-60 sm:min-h-60',
				sidebarHeader: 'h-60 min-h-60 sm:h-60 sm:min-h-60',
			}}
			// header={<MailAppHeader pageLayout={pageLayout} />}
			// contentToolbar={routeParams.mailId ? <MailToolbar /> : <MailsToolbar />}
			content={<ChatContent />}
			leftSidebarHeader={<ChatAppSidebarHeader />}
			leftSidebarContent={<ChatAppSidebarContent />}
			rightSidebarHeader={<DetailSidebarHeader />}
			rightSidebarContent={<DetailSidebarContent />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('chatApp', reducer)(ChatApp);
