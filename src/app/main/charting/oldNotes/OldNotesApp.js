import FusePageCarded from '@fuse/core/FusePageCarded';
import React from 'react';
import OldNotesHeader from './OldNotesHeader';
import OldNotesTable from './OldNotesTable';

const OldNotesApp = () => {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<OldNotesHeader />}
			content={<OldNotesTable />}
		/>
	);
}

export default OldNotesApp;

