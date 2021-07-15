import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';

const useStyles = makeStyles({
	typeIcon: {
		'&.chat:before': {
			content: "'chat'",
			color: '#FFB300'
		},
		'&.mail:before': {
			content: "'mail'",
			color: '#1565C0'
		},
		'&.assignment:before': {
			content: "'assignment'",
			color: '#4CAF50'
		}
	}
});

const alerts = [
	{
		id: '5725a6801146cce777df2a08',
		date: '10/12/1965',
		name: 'James Smith',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'James Smith'
	},
	{
		important: true,
		id: '5725a6808a178bfd034d6ecf',
		date: '10/12/1965',
		name: 'Robert Johnson',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Robert Johnson'
	},
	{
		id: '5725a680653c265f5c79b5a9',
		date: '10/12/1965',
		name: 'David Williams',
		type: 'assignment',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'David Williams'
	},
	{
		id: '5725a680bbcec3cc32a8488a',
		date: '10/12/1965',
		name: 'Charles Jones',
		type: 'assignment',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Charles Jones'
	},
	{
		id: '5725a6803d87f1b77e17b62b',
		date: '10/12/1965',
		name: 'JosephEnawn',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'JosephEnawn'
	},
	{
		important: true,
		id: '5725a680e87cb319bd9bd673',
		date: '10/12/1965',
		name: 'Mary Davis',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Mary Davis'
	},
	{
		id: '5725a6802d10e277a0f35775',
		date: '10/12/1965',
		name: 'Jesika',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Jesika'
	},
	{
		id: '5725a680aef1e5cf26dd3d1f',
		date: '10/12/1965',
		name: 'Jullien',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Jullien'
	},
	{
		id: '5725a680cd7efa56a45aea5d',
		date: '10/12/1965',
		name: 'Kassi',
		type: 'chat',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Kassi'
	},
	{
		id: '5725a680fb65c91a82cb35e2',
		date: '10/12/1965',
		name: 'Alexandra',
		type: 'mail',
		subject: 'Lorem ipsum dolor sit amet.',
		patient: 'Alexandra'
	},
];

function AlertList(props) {
	const dispatch = useDispatch();
	const files = useSelector(({ fileManagerApp }) => fileManagerApp.files);
	const selectedItemId = useSelector(({ fileManagerApp }) => fileManagerApp.selectedItemId);

	const classes = useStyles();

	const handleRowClick = type => {
		props.history.push(`/alerts/${type}`)
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center">Date</TableCell>
						<TableCell align="center">From</TableCell>
						<TableCell align="center" className="max-w-64 w-64 p-0 text-center"> </TableCell>
						<TableCell align="center">Subject</TableCell>
						<TableCell align="center">Patient</TableCell>
						{/* <TableCell className="hidden sm:table-cell">Modified</TableCell> */}
					</TableRow>
				</TableHead>

				<TableBody>
					{alerts.map((row) => {
						return (
							<TableRow
								key={row.name}
								hover
								onClick={() => handleRowClick(row.type)}
								// selected={n.id === selectedItemId}
								className={clsx(row.important && "bg-red", "cursor-pointer")}
							>
								<TableCell align="center">{row.date}</TableCell>
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center" className="max-w-64 w-64 p-0 text-center">
									<Icon className={clsx(classes.typeIcon, row.type)} />
								</TableCell>
								<TableCell align="center">{row.subject}</TableCell>
								<TableCell align="center">{row.patient}</TableCell>
								{/* <TableCell className="hidden sm:table-cell">{n.modified}</TableCell> */}
								{/* <Hidden lgUp>
									<TableCell>
										<IconButton
											onClick={ev => props.pageLayout.current.toggleRightSidebar()}
											aria-label="open right sidebar"
										>
											<Icon>info</Icon>
										</IconButton>
									</TableCell>
								</Hidden> */}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</FuseAnimate>
	);
}

export default AlertList;
