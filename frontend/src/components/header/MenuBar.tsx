import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Category } from "classes/Category";
import React from "react";

// let CSSTransitionGroup = React.addons.CSSTransitionGroup;

export const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundColor: "#ffc107",
    padding: 8,
  },
  menuItemWrapper: {
    height: "auto",
  },
  menu: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      borderBottom: "1px solid black",
    },
  },
  subMenuContainer: {
    position: "absolute",
    overflow: "hidden",
    backgroundColor: "#fd7e14",
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
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
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  signInBtn: {
    justify: "start",
    label: {
      justify: "start",
    },
  },
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
  ],
};

export function SubMenu({
  subCategories,
  open,
}: {
  subCategories: Category[];
  open: boolean;
}) {
  const classes = useStyles();
  if (!subCategories.length) return <></>;
  else
    return (
      <div className={classes.subMenuContainer}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subCategories.map((item) => (
              <ListItem className={classes.subMenuItem} button key={item.id}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    );
}

function Menu({ mainCategory }: { mainCategory: Category }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleMouseEnterLeave = (doOpen) => {
    if (mainCategory.children.length) {
      setOpen(doOpen);
    }
  };
  return (
    <Grid
      item
      className={classes.menuItemWrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {mainCategory.name}
      {mainCategory.children.length > 0 && !open ? (
        <ExpandMore />
      ) : (
        <ExpandLess />
      )}
      <SubMenu subCategories={mainCategory.children} open={open} />
    </Grid>
  );
}

export function MenuBar({ mainCategories }: { mainCategories: Category[] }) {
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-around" direction="row">
      {mainCategories.map((mainCategory) => (
        <Grid item className={classes.menu} key={mainCategory.id}>
          <Menu mainCategory={mainCategory} />
        </Grid>
      ))}
    </Grid>
  );
}
