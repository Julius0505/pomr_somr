import React from 'react';

const ChatAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/alerts/chat',
			component: React.lazy(() => import('./ChatApp'))
		}
	]
};

export default ChatAppConfig;
