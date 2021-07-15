import FusePageCarded from '@fuse/core/FusePageCarded';
import React from 'react';
import MessageHeader from './MessageHeader';
import MessageTable from './MessageTable';
const MessageApp = () => {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
			}}
			header={<MessageHeader />}
			content={<MessageTable />}
		/>
	);
}

export default MessageApp;

