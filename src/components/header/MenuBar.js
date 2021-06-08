import { Collapse, Grid, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';


// let CSSTransitionGroup = React.addons.CSSTransitionGroup;

export const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundColor: "#ffc107",
    padding: theme.spacing(0, 1, 0, 1)
  },
  menuItemWrapper: {
    height: "auto",
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-between",
      borderBottom: "1px solid black",
    }
  },
  subMenuContainer: {
    position: "absolute",
    overflow: "hidden",
    backgroundColor: "#fd7e14",
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {
      position: "relative",
      marginLeft: "20px",
      // right: "80%",
      // width: "100%",
    },
  },
  subMenuItem: {
    padding: theme.spacing(1, 3),
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: "50%",
    }
  },
  signInBtn: {
    justify: "start",
    label: {
      justify: "start"
    }
  }
}));



export const menuItems = {
  defaultExpanded: [],
  data: [
    {
      title: "Menu 1",
      items: [],
      checked: false,
    },
    {
      title: "Menu 2",
      items: [
        {
          title: "Sub menu 1",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 2",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 3",
          items: [],
          checked: false,
        },
      ],
      checked: false,
    },
    {
      title: "Menu 3",
      items: [],
      checked: false,
    },
    {
      title: "Menu 4",
      items: [],
      checked: false,
    },
    {
      title: "Menu 5",
      items: [
        {
          title: "Sub menu 4",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 5",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 6",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 6",
          items: [],
          checked: false,
        },
      ],
      checked: false,
    },
    {
      title: "Menu 6",
      items: [],
      checked: false,
    },
    {
      title: "Menu 7",
      items: [],
      checked: false,
    },
    {
      title: "Menu 8",
      items: [
        {
          title: "Sub menu 4",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 5",
          items: [],
          checked: false,
        },
        {
          title: "Sub menu 6",
          items: [],
          checked: false,
        },
      ],
      checked: false,
    },
  ]
}



export function SubMenu({ item: items, open }) {
  const classes = useStyles();
  if (!items.length) return <></>
  else return (
    <div className={classes.subMenuContainer}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(item => (
            <ListItem className={classes.subMenuItem} button key={item.title}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div >
  )
}

export function Menu({ item }) {
  const classes = useStyles();
  const subItems = item.items;
  const [open, setOpen] = React.useState(false);

  const handleMouseEnterLeave = (doOpen) => {
    if (subItems.length) {
      setOpen(doOpen);
    }
  };

  return (
    <Grid item className={classes.menuItemWrapper} onMouseEnter={() => (setOpen(true))} onMouseLeave={() => (setOpen(false))}>
      <List disablePadding>
        <ListItem className={classes.menu} button key={item.title}>
          {item.title}
          {subItems.length > 0
            ?
            !open
              ? <ExpandMoreIcon />
              : <ExpandLessIcon />
            : <React.Fragment></React.Fragment>
          }
        </ListItem>
      </List>
      <SubMenu item={subItems} open={open} />
    </Grid >
  )
}


