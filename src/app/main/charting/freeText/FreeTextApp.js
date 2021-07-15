import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import FreeTextHeader from './FreeTextHeader';
import FreeTextContent from './FreeTextContent';

function FreeText() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<FreeTextHeader />}
			content={<FreeTextContent />}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(FreeText);