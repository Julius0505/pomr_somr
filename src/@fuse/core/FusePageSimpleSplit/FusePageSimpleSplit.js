import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import FusePageSimpleHeader from './FusePageSimpleHeader';
import FusePageSimpleSidebar from './FusePageSimpleSidebar';
import SplitPane from 'react-flex-split-pane';

const headerHeight = 120;
const toolbarHeight = 64;
const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
		position: 'relative',
		flex: '1 0 auto',
		height: 'auto',
		backgroundColor: theme.palette.background.default
	},
	innerScroll: {
		flex: '1 1 auto',
		height: '100%'
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.palette.background.default
	},
	header: {
		height: headerHeight,
		minHeight: headerHeight,
		display: 'flex',
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText,
		backgroundSize: 'cover',
		backgroundColor: theme.palette.primary.dark
	},
	topBg: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		pointerEvents: 'none'
	},
	/* contentCardWrapper            : {
				 display : 'flex ',
				 flex    : '1 1 auto',
				 overflow: 'visible!important',
				 minWidth: 0,
				 '&.ps'  : {
						 overflow: 'visible!important'
				 }
		 },
		 contentCardWrapperInnerSidebar: {
				 display                     : 'block',
				 overflow                    : 'auto!important',
				 '-webkit-overflow-scrolling': 'touch',
				 '&.ps'                      : {
						 overflow: 'hidden!important'
				 },
				 '& $contentCard'            : {
						 borderRadius: 8
				 }
		 }, */
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		zIndex: 9999
	},
	toolbar: {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},
	content: {
		flex: '1 0 auto'
	},
	sidebarWrapper: {
		overflow: 'hidden',
		backgroundColor: 'transparent',
		position: 'absolute',
		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative'
			}
		}
	},
	sidebar: {
		position: 'absolute',
		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				backgroundColor: theme.palette.background.default,
				color: theme.palette.text.primary,
				position: 'relative'
			}
		},
		// width: "20%",
		height: '100%'
	},
	leftSidebar: {
		// width: '200px',
		[theme.breakpoints.up('lg')]: {
			borderRight: `1px solid ${theme.palette.divider}`,
			borderLeft: 0
		}
	},
	rightSidebar: {
		[theme.breakpoints.up('lg')]: {
			borderLeft: `0px solid ${theme.palette.divider}`,
			borderRight: 0
		}
	},
	sidebarHeader: {
		height: headerHeight,
		minHeight: headerHeight,
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.contrastText
	},
	sidebarHeaderInnerSidebar: {
		backgroundColor: 'transparent',
		color: 'inherit',
		height: 'auto',
		minHeight: 'auto'
	},
	sidebarContent: {},
	backdrop: {
		position: 'absolute'
	}
}));

const FusePageSimpleSplit = React.forwardRef((props, ref) => {
	// console.info("render::FusePageSimple");
	const leftSidebarRef = useRef(null);
	const rightSidebarRef = useRef(null);
	const rootRef = useRef(null);
	const classes = useStyles(props);

	const [size, setSize] = useState(500);
	const [isResizing, setIsResizing] = useState(false);
	const [leftSize, setLeftSize] = useState(200);
	const [isLeftResizing, setIsLeftResizing] = useState(false);

	// <SplitPane
	//       type="vertical"
	//       size={size}
	//       isResizing={isResizing}
	//       onResizeStart={onResizeStart}
	//       onResizeEnd={onResizeEnd}
	//       onChange={onChange}
	//       paneStyle={{ border: '1px solid silver' }}
	//       pane1Style={{ borderRight: '1px solid silver' }}
	//     ></SplitPane>

	const onResizeStart = () => setIsResizing(true)
	const onResizeEnd = () => setIsResizing(false)
	const onChange = size => setSize(size);
	const onChangeLeft = size => setLeftSize(size);
	const onLeftResizeStart = () => setIsLeftResizing(true)
	const onLeftResizeEnd = () => setIsLeftResizing(false)

	React.useImperativeHandle(ref, () => ({
		rootRef,
		toggleLeftSidebar: () => {
			leftSidebarRef.current.toggleSidebar();
		},
		toggleRightSidebar: () => {
			rightSidebarRef.current.toggleSidebar();
		}
	}));

	return (
		<div className={clsx(classes.root, props.innerScroll && classes.innerScroll)} ref={rootRef}>
			<div className={clsx(classes.header, classes.topBg)} />

			<div className="flex flex-auto flex-col container z-10 h-full">
				{props.header && props.sidebarInner && <FusePageSimpleHeader header={props.header} classes={classes} />}

				<div className={classes.wrapper}>
					<SplitPane
						type="vertical"
						size={(props.leftSidebarHeader || props.leftSidebarContent) ? leftSize : 0}
						isResizing={isLeftResizing}
						onResizeStart={onLeftResizeStart}
						onResizeEnd={onLeftResizeEnd}
						onChange={onChangeLeft}
						paneStyle={{ border: '1px solid transparent' }}
						pane1Style={{ borderRight: '2px solid silver' }}
					>

						{(props.leftSidebarHeader || props.leftSidebarContent) && (
							<FusePageSimpleSidebar
								position="left"
								header={props.leftSidebarHeader}
								content={props.leftSidebarContent}
								variant={props.leftSidebarVariant || 'permanent'}
								innerScroll={props.innerScroll}
								sidebarInner={props.sidebarInner}
								classes={classes}
								ref={leftSidebarRef}
								rootRef={rootRef}
							/>
						)}

						{/* <FuseScrollbars */}
						{/*    className={clsx(classes.contentCardWrapper, props.sidebarInner && classes.contentCardWrapperInnerSidebar)} */}
						{/*    enable={props.innerScroll && props.sidebarInner} */}
						{/* > */}

						<SplitPane
							type="vertical"
							size={size}
							isResizing={isResizing}
							onResizeStart={onResizeStart}
							onResizeEnd={onResizeEnd}
							onChange={onChange}
							paneStyle={{ border: '1px solid transparent' }}
							pane1Style={{ borderRight: '2px solid silver' }}
						>
							<FuseScrollbars
								className={classes.contentWrapper}
								enable={props.innerScroll && !props.sidebarInner}
							>
								{props.header && !props.sidebarInner && (
									<FusePageSimpleHeader header={props.header} classes={classes} />
								)}

								{props.contentToolbar && <div className={classes.toolbar}>{props.contentToolbar}</div>}

								{props.content && <div className={classes.content}>{props.content}</div>}
							</FuseScrollbars>
							{/* </FuseScrollbars> */}

							{(props.rightSidebarHeader || props.rightSidebarContent) && (
								<FusePageSimpleSidebar
									position="right"
									header={props.rightSidebarHeader}
									content={props.rightSidebarContent}
									variant={props.rightSidebarVariant || 'permanent'}
									innerScroll={props.innerScroll}
									sidebarInner={props.sidebarInner}
									classes={classes}
									ref={rightSidebarRef}
									rootRef={rootRef}
								/>
							)}
						</SplitPane>
					</SplitPane>
				</div>
			</div>
		</div>
	);
});

FusePageSimpleSplit.propTypes = {
	leftSidebarHeader: PropTypes.node,
	leftSidebarContent: PropTypes.node,
	leftSidebarVariant: PropTypes.node,
	rightSidebarHeader: PropTypes.node,
	rightSidebarContent: PropTypes.node,
	rightSidebarVariant: PropTypes.node,
	header: PropTypes.node,
	content: PropTypes.node,
	contentToolbar: PropTypes.node,
	sidebarInner: PropTypes.bool,
	innerScroll: PropTypes.bool
};

FusePageSimpleSplit.defaultProps = {};

export default React.memo(FusePageSimpleSplit);
