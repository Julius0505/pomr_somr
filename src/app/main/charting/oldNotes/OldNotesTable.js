import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import {
	// createMuiTheme,
	// MuiThemeProvider,
	withStyles
  } from "@material-ui/core/styles";
// import { rows } from './DummyData';

const BlueOnGreenTooltip = withStyles({
	tooltip: {
	  color: "lightblue",
	  backgroundColor: "green",
	  fontSize: "large"
	}
})(Tooltip);

const tooltipTitle = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ea ab esse sapiente. Iste nemo nam sit explicabo nulla beatae tempore incidunt provident adipisci nostrum? Atque iure quaerat dolores impedit.";

const columns = [
	{ id: 'date', label: 'Date', minWidth: 100, align: "center" },
	{
	  id: 'docType',
	  label: 'DocType',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'author',
	  label: 'Author',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'title',
	  label: 'Title',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'icon',
		label: 'Preview',
		minWidth: 170,
		align: "center",
		format: (value) => value.toLocaleString('en-US'),
	},
];
  
	// function createData(name, code, population, size) {
	// 	const density = population / size;
	// 	return { name, code, population, size, density };
	// }
  
  	const rows = [
		{
			id: 1,
			date: "04/16/2008",
			docType: "H & P Note",
			author: "Kirk Doson, MD",
			title: "",
			icon: "visibility"
		},
		{
			id: 1,
			date: "04/16/2008",
			docType: "H & P Note",
			author: "Kirk Doson, MD",
			title: "",
			icon: "visibility"
		}
	];
  
	const useStyles = makeStyles({
		root: {
		width: '100%',
		},
		container: {
		maxHeight: '',
		},
	});

const OldNotesTable = (props) => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
				<TableHead>
					<TableRow>
					{columns.map((column, index) => (
						<TableCell
						key={index}
						align={column.align}
						style={{ minWidth: column.minWidth }}
						>
						{column.label}
						</TableCell>
					))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
						return (
							<TableRow hover role="checkbox" tabIndex={-1} key={index}>
								{columns.map((column) => {
									let value = row[column.id];
									return (
										column.id !== "icon" ?
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? column.format(value) : value}
											</TableCell>
										:
											<TableCell key={column.id} align={column.align}>
												<BlueOnGreenTooltip arrow={true} title={tooltipTitle}>
													<Icon>{value}</Icon>
												</BlueOnGreenTooltip>
											</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
			</Paper>
	);
}

export default OldNotesTable;