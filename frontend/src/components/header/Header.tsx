import {
  Avatar,
  Badge,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Popover,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Responsive } from "tools/Responsive";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    display: "block-inline",
    textAlign: "center",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      padding: 0,
    },
    color: "inherit",
  },
  input: {
    flexGrow: 1,
  },
  inputRoot: {
    flexGrow: 1,
    color: "inherit",
    border: "1px solid black",
    borderRadius: "35px",
    padding: theme.spacing(0, 2, 0, 3),
    margin: theme.spacing(0, 3),
  },
}));

export const isLogIn = true;

export function Header() {
  const classes = useStyles();
  const history = useHistory();

  function Logo() {
    const classes = useStyles();
    return (
      <>
        <img
          className={classes.logo}
          src={require("assets/img/CourseOverflowIcon.png").default}
        />
        <Responsive displayIn={["Laptop", "Tablet"]}>
          <Typography className={classes.title} variant="h6" noWrap>
            Course Bucket
          </Typography>
        </Responsive>
        <Responsive displayIn={["Mobile"]}>
          <Grid className={classes.title} item>
            <Typography variant="h6" noWrap>
              Course
            </Typography>
            <Typography variant="h6" noWrap>
              Bucket
            </Typography>
          </Grid>
        </Responsive>
      </>
    );
  }
  function SearchBox(props) {
    const classes = useStyles();
    return (
      <div className={classNames(classes.inputRoot, props.className)}>
        <Grid container spacing={1} alignItems="center">
          <Grid item className={classes.input}>
            <TextField
              placeholder="Search course..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
      </div>
    );
  }
  const popUpNavProperty = [
    { label: "My Course", link: "/my-course" },
    { label: "Purchase History", link: "/dashboard" },
    { label: "My Review", link: "/dashboard" },
    { label: "FAQ", link: "/dashboard" },
    { label: "Account Setting", link: "/profile-setting" },
    { label: "Sign out", link: "/signin" },
    { label: "Overview", link: "/dashboard" },
    { label: "Create a course", link: "/create-course" },
    { label: "Student's Review", link: "/dashboard" },
  ];

  function IconSet() {
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        {isLogIn ? (
          <>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Grid style={{ display: "flex" }}>
              <IconButton>
                <Avatar
                  onClick={(event: React.MouseEvent<any>) =>
                    setAnchorRef(event.currentTarget)
                  }
                />
              </IconButton>
              <Popover
                open={Boolean(anchorRef)}
                anchorEl={anchorRef}
                onClose={() => setAnchorRef(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <List>
                  {popUpNavProperty.map((item) => (
                    <ListItem
                      button
                      onClick={(event) => history.push(item.link)}
                    >
                      {item.label}
                    </ListItem>
                  ))}
                </List>
              </Popover>
            </Grid>
          </>
        ) : (
          <Responsive displayIn={["Laptop", "Tablet"]}>
            <Button variant="contained" color="primary">
              Sign in
            </Button>
          </Responsive>
        )}
        <SideNav>
          <IconButton>
            <MenuIcon fontSize="large" />
          </IconButton>
        </SideNav>
      </>
    );
  }
  return (
    <>
      <Grid>
        <Toolbar className={classes.root}>
          <Grid container direction="column" style={{ flexGrow: 1 }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="flex-end"
            >
              <Logo />
              <Responsive displayIn={["Laptop", "Tablet"]}>
                <SearchBox />
              </Responsive>
              <IconSet />
            </Grid>
            <Responsive displayIn={"Mobile"}>
              <Grid container direction="row">
                <SearchBox />
              </Grid>
            </Responsive>
          </Grid>
        </Toolbar>
        <TopNav />
      </Grid>
    </>
  );
}
