import {
  Avatar,
  Badge,
  Button,
  CardActionArea,
  Divider,
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
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import classNames from "classnames";
import AuthService, { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Responsive } from "tools/responsive/Responsive";
import { TopNav, SideNav } from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2D394B",
    flexGrow: 1,
    padding: 5,
    "& > *": {
      color: "white",
    },
    "& input": {
      color: "white",
    },
    "& fieldset": {
      border: "2px solid white",
    },
    "& fieldset:focus": {
      border: "2px solid gray",
    },
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
    borderRadius: "35px",
    padding: theme.spacing(0, 2, 0, 3),
    margin: theme.spacing(0, 3),
  },
}));

export function Header() {
  const classes = useStyles();
  const history = useHistory();

  function profileDetailsLoad() {
    if (AuthService.getCurrentAccountType() == "Teacher") {
      axios
        .get(GLOBAL.HOST + "/get-teacher-self", authHeaders())
        .then((response) => {
          console.log("Person data from header", response);
          history.push({
            pathname: "/profile-details",
            state: {
              person: response.data,
              registered: true,
            },
          });
        });
    } else if (AuthService.getCurrentAccountType() == "Student") {
      axios
        .get(GLOBAL.HOST + "/get-student-self", authHeaders())
        .then((response) => {
          console.log("Person data from header", response);
          history.push({
            pathname: "/profile-details",
            state: {
              person: response.data,
              registered: true,
            },
          });
        });
    }
    // PersonService.getPersonSelf().then((response) => {
    //   console.log("Person data from header", response);
    //   history.push({
    //     pathname: "/profile-details",
    //     state: {
    //       person: response.data,
    //       registered: true,
    //     },
    //   });
    // });
  }

  const popUpNavProperty = {
    admin: [
      // { label: "My Course", link: "/my-course" },
      // { label: "Purchase History", link: "/dashboard/purchase-history" },
      // { label: "My Review", link: "/dashboard/review" },
      // { label: "FAQ", link: "/dashboard/faq" },
      // { label: "Account Setting", link: "/profile-details" },
      // { label: "Sign out", link: "/auth/signin" },
      // { label: "Overview", link: "/dashboard/overview" },
      // { label: "Create a course", link: "/create-course" },
      // { label: "Student's Review", link: "/dashboard/review" },
      {
        label: "Account Setting",
        func: profileDetailsLoad,
      },
      {
        label: "Sign out",
        link: "/auth/signin",
        func: () => {
          AuthService.logout();
          history.push("/auth/signin");
        },
      },
    ],
    teacher: [
      {
        label: "Overview",
        func: () => {
          history.push("/dashboard/overview");
        },
      },
      {
        label: "Create a course",
        func: () => {
          history.push("/create-course");
        },
      },
      {
        label: "My Course",
        func: () => {
          history.push("/my-course");
        },
      },
      {
        label: "Student's Review",
        func: () => {
          history.push("/dashboard/review");
        },
      },
      {
        label: "FAQ",
        func: () => {
          history.push("/dashboard/faq");
        },
      },
      {
        label: "Account Setting",
        func: profileDetailsLoad,
      },
      {
        label: "Sign out",
        func: () => {
          AuthService.logout();
          history.push("/auth/signin");
        },
      },
    ],
    student: [
      {
        label: "My Purchased Course",
        func: () => {
          history.push("/my-course");
        },
      },
      {
        label: "Purchase History",
        func: () => {
          history.push("/dashboard/purchase-history");
        },
      },
      {
        label: "My Review",
        func: () => {
          history.push("/dashboard/review");
        },
      },
      {
        label: "FAQ",
        func: () => {
          history.push("/dashboard/faq");
        },
      },
      {
        label: "Account Setting",
        func: profileDetailsLoad,
      },
      {
        label: "Sign out",
        func: () => {
          AuthService.logout();
          history.push("/auth/signin");
        },
      },
    ],
  };

  const [popUpNav, setPopUpNav] = useState<any>([]);

  useEffect(() => {
    switch (AuthService.getCurrentAccountType()) {
      case "Admin":
        setPopUpNav(popUpNavProperty.admin);
        break;
      case "Student":
        setPopUpNav(popUpNavProperty.student);
        break;
      case "Teacher":
        setPopUpNav(popUpNavProperty.teacher);
        break;
    }
  }, []);

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
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                type: "search",
              }}
              variant="outlined"
            />
          </Grid>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
      </div>
    );
  }

  function IconSet() {
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        {AuthService.isLogin() ? (
          <>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Grid style={{ display: "flex" }}>
              <IconButton
                onClick={(event: React.MouseEvent<any>) =>
                  setAnchorRef(event.currentTarget)
                }
              >
                <Avatar />
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
                <Grid container direction="column">
                  <Grid item onClick={profileDetailsLoad}>
                    <CardActionArea style={{ padding: 16 }}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        wrap="nowrap"
                        spacing={1}
                      >
                        <Grid item>
                          <Avatar />
                        </Grid>
                        <Grid item>
                          <Typography>Signed in as</Typography>
                          <Typography variant="h6">
                            {AuthService.getCurrentUser().username}
                          </Typography>
                          <Typography variant="body1">
                            {AuthService.getCurrentUser().email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <List>
                      {popUpNav.map((item) => (
                        <ListItem
                          key={item.label}
                          button
                          onClick={(event) => {
                            item.func();
                          }}
                        >
                          {item.label}
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Popover>
            </Grid>
          </>
        ) : (
          <Responsive displayIn={["Laptop", "Tablet"]}>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                history.push("/auth/signin");
              }}
            >
              Sign in
            </Button>
          </Responsive>
        )}
        {/* <SideNav>
          <IconButton>
            <MenuIcon fontSize="large" />
          </IconButton>
        </SideNav> */}
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
              justifyContent="flex-end"
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
