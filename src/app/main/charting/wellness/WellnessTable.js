import FuseScrollbars from '@fuse/core/FuseScrollbars';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';

function WellnessTable(props) {
	const columns = [
		{ title: 'Screen', field: 'screen' },
		{ title: 'Guidelines', field: 'medicare', initialEditValue: 'initial edit value' },
		{ title: 'Date', field: 'date', type: 'date' },
		{
			title: 'Note',
			field: 'note',
			lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
		},
	];

	const [data, setData] = useState([
		{
			screen : "Colesterol",
			medicare : "FLP q 5 years",
			date : "",
			note : ""
		},
		{
			screen : "HTN",
			medicare : "",
			date : "",
			note : ""
		},
		{
			screen : "Tob abuse",
			medicare : "Counseling",
			date : "",
			note : ""
		}
	]);

	const cancerColumns = [
		{ title: 'Screen', field: 'screen' },
		{ title: 'Guidelines', field: 'medicare', initialEditValue: 'initial edit value' },
		{ title: 'Date', field: 'date', type: 'date' },
		{
			title: 'Note',
			field: 'note',
			lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
		},
	];
	
	const [cancerData, setCancerData] = useState([
		{
			screen : "Colorectal",
			medicare : `• High risk – no minimum age
			o	Colonoscopy or BE q2y
			o	FOBT annually
		•	Average risk – age 50 and up
			o	Colonoscopy or BE q10y
			o	FOBT annually
			`,
			date : "",
			note : ""
		},
		{
			screen : "Skin",
			medicare : "",
			date : "",
			note : ""
		},
		{
			screen : "Breast",
			medicare : "•	Q1y mammography ",
			date : "",
			note : ""
		}
	]);
	
	const immuniColumns = [
		{ title: 'Screen', field: 'screen' },
		{ title: 'Guidelines', field: 'medicare', initialEditValue: 'initial edit value' },
		{ title: 'Date', field: 'date', type: 'date' },
		{
			title: 'Note',
			field: 'note',
			lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
		},
	];
	
	const [immuniData, setImmuniData] = useState([
		{
			screen : "Pneumococcal",
			medicare : "FLP q 5 years",
			date : "",
			note : ""
		},
		{
			screen : "Influenza ",
			medicare : "Q1y during flu season (Oct-Feb)",
			date : "",
			note : ""
		},
		{
			screen : "Hep B",
			medicare : "Only if at risk",
			date : "",
			note : ""
		}
	]);

	const otherColumns = [
		{ title: 'Screen', field: 'screen' },
		{ title: 'Guidelines', field: 'medicare', initialEditValue: 'initial edit value' },
		{ title: 'Date', field: 'date', type: 'date' },
		{
			title: 'Note',
			field: 'note',
			lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
		},
	];
	
	const [otherData, setOtherData] = useState([
		{
			screen : "Osteoporosis",
			medicare : "•	DEXA q2y in those at risk",
			date : "",
			note : ""
		},
		{
			screen : "Diabetes ",
			medicare : "•	BS q6 mo in pre-diabetes & q1y in all",
			date : "",
			note : ""
		},
		{
			screen : "Glaucoma",
			medicare : "•	Q1y in high risk groups (DM, +FH, AA w/ age >50, Hispanics age >65)",
			date : "",
			note : ""
		}
	]);

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<MaterialTable
					title="CARDIOVASCULAR DISEASE PREVENTION"
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
				<MaterialTable
					title="CANCER PREVENTION"
					columns={cancerColumns}
					data={cancerData}
					style={{marginBottom:"30px",borderTop:"1px solid #a4a4a4"}}
					editable={{
                    	onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							setCancerData([...data, newData]);
							
							resolve();
							}, 1000)
						}),
						onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataUpdate = [...cancerData];
							const index = oldData.tableData.id;
							dataUpdate[index] = newData;
							setCancerData([...dataUpdate]);

							resolve();
							}, 1000)
						}),
						onRowDelete: oldData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataDelete = [...cancerData];
							const index = oldData.tableData.id;
							dataDelete.splice(index, 1);
							setCancerData([...dataDelete]);
							
							resolve()
							}, 1000)
						}),
					}}
                />
				<MaterialTable
					title="IMMUNIZATIONS"
					columns={immuniColumns}
					data={immuniData}
					style={{marginBottom:"30px",borderTop:"1px solid #a4a4a4"}}
					editable={{
						onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							setImmuniData([...data, newData]);
							
							resolve();
							}, 1000)
						}),
						onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataUpdate = [...immuniData];
							const index = oldData.tableData.id;
							dataUpdate[index] = newData;
							setImmuniData([...dataUpdate]);

							resolve();
							}, 1000)
						}),
						onRowDelete: oldData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataDelete = [...immuniData];
							const index = oldData.tableData.id;
							dataDelete.splice(index, 1);
							setImmuniData([...dataDelete]);
							
							resolve()
							}, 1000)
						}),
					}}
                />
				<MaterialTable
					title="OTHER"
					columns={otherColumns}
					data={otherData}
					style={{marginBottom:"30px",borderTop:"1px solid #a4a4a4"}}
					editable={{
						onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							setOtherData([...data, newData]);
							
							resolve();
							}, 1000)
						}),
						onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataUpdate = [...otherData];
							const index = oldData.tableData.id;
							dataUpdate[index] = newData;
							setOtherData([...dataUpdate]);

							resolve();
							}, 1000)
						}),
						onRowDelete: oldData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
							const dataDelete = [...otherData];
							const index = oldData.tableData.id;
							dataDelete.splice(index, 1);
							setOtherData([...dataDelete]);
							
							resolve()
							}, 1000)
						}),
					}}
                />
			</FuseScrollbars>
		</div>
	);
}

export default withRouter(WellnessTable);