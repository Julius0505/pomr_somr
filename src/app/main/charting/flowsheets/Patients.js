import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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

export default function Patients(props) {

    const classes = useStyles();

    return (
        <div style={{width:'98%'}}>
            <div className="md:flex" style={{margin:"10px 30px 0 30px"}}>
                    <div className="md:w-1/6 mr-12">
                        <Link to='/charting/notes'>  
                            <img style={{width:'200px'}} src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase" />
                        </Link>
                    </div>
                    <div className="md:1-2/6 mt-4 md:mt-0 md:ml-12">
                        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold mt-8">AMENORRHEA, EMILY</div>
                        <div className="mt-16">
                        <span>12/23/1984,  31 y/o female</span>
                        </div>
                        <div className="mt-16">
                        <span>John Jones (father) - 706 678 2478</span>
                        </div>
                    </div>
                </div>
            <TableContainer component={Paper} className={classes.fit}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "300px", textAlign: "center"}}>Test Result/Observation</TableCell>
                            <TableCell align="left">02/16/2006</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "300px"}}>Lab Tests</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{width: "160px"}}>Cholesterol</TableCell>
                            <TableCell style={{width: "140px"}}>&lt; 200 mg/dL</TableCell>
                            <TableCell align="left">220H</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width: "160px"}}>Hemoglobin</TableCell>
                            <TableCell style={{width: "140px"}}>5 - 7.5 %</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
