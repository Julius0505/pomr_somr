import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import WellnessHeader from './WellnessHeader';
import WellnessTable from './WellnessTable';

function Wellness() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<WellnessHeader />}
			content={<WellnessTable />}
		/>
	);
}

export default withReducer('charting', reducer)(Wellness);