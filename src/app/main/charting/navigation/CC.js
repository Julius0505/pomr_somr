import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';

import AddIcon from '@material-ui/icons/Add';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BookIcon from '@material-ui/icons/Book';
import Button from '@material-ui/core/Button';
import draftToHtml from 'draftjs-to-html';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import ContentEditable from 'react-contenteditable';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    '& .mb-28': {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "0.5em"
    },
    '& .MuiTypography-body1': {
      fontSize: '1.2em'
    },
    '& .MuiAccordionDetails-root': {
      display: "block"
    },
    '& .MuiPaper-root .MuiPaper-elevation1 .MuiPaper-rounded': {
      display: "flex",
      flexWrap: "wrap"
    },
  },
  component: {
    marginRight: "20px"
  },
  tip: {
    color: "green",
    cursor: "pointer"
  },
  oldnotesDropdown: {
    position: "absolute",
    zIndex: "10",
    backgroundColor: "#61dafb"
  },
  chip_list : {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
  },
  paper: {
    position: 'absolute',
    backgroundColor: "#eaeaea",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "auto",
    left: "50%",
    top: "30%",
    transform: "translate(-50%, -50%)"
  },
  cEditableP: {
    padding: "10px"
  }
}));
function CC(props){

  const classes = useStyles();
  const dispatch = useDispatch();

  const [appointmentType, setAppointmentType] = useState("new patient");
  const [languageType, setLanguageType] = useState("English");
  const handleValue = (where, value) => {
    switch (where) {
      case 'appointment':
        setAppointmentType(value)
        break;
      case 'language':
        setLanguageType(value)
        break;
      default: break;
    }
  }
  const [refFunc] = useState(
    {
      appointment_ref: React.createRef(),
      appointment_dropdown_ref: React.createRef(),

      language_ref: React.createRef(),
      language_dropdown_ref: React.createRef()
    }
  )

  useEffect(() => {
    refFunc.appointment_dropdown_ref.current.style.display = "none";
    refFunc.language_dropdown_ref.current.style.display = "none";
  }, [refFunc.appointment_dropdown_ref, refFunc.language_dropdown_ref])

  const dropdownOn = (ref) => {
    let left;
    let dropdownRef;
    let top;
    switch (ref) {
      case 'appointment_ref':
        left = refFunc.appointment_ref.current.offsetLeft;
        top = refFunc.appointment_ref.current.offsetTop;
        dropdownRef = refFunc.appointment_dropdown_ref.current;
        break;
      case 'language_ref':
        left = refFunc.language_ref.current.offsetLeft;
        top = refFunc.language_ref.current.offsetTop;
        dropdownRef = refFunc.language_dropdown_ref.current;
        break;
      default: break;
    }
    dropdownRef.style.display = "block";
    dropdownRef.style.left = left+"px";
    dropdownRef.style.top = (top+20)+"px";
  }

  const dropdownOff = (ref) => {
    switch (ref) {
      case 'appointment_ref':
        refFunc.appointment_dropdown_ref.current.style.display = "none";
        break;
      case 'language_ref':
        refFunc.language_dropdown_ref.current.style.display = "none";
        break;
      default: break;
    }
  }

  const chronicProblems = useSelector(({cc}) => cc.problems.problems);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    setProblems(chronicProblems);
  }, [chronicProblems]);

  const handleDelete = (e,chipToDelete) => {
    const temp = problems.filter((chip) => chip.key !== chipToDelete.key);
    setProblems(temp);
    dispatch(Actions.setProblems(temp))
  };

  const openCCDialogue = (value) => {
    dispatch(Actions.openCCDialogue(value));
  }

  const redux_free_text_data = useSelector(({cc}) => cc.chartings.free_text_data);
  const [free_text_data, setFree_text_data] = useState('');
  const [selectedPerson, setSelectedPerson] = useState({});
  const person = useSelector(({cc}) => cc.selectedPerson.selectedPerson);

  useEffect(() => {
    setSelectedPerson(person);

    if(!redux_free_text_data){
      return;
    }
    if(redux_free_text_data.data !== undefined){
      setFree_text_data(draftToHtml(redux_free_text_data.data));
    }
  },[redux_free_text_data, person]);

  const redux_simple_text = useSelector(({cc}) => cc.chartings.simple_text);
  const [simple_text, setSimple_text] = useState([]);

  useEffect(() => {
    if(!redux_simple_text){
      return;
    }
    setSimple_text(redux_simple_text.data);
  },[redux_simple_text]);

  const openSimpleTextDialogue = (e,i) => {
    dispatch(Actions.openSimpleTextDialogue(i));
  }

  const openFreeTextDialogue = (e) => {
    e.stopPropagation();
    dispatch(Actions.openFreeTextDialogue());
  }

  let age;
  if(selectedPerson.DateOfBirth) {
    const date = new Date();
    const year = date.getFullYear();
    age = year - selectedPerson.DateOfBirth.split("-")[0];
  }

  const [editingKeys, setEditingKeys] = useState([
    "Patient Name", "Age", "City", "Sex", "He/She", "Referal Source", "Appoint Types", "He/She", "Created Date", "Language"
  ])

  // edit Modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const text = `
    <div class="${classes.cEditableP}">
      <span contenteditable="false" class="${classes.tip}">Patient Name</span> is a 
      <span contenteditable="false" class="${classes.tip}">Age</span> years old 
      <span contenteditable="false" class="${classes.tip}">City</span> 
      <span contenteditable="false" class="${classes.tip}">Sex</span>. &nbsp;&nbsp;&nbsp; 
      <span contenteditable="false" class="${classes.tip}">He/She</span> is 
      <span contenteditable="false" class="${classes.tip}">Referal Source</span>. &nbsp;&nbsp;&nbsp; Today's visit is a 
      <span contenteditable="false" class="${classes.tip}">Appoint Types</span>. &nbsp;&nbsp;&nbsp; 
      <span contenteditable="false" class="${classes.tip}">He/She</span>  has been established with me since 
      <span contenteditable="false" class="${classes.tip}">Created Date</span>. &nbsp;&nbsp;&nbsp; Primary language 
      <span contenteditable="false" class="${classes.tip}">Language</span> language.
    </div>`;
  const text1 = `
    <div class="${classes.cEditableP}">
      <div>Problems are to be addressed by chronic</div>
      <div>Problems are to be addressed by acute</div>
    </div>`;

  const cEditableChange = (content) => {
    console.log(content)
    // let htmlArr = content.split(".");
    // let newHtml = "";
    // htmlArr.map((item, index) => {
    //   newHtml += item + simpleText(index);
    // });
    // console.log(newHtml);
    // console.log(simpleText)
  }

  // const simpleText = (index) => {
  //   return (
  //     <div>
  //       <span dangerouslySetInnerHTML={{ __html: simple_text[index]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
  //       <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,index)}/>.
  //     </div>
  //   );
  // }

  return(
    <div className={classes.root} id={props.id}>
      <Accordion
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Chief Complaints</Typography>
            </div>

            <div className="w-2/6 text-center">
                <Button className="mr-16" variant="outlined">P</Button>
                <Button className="mr-16" variant="outlined">L</Button>
                <Button className="mr-16" variant="outlined" onClick={(e) => openFreeTextDialogue(e)}>T</Button>
                <BookIcon className="mr-16" color="secondary"/>
            </div>
            
            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" onClick={handleOpen} />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-full">
            <div className="mb-28">
              <div className="mb-28">
                <Typography className={classes.tip}>{selectedPerson.FirstName + " " + selectedPerson.LastName}</Typography>
                <Typography>&nbsp;is a </Typography>
                <Typography className={classes.tip}>&nbsp;{age}</Typography>
                <Typography>&nbsp;years old</Typography>
                <Typography className={classes.tip}>&nbsp;{selectedPerson.City}&nbsp;{selectedPerson.Sex === "F" ? "female": "male"}</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[0]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,0)}/>.
              </div>
              <div className="mb-28">
                <Typography className={classes.tip}>&nbsp;&nbsp;&nbsp;{selectedPerson.Sex === "F" ? "She": "He"}</Typography>
                <Typography>&nbsp;is</Typography>
                <Typography className={classes.tip}>&nbsp;self referred</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[1]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,1)}/>.
              </div>
              <div className="mb-28">
                <Typography>&nbsp;&nbsp;&nbsp;Today's visit is a</Typography>
                <Typography className={classes.tip}
                  ref={refFunc.appointment_ref}
                  color="secondary"
                  onClick={()=>dropdownOn("appointment_ref")}
                  onMouseLeave={()=>dropdownOff("appointment_ref")}
                >
                  &nbsp;{appointmentType}
                </Typography>
                <div
                  className={classes.oldnotesDropdown}
                  ref={refFunc.appointment_dropdown_ref}
                  onMouseEnter={()=>dropdownOn("appointment_ref")}
                  onMouseLeave={()=>dropdownOff("appointment_ref")}
                >
                  <MenuItem onClick={()=>handleValue("appointment", "new patient")}>new patient</MenuItem>
                  <MenuItem onClick={()=>handleValue("appointment", "scheduled visit/new patient")}>scheduled visit/new patient</MenuItem>
                  <MenuItem onClick={()=>handleValue("appointment", "walk-in visit/established patient")}>walk-in visit/established patient</MenuItem>
                  <MenuItem onClick={()=>handleValue("appointment", "scheduled visit/established patient")}>scheduled visit/established patient</MenuItem>
                  <MenuItem onClick={()=>handleValue("appointment", "walk-in visit")}>walk-in visit</MenuItem>
                </div>
                <span dangerouslySetInnerHTML={{ __html: simple_text[2]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,2)}/>.
              </div>
              
              <div className="mb-28">
                <Typography className={classes.tip}>&nbsp;&nbsp;&nbsp;{selectedPerson.Sex === "F" ? "She": "He"}</Typography>
                <Typography>&nbsp;has been established with me since </Typography>
                <Typography className={classes.tip}>&nbsp;{selectedPerson.Created}</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[3]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,3)}/>.
              </div>
              
              <div className="mb-28">
                <Typography>&nbsp;&nbsp;&nbsp;Primary language</Typography>
                <Typography className={classes.tip}
                  ref={refFunc.language_ref}
                  color="secondary"
                  onClick={()=>dropdownOn("language_ref")}
                  onMouseLeave={()=>dropdownOff("language_ref")}
                >
                  &nbsp;{languageType}
                </Typography>
                <div
                  className={classes.oldnotesDropdown}
                  ref={refFunc.language_dropdown_ref}
                  onMouseEnter={()=>dropdownOn("language_ref")}
                  onMouseLeave={()=>dropdownOff("language_ref")}
                >
                  <MenuItem onClick={()=>handleValue("language", "English")}>English</MenuItem>
                  <MenuItem onClick={()=>handleValue("language", "Spanish")}>Spanish</MenuItem>
                  <MenuItem onClick={()=>handleValue("language", "Chinese")}>Chinese</MenuItem>
                </div>
                <Typography>&nbsp;language</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[4]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,4)}/>.
              </div>
            </div>
          </div>
          <Divider />
          <div className="w-full">
            <div className="mb-2">
              <div className="mb-28">
                <Typography>Problems are to be addressed by chronic</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[5]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,5)}/>
                {/* <ChipList data={list_item0} style={{display: "flex", flexWrap: "wrap", width: "100%"}} /> */}
                <Paper component="ul" className={classes.chip_list}>
                  {problems && problems.length > 0 ? problems.map((data) => {
                    if(data !== '' && data.cc === "chronic") 
                    return (
                      <li key={data.key}>
                        <Chip
                          label={data.item}
                          onDelete={(e) => handleDelete(e,data)}
                        />
                      </li>
                    );
                  }): null}
                </Paper>
                <AddIcon onClick={(e) => openCCDialogue("chronic")}/>.
              </div>
              <div className="mb-28">
                <Typography>Problems are to be addressed by acute</Typography>
                <span dangerouslySetInnerHTML={{ __html: simple_text[6]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
                <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,6)}/>
                <Paper component="ul" className={classes.chip_list}>
                  {problems && problems.length > 0 ? problems.map((data) => {
                    if(data !== '' && data.cc === "acute")
                    return (
                      <li key={data.key}>
                        <Chip
                          label={data.item}
                          onDelete={(e) => handleDelete(e,data)}
                        />
                      </li>
                    );
                  }): null}
                </Paper>
                <AddIcon onClick={(e) => openCCDialogue("acute")}/>.
              </div>
            </div>
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: free_text_data}} className="mr-12 mb-12"></div>
        </AccordionDetails>
      </Accordion>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div  className={classes.paper}>
          <ContentEditable html={text} onChange={(e)=>cEditableChange(e)} />
          <ContentEditable html={text1} onChange={(e)=>cEditableChange(e)} />
        </div>
      </Modal>
    </div>
  )
}

export default withReducer('cc', reducer)(CC);