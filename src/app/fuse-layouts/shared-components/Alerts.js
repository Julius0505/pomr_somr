import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import * as authActions from 'app/auth/store/actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { purple, lightGreen, lightBlue } from '@material-ui/core/colors';

const chatIcon = lightBlue[500];
const emailIcon = lightGreen[500];
const taskIcon = purple[500];

const alertColors = [
	{ chat: lightBlue[500] },
	{ email: lightGreen[500] },
	{ check_box: purple[500] },
]


const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#aaa",
		color: theme.palette.common.black,
	},
	body: {
		fontSize: 14,
		cursor: "pointer"
	},

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const alerts = [
	{
		id: '5725a6801146cce777df2a08',
		priority: 1,
		date: '10/12/1965',
		name: 'James Smith',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'James Smith'
	},
	{
		id: '5725a6808a178bfd034d6ecf',
		priority: 2,
		date: '10/12/1965',
		name: 'Robert Johnson',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Robert Johnson'
	},
	{
		id: '5725a680653c265f5c79b5a9',
		priority: 1,
		date: '10/12/1965',
		name: 'David Williams',
		type: 'assignment',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'David Williams'
	},
	{
		id: '5725a680bbcec3cc32a8488a',
		priority: 3,
		date: '10/12/1965',
		name: 'Charles Jones',
		type: 'assignment',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Charles Jones'
	},
	{
		id: '5725a6803d87f1b77e17b62b',
		priority: 2,
		date: '10/12/1965',
		name: 'JosephEnawn',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'JosephEnawn'
	},
	{
		id: '5725a680e87cb319bd9bd673',
		priority: 4,
		date: '10/12/1965',
		name: 'Mary Davis',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Mary Davis'
	},
	{
		id: '5725a6802d10e277a0f35775',
		priority: 2,
		date: '10/12/1965',
		name: 'Jesika',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Jesika'
	},
	{
		id: '5725a680aef1e5cf26dd3d1f',
		priority: 1,
		date: '10/12/1965',
		name: 'Jullien',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Jullien'
	},
	{
		id: '5725a680cd7efa56a45aea5d',
		priority: 1,
		date: '10/12/1965',
		name: 'Kassi',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Kassi'
	},
	{
		id: '5725a680fb65c91a82cb35e2',
		priority: 1,
		date: '10/12/1965',
		name: 'Alexandra',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Alexandra'
	},
];



const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	},
	table: {
		width: 700,
	},
	chatIcon: {
		color: theme.palette.common.black
	},
	emailIcon: {
		color: lightGreen[500]
	},
	taskIcon: {
		color: purple[500]
	},
	allAlertIcon: {
		color: "red",
		// "&.active": {
			animationName: '$blinker',
			animationDuration: '2s',
			animationTimingFunction: 'linear',
			animationIterationCount: 'infinite',
		// }
	},
	badge: {
		bacground: "red"
	},
	'@keyframes blinker': {
		from: { opacity: 1 },
		to: { opacity: 0 }
	},
}));

function Alerts(props) {
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	const [totalAlert, setTotalAlert] = useState(null);

	const classes = useStyles(props);

	const totalAlertClick = event => {
		setTotalAlert(event.currentTarget);
	};

	const totalAlertClose = () => {
		setTotalAlert(null);
		// dispatch(authActions.setSetting())
	};

	const setSetting = () => {
		setTotalAlert(null);
		// dispatch(authActions.setSetting())
	}



	const handleAlertClick = (type) => {
		props.history.push(`/alerts/${type}`)
	}

	return (
		<>
			<Tooltip title="Chat" placement="bottom">
				<IconButton className="w-64 h-64" onClick={() => handleAlertClick('chat')} >
					<Badge badgeContent={(alerts.filter(alert => alert.type == "chat")).length} color="primary" >
						<Icon>chat</Icon>
					</Badge>
				</IconButton>
			</Tooltip>

			<Tooltip title="Email" placement="bottom">
				<IconButton className="w-64 h-64" onClick={() => handleAlertClick('mail')}>
					<Badge badgeContent={(alerts.filter(alert => alert.type == "mail")).length} color="secondary" >
						<Icon>email</Icon>
					</Badge>
				</IconButton>
			</Tooltip>

			<Tooltip title="Task" placement="bottom">
				<IconButton className="w-64 h-64" onClick={() => handleAlertClick('todo')}>
					<Badge badgeContent={(alerts.filter(alert => alert.type == "assignment")).length} color="error" >
						<Icon>assignment</Icon>
					</Badge>
				</IconButton>
			</Tooltip>

			<div className={classes.separator} />

			<IconButton className="w-64 h-64" onClick={() => handleAlertClick('all')}>
				<Badge badgeContent={10} color="error" >
					<Icon className={classes.allAlertIcon}>notifications_active</Icon>
				</Badge>
			</IconButton>

			<Popover
				open={Boolean(totalAlert)}
				anchorEl={totalAlert}
				onClose={totalAlertClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{/* <MenuItem component={Link} to="/login" role="button">
					<ListItemText primary="1" />
					<ListItemText primary="10/12/1965" />
					<ListItemText primary="James Smith" />
					<ListItemIcon className="min-w-40">
						<Icon color="error">chat</Icon>
					</ListItemIcon>
					<ListItemText primary="Lorem impsum dolars sit amet" />
					<ListItemText primary="Jame Smith" />
				</MenuItem>
				<Divider />
				<MenuItem component={Link} to="/register" role="button">
					<ListItemIcon className="min-w-40">
						<Icon>person_add</Icon>
					</ListItemIcon>
					<ListItemText primary="Register" />
				</MenuItem>
				<MenuItem component={Link} to="#" role="button" onClick={setSetting}>
					<ListItemIcon className="min-w-40">
						<Icon>settings</Icon>
					</ListItemIcon>
					<ListItemText primary="Setting" />
				</MenuItem> */}
				{/* <TableContainer component={Paper}>
					<Table size="small" className={classes.table} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>PRIORITY</StyledTableCell>
								<StyledTableCell align="center">DATE</StyledTableCell>
								<StyledTableCell align="center">FROM</StyledTableCell>
								<StyledTableCell align="center"></StyledTableCell>
								<StyledTableCell align="center">SUBJECT</StyledTableCell>
								<StyledTableCell align="center" width="20%">PATIENT</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{alerts.map((row) => (
								<StyledTableRow hover key={row.name} onClick={() => handleRowClick(row.type)}  style={{ color: alertColors[row.type]}}>
									<StyledTableCell align="center">
										{row.priority}
									</StyledTableCell>
									<StyledTableCell align="center">{row.date}</StyledTableCell>
									<StyledTableCell align="center">{row.name}</StyledTableCell>
									<StyledTableCell align="center"><Icon>{row.type}</Icon></StyledTableCell>
									<StyledTableCell align="center">{row.subject}</StyledTableCell>
									<StyledTableCell align="center">{row.patient}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer> */}
			</Popover>
		</>
	);
}

export default Alerts;
