import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
	header: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText
	},
	panel: {
		margin: 0,
		borderWidth: '1px 1px 0 1px',
		borderStyle: 'solid',
		borderColor: theme.palette.divider,
		'&:first-child': {
			borderRadius: '16px 16px 0 0'
		},
		'&:last-child': {
			borderRadius: '0 0 16px 16px',
			borderWidth: '0 1px 1px 1px'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {},
	button: {
		margin: theme.spacing(1),
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
	  const order = comparator(a[0], b[0]);
	  if (order !== 0) return order;
	  return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
	return order === 'desc'
	  ? (a, b) => descendingComparator(a, b, orderBy)
	  : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
	  return -1;
	}
	if (b[orderBy] > a[orderBy]) {
	  return 1;
	}
	return 0;
}

function AssociatedDiagnosesApp() {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [groupPage, setGroupPage] = useState(1);
	const [expanded, setExpanded] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [openGroup, setOpenGroup] = useState(false);
	const [openIcd10, setOpenIcd10] = useState(false);
	const [openAddIcd10, setOpenAddIcd10] = useState(false);
	const [groupName, setGroupName] = useState('');
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('Code');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [tabValue, setTabValue] = useState(0);
	const [icd10Page, setIcd10Page] = useState(1);
	const [icd10CommonPage, setIcd10CommonPage] = useState(1);
	const [icd10FavoritePage, setIcd10FavoritePage] = useState(1);
	const [icd10AllData, setIcd10AllData] = useState([]);
	const [icd10CommonData, setIcd10CommonData] = useState([]);
	const [icd10FavoriteData, setIcd10FavoriteData] = useState([]);
	const [displayIcd10Data, setDisplayIcd10Data] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState([]);

	const handleChangeTabValue = (event, newValue) => {
		setTabValue(newValue);
		switch (newValue) {
			case 0:
				setDisplayIcd10Data(icd10AllData);
				break;
			case 1:
				setDisplayIcd10Data(icd10CommonData);
				break;
			case 2:
				setDisplayIcd10Data(icd10FavoriteData);
				break;
			default:
				break;
		}
	}
  
	const handleRequestSort = (event, property) => {
	  const isAsc = orderBy === property && order === 'asc';
	  setOrder(isAsc ? 'desc' : 'asc');
	  setOrderBy(property);
	};
  
	const handleSelectAllClick = (event) => {
	  if (event.target.checked) {
		const newSelecteds = displayIcd10Data.map((n) => n.name);
		setSelected(newSelecteds);
		return;
	  }
	  setSelected([]);
	};
  
	const handleClick = (event, row) => {
		console.log(row, selected, selectedGroup);

		axios.post(`/associated-diagnoses/register-diagnoses`, {
			AssociatedGroupId: selectedGroup.Id,
			Icd10Id: row.Id
		}).then(response => {
			if(response.success) {
				
			}
		})
		// selectedGroup.icd10.push(row);

		// const selectedIndex = selected.indexOf(name);
		// let newSelected = [];
	
		// if (selectedIndex === -1) {
		// 	newSelected = newSelected.concat(selected, name);
		// } else if (selectedIndex === 0) {
		// 	newSelected = newSelected.concat(selected.slice(1));
		// } else if (selectedIndex === selected.length - 1) {
		// 	newSelected = newSelected.concat(selected.slice(0, -1));
		// } else if (selectedIndex > 0) {
		// 	newSelected = newSelected.concat(
		// 	selected.slice(0, selectedIndex),
		// 	selected.slice(selectedIndex + 1),
		// 	);
		// }
	
		// console.log(newSelected);
		// setSelected(newSelected);
	};
  
	const handleChangePage = (event, newPage) => {
	  setPage(newPage);
	};
  
	const handleChangeRowsPerPage = (event) => {
	  setRowsPerPage(parseInt(event.target.value, 10));
	  setPage(0);
	};
  
	const handleChangeDense = (event) => {
	  setDense(event.target.checked);
	};
  
	const isSelected = (id) => selected.find(item => item.Id == id);
  
	const handleClickOpenGroup = () => {
		setOpenGroup(true);
	};

	const handleCloseGroup = () => {
		setOpenGroup(false);
	};

	const handleClickOpenIcd10 = () => {
		setOpenIcd10(true);
	};

	const handleCloseIcd10 = () => {
		setOpenIcd10(false);
	};

	const handleClickOpenAddIcd10 = (item) => {
		setSelectedGroup(item);
		setOpenAddIcd10(true);
	};

	const handleCloseAddIcd10 = () => {
		setOpenAddIcd10(false);
	};

	const getGroupData = (groupPage) => {
		axios.get(`/associated-diagnoses/filter-diagnoses/?page=${groupPage}`).then(res => {
			setData(res.data.associatedDiagnoses);
		});
	}

	const getIcd10AllData = (icd10Page) => {
		axios.get(`/icd10/filter/?page=${icd10Page}`).then(res => {
			setIcd10AllData(res.data.icd10s);
			setDisplayIcd10Data(res.data.icd10s);
		});
	}

	const getIcd10CommonData = (icd10CommonPage) => {
		axios.get(`/icd10/filter/?page=${icd10CommonPage}&iscommon=${1}`).then(res => {
			setIcd10CommonData(res.data.icd10s);
		});
	}

	const getIcd10FavoriteData = (icd10FavoritePage) => {
		axios.get(`/icd10/filter/?page=${icd10FavoritePage}&isfavorite=${1}`).then(res => {
			setIcd10FavoriteData(res.data.icd10s);
		});
	}

	useEffect(() => {
		getGroupData(1);
		getIcd10AllData(1);
		getIcd10CommonData(1);
		getIcd10FavoriteData(1);
	}, []);

	useEffect(() => {
		function getFilteredArray(arr, _searchText) {
			if (_searchText.length === 0) {
				return arr;
			}
			return FuseUtils.filterArrayByString(arr, _searchText);
		}

		setFilteredData(getFilteredArray(data, searchText));
	}, [data, searchText]);

	const toggleExpansion = panel => (event, _expanded) => {
		setExpanded(_expanded ? panel : false);
	};

	function handleSearch(event) {
		setSearchText(event.target.value);
	}

	const handleChangeGroupName = (event) => {
		setGroupName(event.target.value);
	};

	const createNewGroup = () => {
		axios.post(`/associated-diagnoses/register-group`, {
			GroupName: groupName
		}).then(res => {
			getGroupData(groupPage);
		});
		setOpenGroup(false);
	}

	const deleteGroup = (id) => {
		axios.delete(`/associated-diagnoses/delete-group/${id}`).then(res => {
			getGroupData(groupPage);
		})
	}

	const addItem = () => {
	}

	return (
		<div className="w-full flex flex-col flex-auto">
			<div
				className={clsx(
					classes.header,
					'flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360'
				)}
			>
				<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
					<Typography color="inherit" className="text-36 sm:text-56 font-light">
						Associated Diagnoses
					</Typography>
				</FuseAnimate>

				<FuseAnimate duration={400} delay={600}>
					<Button variant="outlined" color="secondary" onClick={handleClickOpenGroup}>
						Create new Group
					</Button>
				</FuseAnimate>

				<Paper className="flex items-center h-56 w-full max-w-md mt-16 sm:mt-32" elevation={1}>
					<Icon color="action" className="mx-16">
						search
					</Icon>
					<Input
						placeholder="Search in associated diagnoses..."
						className=""
						disableUnderline
						fullWidth
						inputProps={{
							'aria-label': 'Search'
						}}
						value={searchText}
						onChange={handleSearch}
					/>
				</Paper>
			</div>

			<div className="flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32">
				{filteredData.length === 0 && (
					<div className="flex flex-auto items-center justify-center w-full h-full">
						<Typography color="textSecondary" variant="h5">
							There are no associated diagnoses!
						</Typography>
					</div>
				)}
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					{useMemo(() => {
						return filteredData.map(associatedDiagnoses => (
							<Accordion
								classes={{
									root: classes.panel,
									expanded: classes.expanded
								}}
								key={associatedDiagnoses.Id}
								expanded={expanded === associatedDiagnoses.Id}
								onChange={toggleExpansion(associatedDiagnoses.Id)}
								elevation={0}
							>
								<AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
									<div className="flex items-center flex-grow">
										<Icon color="action">help_outline</Icon>
										<Typography className="px-8">{associatedDiagnoses.GroupName}</Typography>
									</div>
                                    <div className="flex items-center">
                                        <Button variant="contained" color="secondary" onClick={()=>handleClickOpenAddIcd10(associatedDiagnoses)}>
                                            Add
                                        </Button>
										<Button
											variant="contained"
											color="secondary"
											className={classes.button}
											startIcon={<DeleteIcon />}
											onClick={()=>deleteGroup(associatedDiagnoses.Id)}
										>
											Delete
										</Button>
                                    </div>
								</AccordionSummary>

								<AccordionDetails className="block mx-60">
									{
										associatedDiagnoses.icd10s.map((item) => 
											<div className="w-full flex items-center" key={item.Id}>
												<Typography className="flex-grow">{item.ShortDesc}</Typography>
												<EditIcon />
												<DeleteIcon />
											</div>
										)
									}
								</AccordionDetails>
							</Accordion>
						));
					}, [filteredData, classes, expanded])}
				</FuseAnimateGroup>
			</div>
			<Dialog open={openGroup} onClose={handleCloseGroup} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add New Group</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To create new associated diagnoses group, please enter the name of group.
					</DialogContentText>
					<FormControl fullWidth>
						<InputLabel htmlFor="component-helper">Group Name</InputLabel>
						<Input
							autoFocus
							id="component-helper"
							value={groupName}
							onChange={handleChangeGroupName}
							aria-describedby="component-helper-text"
							fullWidth
						/>
						<FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseGroup} color="primary">
						Cancel
					</Button>
					<Button onClick={createNewGroup} color="primary">
						Create
					</Button>
				</DialogActions>
			</Dialog>
			{/* <Dialog open={openIcd10} onClose={handleCloseIcd10} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add New Icd10</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To add icd10 items on the group, please select the name of icd10.
					</DialogContentText>
					<FormControl fullWidth>
						<InputLabel htmlFor="component-helper">Icd10 Names</InputLabel>
						<Input
							autoFocus
							id="component-helper"
							value={Icd10Name}
							onChange={handleChangeIcd10Name}
							aria-describedby="component-helper-text"
							fullWidth
						/>
						<FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseIcd10} color="primary">
						Cancel
					</Button>
					<Button onClick={AddIcd10} color="primary">
						Create
					</Button>
				</DialogActions>
			</Dialog> */}
			<Dialog onClose={handleCloseAddIcd10} aria-labelledby="simple-dialog-title" open={openAddIcd10} fullWidth={true} maxWidth="md">
				<Paper className={classes.paper}>
					<EnhancedTableToolbar numSelected={selected.length} />
					<AppBar position="static" color="default">
						<Tabs
							value={tabValue}
							onChange={handleChangeTabValue}
							variant="scrollable"
							scrollButtons="on"
							indicatorColor="primary"
							textColor="primary"
							aria-label="scrollable force tabs example"
						>
							<Tab label="All items" {...a11yProps(0)} />
							<Tab label="Common" {...a11yProps(1)} />
							<Tab label="Favorite" {...a11yProps(2)} />
						</Tabs>
					</AppBar>
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby="tableTitle"
							size={dense ? 'small' : 'medium'}
							aria-label="enhanced table"
						>
							<EnhancedTableHead
								classes={classes}
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={displayIcd10Data.length}
							/>
							<TableBody>
								{stableSort(displayIcd10Data, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
									const isItemSelected = isSelected(row.Id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.Id}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell component="th" id={labelId} scope="row" padding="none">
												{row.Code}
											</TableCell>
											<TableCell align="center">{row.ShortDesc}</TableCell>
											<TableCell align="center">{row.LongDesc}</TableCell>
										</TableRow>
									);
									})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25, 100]}
						component="div"
						count={displayIcd10Data.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</Paper>
				<FormControlLabel
					control={<Switch checked={dense} onChange={handleChangeDense} />}
					label="Dense padding"
				/>
			</Dialog>
		</div>
	);
}

export default AssociatedDiagnosesApp;
