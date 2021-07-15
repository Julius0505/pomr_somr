import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PatientBanner from './PatientBanner';
import ButtonGroups from './ButtonGroups';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import clsx from 'clsx';

// axios.get(`http://nodeserver.mdt.washim.net/api/patient/get`, {})
//     .then(response => {
//       // setPatients(response.data);
//       // console.log(response.data)
//     })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabPanelBox: {
      padding: 0
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="pt-8 bg-white">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PatientToolbar(){

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [patients, setPatients] = useState([]);
  const dispatch = useDispatch();
  const { selectedPerson, isFixed, isHidden } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)
  const {foldedOpen} = useSelector(({ fuse }) => fuse.navbar)

  const getAxios = [
    {
      AccountNumber: "ABBPEG0001",
      AddressLine1: "431 Edgar Circle",
      AddressLine2: "",
      City: "Thomson",
      Created: "2016-10-15 10:29:18",
      CreatedBy: 0,
      DateOfBirth: "03/27/1963",
      DOLE: "01/21/2021",
      FirstName: "Peggy",
      HomeNumber: "",
      Id: 2,
      IsActive: 1,
      LastName: "Abbott",
      MiddleName: "",
      MobileNumber: "706-323-7867(M)",
      Emergency: "706-546-9807(F)",
      Modified: "2016-10-15 10:29:18",
      ModifiedBy: 0,
      PostCode: "30824",
      RaceId: 1,
      SN: "",
      Sex: "F",
      State: "GA",
      WorkNumber: "",
      consultant: 0,
      email: "",
      Location: "Home",
      primaryPhysicianId: 4194243,
      profile: "",
      racename: "American Indian or Alaska Native",
      Demo: 'WM'
    },
    {
      AccountNumber: "ANDJOS0002",
      AddressLine1: "P.O. BOX 957",
      AddressLine2: "",
      City: "Washington",
      Created: "0000-00-00 00:00:00",
      CreatedBy: 0,
      DateOfBirth: "03/05/1956",
      DOLE: "02/19/2021",
      FirstName: "Joseph",
      HomeNumber: "",
      Id: 82,
      IsActive: 1,
      LastName: "Anderson",
      MiddleName: "",
      MobileNumber: "706-318-0460(M)",
      Emergency: "706-678-2344(F)",
      Modified: "2017-05-19 14:44:55",
      ModifiedBy: 1,
      PostCode: "30673",
      RaceId: 3,
      SN: "255-30-0565",
      Sex: "M",
      State: "GA",
      WorkNumber: "",
      consultant: null,
      email: "",
      Location: "Home",
      primaryPhysicianId: null,
      profile: "",
      racename: "Black or African-American",
      Demo: 'LF'
    }
  ];
  useEffect(() => {
    setPatients(getAxios);
    dispatch(Actions.setPerson(getAxios[0]));
  }, [])

  const handleChange = (event, newValue) => {
    dispatch(Actions.setPerson(patients[newValue]))
    setValue(newValue);
  };

  console.log("KJS_FIX--------------",foldedOpen)

  return(
    <>
      {/* <div className={clsx(classes.root, "fixed")} style={{zIndex: 9998}}> */}
        <AppBar position="static" className="fixed z-9998">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {
              patients.map((patient, index) => 
                <Tab key={index} label={patient.FirstName + " " + patient.LastName} {...a11yProps(index)} />
              )
            }
          </Tabs>
        </AppBar>
        {
          patients.map((patient, index) => {
            const date = new Date();
            const year = date.getFullYear();
            const age = year - patient.DateOfBirth.split("-")[0];
            return (
              <TabPanel className={clsx(isHidden && " hidden", "p-0 fixed mt-48")} key={index} value={value} index={index} style={{zIndex: 99999}}>
                <PatientBanner patient={selectedPerson} />
                {/* <div className="flex">
                  <div className="w-2/6">
                    <PatientAvatar name={patient.FirstName + " " + patient.LastName} birthday={patient.DateOfBirth} age={age + "y/o"} gender={patient.Sex === "F" ? "Female" : "Male"} require="Amil $ 20 100% X-Rays Requirments"/>
                  </div>
                  <div className="w-4/6 mt-12">
                    <ButtonGroups />
                  </div>
                </div> */}
              </TabPanel>
            )
          })
        }
      {/* </div> */}
      {!isHidden ? <div className="h-224"></div> : <div className="h-16"></div>}

    </>
  )
}

export default withReducer('patientToolbar', reducer)(PatientToolbar);
