
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const accounts = {
	creapond: 'johndoe@creapond.com',
	withinpixels: 'johndoe@withinpixels.com'
};

function ChatAppSidebarHeader(props) {
	

	return (
		<div className="flex flex-col items-center justify-center h-full p-24">
			<Typography variant="h4">Chat</Typography>
		</div>
	);
}

export default ChatAppSidebarHeader;
