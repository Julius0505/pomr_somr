import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Patients from './Patients';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';

const useStyles = makeStyles({
  table: {
    minWidth: 300
  },
  root: {
    flexGrow: 1,
    width: "100%"
  },
  paper: {
    padding: "",
    textAlign: 'center'
  },
  fit: {
    height: "fit-content",
    margin:"10px"
  },
  cursor: {
    cursor: "pointer"
  }
});

function createData(id, name, description, lastModified) {
  return { id, name, description, lastModified };
}

const patientsArray = [
  [
    {
      name : "Beaty, Thomas",
      birth : "03/05/1934"
    }
  ],
  [
    {
      name : "Butler, Henry",
      birth : "03/04/1934"
    },
    {
      name : "Hooper, Jone D",
      birth : "05/05/1944"
    },
    {
      name : "Berry, Florence",
      birth : "03/05/1934"
    },
    {
      name : "Mathews, Frances",
      birth : "03/05/1934"
    }
  ]
]

const rows = [
  createData('chf','CHF', 'Follows EF, Labs, Vitals', '03/23/2005'),
  createData('diabetes', 'Diabetes', 'Reviews Pertinent Rist Factors', '03/23/2005')
];

const FlowsheetList = () => {
  const [patients, setPatients] = useState([
    {
      name : "Beaty, Thomas",
      birth : "03/05/1934"
    }
  ]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const header = useSelector((state) => state.flowsheet.header);

  const getPatients = (index) => {
    setPatients(patientsArray[index])
  }

  return (
    <div style={{width:"100%"}}>
      {
        header.subFlag ? 
        <Patients />
        :
        <div style={{width:'98%'}}>
        <Grid container spacing={5} className={classes.fit}>
          <Grid container item md={8} sm={12} spacing={3}>
            <TableContainer component={Paper} className={classes.fit}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Last Modified</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}  onClick={()=>{getPatients(index)}} className={classes.cursor}>
                      <TableCell component="th" scope="row">
                          {row.name}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">{row.lastModified}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid container item md={4} sm={8} spacing={3}>
              <TableContainer component={Paper} className={classes.fit}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">DOB</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patients.map((row, index) => (
                      <TableRow key={index}  onClick={()=>{dispatch(Actions.setSubFlag())}} className={classes.cursor}>
                        <TableCell component="th" scope="row">
                          <Link to="#">
                            {row.name}
                          </Link>
                        </TableCell>
                        <TableCell align="left">{row.birth}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
        </Grid>
        </div>
      }
    </div>
  );
}

export default withReducer('flowsheet', reducer)(FlowsheetList);