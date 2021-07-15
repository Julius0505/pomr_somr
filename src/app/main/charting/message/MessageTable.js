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
// import { rows } from './DummyData';

const columns = [
	{ id: 'priority', label: 'PRIORITY', minWidth: 170, align: "center" },
	{ id: 'date', label: 'Date', minWidth: 100 },
	{
	  id: 'from',
	  label: 'FROM',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'icon',
	  label: '',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'subject',
	  label: 'SUBJECT',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toFixed(2),
	},
	{
	  id: 'patient',
	  label: 'PATIENT',
	  minWidth: 170,
	  align: "center",
	  format: (value) => value.toFixed(2),
	},
  ];
  
//   function createData(name, code, population, size) {
// 	const density = population / size;
// 	return { name, code, population, size, density };
//   }
  
  const rows = [
	{
		id: 1,
		priority: 1,
		date: '10/12/1695',
		from: "James Smith",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 2,
		priority: 2,
		date: '10/1/1685',
		from: "Robert Johnson",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "Robert Johnson"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 1,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 3,
		priority: 1,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 1,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "Mary Davis",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "Mary Davis",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "James Smith",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "Mary Davis",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "Mary Davis"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "Charies Jones",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "Charies Jones"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "Charies Jones"
	},
	{
		id: 3,
		priority: 3,
		date: '3/6/1909',
		from: "David Willson",
		icon: "videocam",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Willson"
	},
	{
		id: 1,
		priority: 3,
		date: '10/12/1695',
		from: "David Williams",
		icon: "airport_shuttle",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "James Smith"
	},
	{
		id: 1,
		priority: 2,
		date: '10/12/1695',
		from: "James Smith",
		icon: "email",
		subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		patient: "David Williams"
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

const MessageTable = (props) => {
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
						let color = "black";
						if(row.priority === 1)color = 'red';
						if(row.priority === 2)color = 'green';
						return (
							<TableRow hover role="checkbox" tabIndex={-1} key={index}>
								{columns.map((column) => {
									let value = row[column.id];
									console.log(column, value)
									return (
										column.id !== "icon" ?
											<TableCell key={column.id} align={column.align} style={{color:color}}>
												{column.format && typeof value === 'number' ? column.format(value) : value}
											</TableCell>
										:
											<TableCell key={column.id} align={column.align} style={{color:color}}>
												<Icon>{value}</Icon>
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

export default MessageTable;