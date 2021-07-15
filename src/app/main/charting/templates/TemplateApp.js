import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import TemplateHeader from './TemplateHeader';
import TemplateList from './TemplateList';
import Template from './Template';
import Grid from '@material-ui/core/Grid';
// import * as Actions from './store/actions';
import reducer from './store/reducers';

function TemplateApp() {

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
				header={<TemplateHeader pageLayout={pageLayout} />}
				content={
					<div className="flex flex-col w-full items-left">
						<Grid container spacing={5}>
							<Grid container item md={4} sm={12} spacing={3}>
								<TemplateList />
							</Grid>
							<Grid container item md={8} sm={12} spacing={3}>
								<Template />
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

export default withReducer('templateApp', reducer)(TemplateApp);
