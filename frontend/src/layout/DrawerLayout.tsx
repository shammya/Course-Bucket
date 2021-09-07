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
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Sticky, StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import User from "./User";

const drawerWidth = 300;
const icon = <InboxIcon />;
const useStyles = makeStyles((theme) => ({
  withDivider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  topBorder: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
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
    height: "97vh",
  },
  content: {
    flexGrow: 1,
    margin: 8,
    // width: `calc(100% - ${drawerWidth}px)`,
    // padding: theme.spacing(2),
    // margin: -theme.spacing(2),
  },
}));

export interface IDrawerLayoutObject {
  label: string;
  urlShort?: string;
  icon: JSX.Element;
  content: JSX.Element;
}

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value != index} {...other}>
      {value === index && children}
    </div>
  );
}
const DrawerLayout = ({
  objects,
  defaultTabIndex = 0,
  pageNotFound = false,
  loading = false,
}: {
  objects: Array<IDrawerLayoutObject>;
  defaultTabIndex?: number;
  pageNotFound?: boolean;
  loading?: boolean;
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
  return (
    <User pageNotFound={pageNotFound} loading={loading}>
      <StickyContainer>
        <Responsive displayIn={["Tablet", "Laptop"]}>
          <Grid container direction="row" spacing={2} wrap="nowrap">
            <Grid style={{ width: drawerWidth }} item>
              <Sticky>
                {({ style }) => (
                  <Drawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    style={style}
                    // style={{ ...style, marginTop: 24, marginBottom: 24 }}
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
                        <Tab
                          className={clsx(
                            classes.withDivider,
                            idx === 0 ? classes.topBorder : ""
                          )}
                          label={item.label}
                          icon={item.icon}
                          key={idx}
                        />
                      ))}
                    </Tabs>
                  </Drawer>
                )}
              </Sticky>
            </Grid>
            <Grid item className={classes.content} container>
              {objects.map((item, idx) => (
                <TabPanel
                  value={tabIndex}
                  index={idx}
                  key={idx}
                  style={{ width: "100%" }}
                >
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
              <AppBar
                position="static"
                color="default"
                style={style}
                // style={{ ...style, marginBottom: 12 }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={(event, newValue) => setTabIndex(newValue)}
                  variant="scrollable"
                  scrollButtons="on"
                >
                  {objects.map((item, idx) => (
                    <Tab label={item.label} key={idx} />
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
              key={idx}
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
