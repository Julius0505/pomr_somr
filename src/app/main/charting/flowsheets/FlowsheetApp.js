import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useRef } from 'react';
import FlowsheetHeader from './FlowsheetHeader';
import FlowsheetList from './FlowsheetList';
// import * as Actions from './store/actions';
// import reducer from './store/reducers';

function FlowsheetApp() {

	const pageLayout = useRef(null);

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<FlowsheetHeader pageLayout={pageLayout} />}
			content={<FlowsheetList />}
		/>
	);
}

export default FlowsheetApp;
