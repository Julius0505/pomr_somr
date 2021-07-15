import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    '& .MuiAccordionDetails-root': {
      display: "block"
    },
    '& .MuiTableRow-root': {
      height: "fit-content !important"
    },
    '& .MTableToolbar-searchField-511': {
      display: "none"
    }
  },
}));

export default function FH(props){

  const classes = useStyles();
  const columns = [
    { title: 'Relation', field: 'relation', 
      lookup: { 
        0: 'Grand Father', 
        1: 'Grand Mother', 
        2: 'Father', 
        3: 'Mother',
        4: 'Sister',
        5: 'Wife',
        6: 'Brother',
        7: 'Daughter',
        8: 'Son'
      } 
    },
		{ title: 'Name', field: 'name', initialEditValue: 'initial edit value' },
		{ title: 'Living Status', field: 'living', lookup: { 0: 'Alive', 1: 'Decreased', 2: 'Unknown' }},
		{ title: 'Cause of Death', field: 'cod', detailPanelType: 'multiple', lookup: { 0: 'Cholera', 1: 'Anxiety', 2: 'Tremor' } },
		{ title: 'Other Illness', field: 'other', detailPanelType: 'multiple', lookup: { 0: 'Cholera', 1: 'Anxiety', 2: 'Tremor' } },
		{ title: 'Age at Onset', field: 'aao', type: 'numeric' },
		{ title: 'Notes', field: 'notes' },
	];

	const [data, setData] = useState([
		{
      relation : 2,
      name: "Peggy",
			living : 0,
			cod : '',
			other : 0,
			aao : 60,
			notes : "",
		}
	]);

  return(
    <div className={classes.root} id={props.id}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Family History</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button variant="outlined" className="mr-16">L</Button>
              <Button variant="outlined" className="mr-16">Tree</Button>
              <AddIcon/>
            </div>


            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            title=""
            columns={columns}
            data={data}
            style={{marginBottom:"30px",borderTop:"1px solid #a4a4a4"}}
            editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
              }),
            }}
            options={{
              actionsColumnIndex: -1
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}