import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'inherit',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const createFakeDataSource = () => {
  let data = [
    {
      id: "list1",
      title: "My Templates",
      open: false
    },
    {
      id: "list2",
      title: "Breast",
      open: false
    },
    {
      id: "list3",
      title: "Endocrine",
      open: false
    },
    {
      id: "list4",
      title: "Dermatologic",
      open: false
    },
    {
      id: "list5",
      title: "Cardiovascular",
      open: false,
      items: [
        {
          id: "listItem1",
          name: "CHF-uncontrolled with Chest Pain"
        },
        {
          id: "listItem2",
          name: "Chest Pain Test"
        },
        {
          id: "listItem3",
          name: "Hypertension-F/U"
        }
      ]
    },
    {
      id: "list6",
      title: "HEENT",
      open: false
    },
    {
      id: "list7",
      title: "Infectious Disease",
      open: false
    }
  ];
  return data;
};

export default function TemplateList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [source, setSource] = React.useState(createFakeDataSource());
  const dispatch = useDispatch();

  const handleClick = (index) => {
    let tempSource = source;
    tempSource[index].open = !tempSource[index].open;
    setSource(tempSource)
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Template List
      //   </ListSubheader>
      // }
      className={classes.root}
    >
      {
        source.map((item, index) => (
          <div key={item.id}>
            <ListItem button onClick={()=>handleClick(index)}>
              <ListItemIcon>
                <FilterFramesIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {item.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  item.items && item.items.length > 0 ?
                  item.items.map((child) => (
                    <ListItem key={child.id} button className={classes.nested} onClick={()=>dispatch(Actions.setTemplateFlag(true))}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={child.name} />
                    </ListItem>
                  )): null
                }
              </List>
            </Collapse>
          </div>
        ))
      }
      {/* <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      </> */}
    </List>
  );
}