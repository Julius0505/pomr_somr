import React from 'react';

const AllAlertAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/alerts/all',
			component: React.lazy(() => import('./AllAlertApp'))
		}
	]
};

export default AllAlertAppConfig;
