import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { CoursePrice } from 'components/createCourse/CoursePrice';
import { Curriculum } from 'components/createCourse/Curriculum/Curriculum';
import { TargetStudent } from 'components/createCourse/TargetStudent';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import DrawerLayout from './../layout/DrawerLayout';
import { LandingPage } from './LandingPage';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width: '100%',
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CreateCourse(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const icon = <InboxIcon />









  function Sorting() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']);
    const [list, setList] = useState(
      items.map((item, index) => ({ id: index, name: item }))
    );
    let sortable = null;
    const listItems = items.map(val => (<li key={val.length} data-id={val}>List Item: {val}</li>));
    return (
      <div>
        <ReactSortable
          list={list}
          setList={setList}
          tag="div"
        // onChange={(order, sortable, event) => {
        //   console.log(order);
        //   console.log(sortable);
        //   console.log(event);

        // }}
        >
          {/* <li> */}
          {
            list.map((item, index) => (
              <div key={item.id}>{item.name}</div>
            ))
          }
          {/* </li> */}
          {/* <li data-id={1} key={1}>ok</li>
          <li data-id={2} key={1}>2</li>
          <li data-id={3} key={1}>3</li>
          <li data-id={4} key={1}>4</li> */}
        </ReactSortable>
      </div >
    )
  }
  const objects = [
    {
      label: "Target Your Student",
      icon: <InboxIcon />,
      content: <TargetStudent />
    },
    {
      label: "Set your curriculum",
      icon: icon,
      content: <Curriculum />,
    },
    {
      label: "Curriculum",
      icon: icon,
      content: <Sorting />,
    },
    {
      label: "Set a price",
      icon: icon,
      content: <CoursePrice />,
    },
    {
      label: "Landing Page",
      icon: icon,
      content: <LandingPage />
    },
  ]



  return (
    <DrawerLayout objects={objects} />
  );
}


export default CreateCourse;