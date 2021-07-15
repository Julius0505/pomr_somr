import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    '& .MuiGrid-spacing-xs-5': {
      margin: "0",
      width: "100%"
    },
    '& .MuiGrid-spacing-xs-3': {
      margin: "0",
      width: "100%"
    },
    '& .MuiList-root': {
      width: "100%"
    }
  },
  listItem: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingLeft: 24,
		paddingRight: 12,
		'&.active': {
			backgroundColor: theme.palette.secondary.main,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			fontSize: 16,
			width: 16,
			height: 16,
			marginRight: 16
		}
	},
}));


const source = [
  {
    id: "list1",
    title: "Show All",
    open: false
  },
  {
    id: "list2",
    title: "Blood and Blood Diseases",
    open: false
  },
  {
    id: "list3",
    title: "Kidney Diseases",
    open: false
  },
  {
    id: "list4",
    title: "Vitamin",
    open: false
  },
  {
    id: "list5",
    title: "Chemistry",
    open: false
  },
  {
    id: "list6",
    title: "Drug Monitoring",
    open: false
  },
  {
    id: "list7",
    title: "Test labe test category",
    open: false
  }
];

export default function DD(props){

  const classes = useStyles();

  return(
    <div className={classes.root} id={props.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Diagnostic Data</Typography>
            </div>

            <div className="w-2/6 text-center">
              <BusinessCenterIcon />
            </div>


            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col w-full items-left">
						<Grid container spacing={5}>
							<Grid container item md={3} sm={12} spacing={3}>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}
                >
                  {
                    source.map((item, index) => (
                        <ListItem
                          key={item.id}
                          button
                          className={classes.listItem}
                        >
                          <ListItemIcon>
                            <FilterFramesIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItem>
                    ))
                  }
                </List>
							</Grid>
							<Grid container item md={9} sm={12} spacing={3}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                        <TableCell className="font-bold" colSpan={2}>Date</TableCell>
                        <TableCell className="font-bold" align="center">	09.18.20</TableCell>
                        <TableCell className="font-bold" align="center">	09.19.20</TableCell>
                        <TableCell className="font-bold" align="center">	09.20.20</TableCell>
                        <TableCell className="font-bold" align="center">	09.21.20</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold" rowSpan={2}>Blood and Blood Diseases</TableCell>
                      <TableCell className="font-bold" align="center">Lipid panel</TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold" align="center">Hepatic function panel</TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                      <TableCell className="font-bold" align="center">
                        <TextField/>
                      </TableCell>
                    </TableRow>
                      {/* {
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
                      } */}
                  </TableBody>
              </Table>
							</Grid>
						</Grid>
					</div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}