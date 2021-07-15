import React, { /*useEffect,*/ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

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
    }    
}));

export default function Patients(props) {

    // const [templateFlag, setTemplateFlag] = useState(false);
    const classes = useStyles();
    // let flag = useSelector((state) => state.templateApp.templateFlag);
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    // useEffect(()=>{
    //     setTemplateFlag(flag)
    // }, [flag])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.root}>
            {/* {
                templateFlag ?  */}
                    <div>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>Chief Complaint</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Hypertension"
                                />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>History of Present Illness</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Review of Systems</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={5} style={{padding:"10px"}}>
                                    <TableContainer component={Paper}>
                                        <Table size="small" aria-label="a dense table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell style={{color:"light-blue"}}>
                                                        <Icon className="text-15" style={{position:"relative", top:"3px"}}>
                                                            add_circle_outline
                                                        </Icon>
                                                        Constitutional
                                                    </TableCell>
                                                    <TableCell align="left">Navigate for malaise and change in appetite</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell style={{color:"light-blue"}}>
                                                        <Icon className="text-15" style={{position:"relative", top:"3px"}}>
                                                            add_circle_outline
                                                        </Icon>
                                                        Eyes
                                                    </TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell style={{color:"light-blue"}}>
                                                        <Icon className="text-15" style={{position:"relative", top:"3px"}}>
                                                            add_circle_outline
                                                        </Icon>
                                                        HENT
                                                    </TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell style={{color:"light-blue"}}>
                                                        <Icon className="text-15" style={{position:"relative", top:"3px"}}>
                                                            add_circle_outline
                                                        </Icon>
                                                        Breast
                                                    </TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell style={{color:"light-blue"}}>
                                                        <Icon className="text-15" style={{position:"relative", top:"3px"}}>
                                                            add_circle_outline
                                                        </Icon>
                                                        Cardiovascular
                                                    </TableCell>
                                                    <TableCell align="left">Navigate for chest pain, dyspnea on exertion, and syncope</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Physical Exam</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Test Results</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Assessment</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Plan</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>E &amp; M coding</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                {/* : null
            } */}
        </div>
    )
}
