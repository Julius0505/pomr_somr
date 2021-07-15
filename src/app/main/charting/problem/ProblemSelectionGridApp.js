import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import ProblemSelectionGrid from './ProblemSelectionGrid';
import Grid from '@material-ui/core/Grid';
// import * as Actions from './store/actions';
import reducer from './store/reducers';
import Header from './Header';

function TemplateApp(props) {

	const pageLayout = useRef(null);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-16 sm:p-24 pb-80',
					content: 'flex min-h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72'
				}}
				header={<Header pageLayout={pageLayout} />}
				content={
					<div className="flex flex-col w-full items-left">
						<Grid container spacing={5}>
							<Grid container item md={12} sm={12} spacing={3}>
								<ProblemSelectionGrid />
							</Grid>
						</Grid>
					</div>
				}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('problemApp', reducer)(TemplateApp);
