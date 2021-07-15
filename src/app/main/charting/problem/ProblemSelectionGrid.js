import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import _ from '@lodash';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const useStyles = makeStyles((theme)=>({
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
      height: "fit-content"
    },
    cursor: {
      cursor: "pointer"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    removeUnderline: {
		textDecoration: "none !important"
	}
}));

function ProblemSelectionGrid(props) {

    const classes = useStyles();

    const [problems, setProblems] = useState([])

    // const getProblems = async() => {
    //     return await(useSelector(({problems}) => problems.problems.problems));
    // }

    const problemLists = useSelector(({hpi}) => hpi.problems.problems);

    console.log("problemLists", problemLists)
    const dispatch = useDispatch();

    useEffect(() => {
        setProblems(problemLists);
    }, [problemLists])

    const handleChecked = (index, where, value) => {
        let temp = JSON.parse(JSON.stringify(problems));

        temp[index][where] = value;
        
        setProblems(temp);
    }

    const handleSave = () => {
        dispatch(Actions.setProblems(problems))
    }

    return (
        <div className={classes.root}>
            <AccordionDetails>
                <Grid container spacing={5} style={{padding:"10px"}}>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontWeight:"bold"}} rowSpan={2}>Problem</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} colSpan={2} align="center">CC</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} rowSpan={2} align="center">HPI</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} rowSpan={2} align="center">PMH</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} colSpan={2} align="center">Assessment</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{fontWeight:"bold"}} align="center">Chronic</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} align="center">Acute</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} align="center">Primary</TableCell>
                                    <TableCell style={{fontWeight:"bold"}} align="center">Second</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    problems && problems.length > 0 ? problems.map((problem, index) => <TableRow key={index}>
                                            <TableCell style={{color:"light-blue"}}>
                                                {problem.item}
                                            </TableCell>
                                            <TableCell align="center">
                                                1.
                                                <FormControlLabel
                                                    value="start"
                                                    control={
                                                        <Checkbox 
                                                            color="primary"
                                                            checked={problem.cc==="chronic"?true:false} 
                                                            onClick={()=>handleChecked(index, "cc", "chronic")}
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                2.
                                                <FormControlLabel
                                                    value="start"
                                                    control={
                                                        <Checkbox
                                                            color="primary" 
                                                            checked={problem.cc==="acute"?true:false}
                                                            onClick={()=>handleChecked(index, "cc", "acute")}
                                                        />}
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <FormControlLabel
                                                    style={{marginLeft:"0"}}
                                                    value="start"
                                                    control={
                                                        <Checkbox 
                                                            color="primary" 
                                                            checked={problem.hpi}
                                                            onClick={(e)=>handleChecked(index, "hpi", e.target.checked)} 
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <FormControlLabel
                                                    style={{marginLeft:"0"}}
                                                    value="start"
                                                    control={
                                                        <Checkbox 
                                                            color="primary" 
                                                            checked={problem.pmh} 
                                                            onClick={(e)=>handleChecked(index, "pmh", e.target.checked)}
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                P
                                                <FormControlLabel
                                                    value="start"
                                                    control={
                                                        <Checkbox 
                                                            color="primary" 
                                                            checked={problem.ass==="p"?true:false}
                                                            onClick={()=>handleChecked(index, "ass", "p")}
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                S
                                                <FormControlLabel
                                                    value="start"
                                                    control={
                                                        <Checkbox 
                                                            color="primary" 
                                                            checked={problem.ass==="s"?true:false} 
                                                            onClick={()=>handleChecked(index, "ass", "s")}
                                                        />
                                                    }
                                                    labelPlacement="start"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ): null
                                }
                            </TableBody>
                        </Table>
                        <Link to='/charting' className={classes.removeUnderline}>
                            <Button
                                style={{margin:"10px", float:"right"}}
                                className="whitespace-no-wrap normal-case"
                                variant="contained"
                                color="secondary"
                                //   onClick={(e) => handleClick(e)}
                                >
                                Cancel
                            </Button>
                        </Link>

                        <Link to='/charting' className={classes.removeUnderline}>
                            <Button
                                style={{margin:"10px", float:"right"}}
                                className="whitespace-no-wrap normal-case"
                                variant="contained"
                                color="secondary"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </Link>
                    </TableContainer>
                </Grid>
            </AccordionDetails>
        </div>
    )
}

export default withReducer('hpi', reducer)(ProblemSelectionGrid);