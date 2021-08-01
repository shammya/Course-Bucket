import {
  AppBar,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import React, { useEffect, useState } from "react";
import { Sticky, StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import User from "./User";

const drawerWidth = 600;
const icon = <InboxIcon />;
const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "100%",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: "relative",
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
    padding: theme.spacing(3),
  },
}));

export interface IDrawerLayoutObject {
  label: string;
  urlShort?: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const DrawerLayout = ({
  objects,
  defaultTabIndex = 0,
}: {
  objects: Array<IDrawerLayoutObject>;
  defaultTabIndex?: number;
}) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  useEffect(() => {
    setTabIndex(defaultTabIndex);
  }, [defaultTabIndex]);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  function handleTabIndexChange(index) {
    // await timeout(100);
    setTabIndex(index);
  }

  function DrawerList({ objects }) {
    return (
      <div>
        <List>
          {objects.map((item, index) => (
            <ListItem
              button
              key={item.label}
              onClick={() => handleTabIndexChange(index)}
            >
              {/* <ListItemIcon>{<InboxIcon />}</ListItemIcon> */}
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  function TabPanel({ children, value, index, ...other }) {
    return (
      <div role="tabpanel" hidden={value != index} {...other}>
        {value === index && children}
      </div>
    );
  }
  return (
    <User>
      <StickyContainer>
        <Responsive displayIn={["Tablet", "Laptop"]}>
          <Grid container direction="row">
            <Grid style={{ width: drawerWidth }} item sm>
              <Sticky>
                {({ style }) => (
                  <Drawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    style={{ ...style, marginTop: 24, marginBottom: 24 }}
                    variant="permanent"
                    open
                  >
                    <Tabs
                      orientation="vertical"
                      value={tabIndex}
                      onChange={(event, newValue) => setTabIndex(newValue)}
                      variant="scrollable"
                      scrollButtons="auto"
                    >
                      {objects.map((item, idx) => (
                        <Tab label={item.label} icon={item.icon} />
                      ))}
                    </Tabs>
                  </Drawer>
                )}
              </Sticky>
            </Grid>
            <Grid item className={classes.content}>
              {objects.map((item, idx) => (
                <TabPanel value={tabIndex} index={idx}>
                  {item.content}
                </TabPanel>
              ))}
              {/* {objects
                .map((item) => ({ content: item.content }))
                .map((item, index) => (
                  <div hidden={tabIndex !== index}>{item.content}</div>
                ))} */}
            </Grid>
          </Grid>
        </Responsive>
        <Responsive displayIn="Mobile">
          <Sticky>
            {({ style }) => (
              <AppBar position="static" color="default" style={style}>
                <Tabs
                  value={tabIndex}
                  onChange={(event, newValue) => setTabIndex(newValue)}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {objects.map((item, idx) => (
                    <Tab label={item.label} />
                  ))}
                </Tabs>
              </AppBar>
            )}
          </Sticky>

          {objects.map((item, idx) => (
            <TabPanel
              value={tabIndex}
              index={idx}
              style={{
                padding: 15,
              }}
            >
              {item.content}
            </TabPanel>
          ))}
        </Responsive>
      </StickyContainer>
    </User>
  );
};

export default DrawerLayout;
