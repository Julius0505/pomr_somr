import { useDrag, useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import React, { useState, useRef } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: "90%",
	  },
	  '.& MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled': {
		  fontSize:"240px"
	  }
	}, 
	cursor: {
		cursor: "pointer"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:"100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectLabel: {
    fontSize:"30px",
    position: "absolute",
    top: "10px",
    color: "black",
    borderBottomColor: "transparent"
  },
  nativeSelect: {
    color:"transparent"
  }
}));

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};
const MyCard = ({ id, text, index, moveCard }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <CustomCard ref={ref} style={{ ...style, opacity }}>
      {text}
    </CustomCard>
  );
};
export default MyCard;

const CustomCard = React.forwardRef((props, ref) => {
  const classes = useStyles();
	
	const [personName, setPersonName] = useState([]);
	const [personName1, setPersonName1] = React.useState([]);

	const deleteItem = (index) => {
		let temp = [...personName];
		temp.splice(index, 1);
		setPersonName(temp);
	}

	const deleteItem1 = (index) => {
		let temp = [...personName1];
		temp.splice(index, 1);
		setPersonName1(temp);
  } 

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const [surgical, setSurgical] = React.useState({
    surgery: '',
    name: '',
  });

  const handleChange11 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    
    if(!personName.find(item=>item===event.target.value))
    setPersonName([
      ...personName,
      event.target.value,
    ]);
  };

  const handleChange22 = (event) => {
    const name = event.target.name;
    setSurgical({
      ...surgical,
      [name]: event.target.value,
    });
    
    if(!personName1.find(item=>item===event.target.value))
    setPersonName1([
      ...personName1,
      event.target.value,
    ]);
  };

  const [medicalCollapse, setMedicalCollapse] = useState(false);

  const handleMedicalCollapse = () => {
    console.log("call==", medicalCollapse)
    setMedicalCollapse(!medicalCollapse)
  }

  // const product = {
  //   data: {
  //     id: "1",
  //     description: "Description"
  //   }
  // }
	// const { form, handleChange, setForm } = useForm(null);
  // useEffect(() => {
	// 	if ((product.data && !form) || (product.data && form && product.data.id !== form.id)) {
	// 		setForm(product.data);
	// 	}
	// }, [form, product.data, setForm]);

  if(props.children === "PMH") return (
    <Grid item md={6} sm={12} style={{margin:"20px 0", padding:"30px"}} ref={ref}>
      <Accordion
        expanded={medicalCollapse}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleMedicalCollapse}
        >
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder" className={classes.selectLabel}>
              Past Medical History
            </InputLabel>
            <NativeSelect
              children
              value={state.age}
              onChange={handleChange11}
              className={classes.nativeSelect}
              inputProps={{
                name: 'age',
                id: 'age-native-label-placeholder',
              }}
            >
              {
                names.map((item, index) => (
                  <option key={index} value={index} style={{color: "black"}}>{item}</option>
                ))
              }
            </NativeSelect>
          </FormControl>
        </AccordionSummary>
        <AccordionDetails>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                {personName.map((name, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={name}>
                        <TableCell align="left" >
                            {names[name]}
                        </TableCell>
                        <TableCell align="right" className={classes.cursor} onClick={()=>deleteItem(index)}>
                            <Icon>close</Icon>
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
  else if(props.children === "PSH") return (
    <Grid item md={6} sm={12} style={{margin:"20px 0", padding:"30px"}} ref={ref}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder" className={classes.selectLabel}>
              Past Surgical History
            </InputLabel>
            <NativeSelect
              children
              value={surgical.surgery}
              onChange={handleChange22}
              className={classes.nativeSelect}
              inputProps={{
                name: 'surgery',
                id: 'sugical-native-label-placeholder',
              }}
            >
              {
                names.map((item, index) => (
                  <option key={index} value={index} style={{color: "black"}}>{item}</option>
                ))
              }
            </NativeSelect>
          </FormControl>
        </AccordionSummary>
        <AccordionDetails>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                  {personName1.map((name, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={name}>
                          <TableCell align="left" >
                              {names[name]}
                          </TableCell>
                          <TableCell align="right" className={classes.cursor} onClick={()=>deleteItem1(index)}>
                              <Icon>close</Icon>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
  else return(
    <Grid item md={6} sm={12} style={{margin:"20px 0", padding:"30px"}} ref={ref}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Input defaultValue={props.children} readOnly disableUnderline style={{fontSize:"24px"}} />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            className="mt-8 mb-16"
            id="description"
            name="description"
            // onChange={handleChange}
            label="Description"
            type="text"
            // value={form.description}
            value="Description"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
          {/* <TextareaAutosize
            // rowsMax={4}
            style={{width:"100%"}}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua."
          /> */}
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}
);