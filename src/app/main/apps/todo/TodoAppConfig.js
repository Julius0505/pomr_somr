import React from 'react';
import { Redirect } from 'react-router-dom';

const TodoAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: [
				'/alerts/todo/label/:labelHandle/:todoId?',
				'/alerts/todo/filter/:filterHandle/:todoId?',
				'/alerts/todo/:folderHandle/:todoId?'
			],
			component: React.lazy(() => import('./TodoApp'))
		},
		{
			path: '/alerts/todo',
			component: () => <Redirect to="/alerts/todo/all" />
		}
	]
};

export default TodoAppConfig;
