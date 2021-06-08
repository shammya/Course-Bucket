import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AddCircleOutline, DeleteForever, Edit, ExpandMore, ImportExport, PictureAsPdf, TextFields, VideoCall } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { AddAbleTextField } from 'components/createCourse/AddAbleTextField';
import { Week } from 'components/createCourse/Curriculum/Week';
import { menuItems } from 'components/header/MenuBar';
import { CategoryChips } from 'components/search/filter/Chips';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import CategorySelector from 'tools/CategorySelector';
import { LanguageField } from 'tools/LanguageField';
import DrawerLayout from './../layout/DrawerLayout';
import { CustomImageUploader } from './../tools/ImageUploader';

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


  function TargetStudent() {
    return (
      <>
        <AddAbleTextField header="What will students learn in your course?" />
        <AddAbleTextField header="Are there any course requirements or prerequisites?" />
        <AddAbleTextField header="Write down the properties in brief with attractive icons" showIconPicker />
      </>
    )
  }
  function LandingPage() {
    const [categories, setCategories] = useState(menuItems)
    return (
      <Grid container direction="column">
        <TextField
          label="Course title"
          variant="outlined"
        />
        <TextField
          label="Course subtitle"
          variant="outlined"
        />
        <TextField
          label="Course description"
          variant="outlined"
          multiline
          rows={4}
        />
        <CustomImageUploader />
        <LanguageField />
        <Typography >Category</Typography>
        <CategoryChips
          object={categories}
          onObjectChange={(newCategories => setCategories(newCategories))}
        />
        <CategorySelector
          objects={categories}
          onObjectsChange={(newCategories) => setCategories(newCategories)}
        />
      </Grid>
    )
  }

  function CoursePrice() {
    const [offerShow, setOfferShow] = useState(false);
    return (
      <Grid container direction="column">
        <TextField
          label="Course price"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={offerShow}
              onChange={event => setOfferShow(!offerShow)}
            />
          }
          label="Do you want to give offer?"
        />
        {
          offerShow &&
          <TextField
            label="Set an offer in percentage"
            variant="outlined"
          />
        }
        <Grid item container direction="row" justify="center">
          <Button variant="contained" color="primary">Save</Button>
          <Button variant="contained" color="secondary">Cancel</Button>
        </Grid>
      </Grid>
    )
  }


  function Curriculum() {


    return (
      <Grid container direction="column">
        <Week />
      </Grid>
    )
  }
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

CreateCourse.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CreateCourse;