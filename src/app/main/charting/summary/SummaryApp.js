import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import SummaryHeader from './SummaryHeader';
import DragAndDrop from './dragAndDrop';

function Summary() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<SummaryHeader />}
			content={<DragAndDrop />}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Summary);