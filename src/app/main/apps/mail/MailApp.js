import FusePageCarded from '@fuse/core/FusePageCarded';
import FusePageSimpleSplit from '@fuse/core/FusePageSimpleSplit';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MailDetails from './mail/MailDetails';
import MailToolbar from './mail/MailToolbar';
import MailAppHeader from './MailAppHeader';
import MailAppSidebarContent from './MailAppSidebarContent';
import MailAppSidebarHeader from './MailAppSidebarHeader';
import DetailSidebarContent from '../note-summary/DetailSidebarContent';
import DetailSidebarHeader from '../note-summary/DetailSidebarHeader';
import MailList from './mails/MailList';
import MailsToolbar from './mails/MailsToolbar';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function MailApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		dispatch(Actions.getFilters());
		dispatch(Actions.getFolders());
		dispatch(Actions.getLabels());
	}, [dispatch]);

	return (
		<FusePageSimpleSplit
			classes={{
				root: 'w-full',
				content: 'flex flex-col',
				header: 'items-center min-h-60 h-60 sm:h-60 sm:min-h-60',
				sidebarHeader: 'h-60 min-h-60 sm:h-60 sm:min-h-60',
			}}
			header={<MailAppHeader pageLayout={pageLayout} />}
			contentToolbar={routeParams.mailId ? <MailToolbar /> : <MailsToolbar />}
			content={routeParams.mailId ? <MailDetails /> : <MailList />}
			leftSidebarHeader={<MailAppSidebarHeader />}
			leftSidebarContent={<MailAppSidebarContent />}
			rightSidebarHeader={<DetailSidebarHeader />}
			rightSidebarContent={<DetailSidebarContent />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('mailApp', reducer)(MailApp);
