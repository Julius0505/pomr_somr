import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import PreviewHeader from './PreviewHeader';
import PreviewContent from './PreviewContent';

function Preview() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<PreviewHeader />}
            content={<PreviewContent />}
            innerScroll
		/>
	);
}

export default withReducer('previewApp', reducer)(Preview);