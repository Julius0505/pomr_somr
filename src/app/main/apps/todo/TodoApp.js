import FusePageCarded from '@fuse/core/FusePageCarded';
import FusePageSimpleSplit from '@fuse/core/FusePageSimpleSplit';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import TodoDialog from './TodoDialog';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoSidebarContent from './TodoSidebarContent';
import TodoSidebarHeader from './TodoSidebarHeader';
import DetailSidebarContent from '../note-summary/DetailSidebarContent';
import DetailSidebarHeader from '../note-summary/DetailSidebarHeader';
import TodoToolbar from './TodoToolbar';

function TodoApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		dispatch(Actions.getFilters());
		dispatch(Actions.getFolders());
		dispatch(Actions.getLabels());
	}, [dispatch]);

	useDeepCompareEffect(() => {
		dispatch(Actions.getTodos(routeParams));
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimpleSplit
				classes={{
					root: 'w-full',
					header: 'items-center min-h-60 h-60 sm:h-60 sm:min-h-60',
					sidebarHeader: 'h-60 min-h-60 sm:h-60 sm:min-h-60	',
				}}
				header={<TodoHeader pageLayout={pageLayout} />}
				contentToolbar={<TodoToolbar />}
				content={<TodoList />}
				leftSidebarHeader={<TodoSidebarHeader />}
				leftSidebarContent={<TodoSidebarContent />}
				rightSidebarHeader={<DetailSidebarHeader />}
				rightSidebarContent={<DetailSidebarContent />}
				ref={pageLayout}
				innerScroll
			/>
			<TodoDialog />
		</>
	);
}

export default withReducer('todoApp', reducer)(TodoApp);
