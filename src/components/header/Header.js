import { Avatar, Badge, Button, Grid, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import React from 'react';
import { Responsive } from 'tools/Responsive';
import SideNav from './SideNav';
import TopNav from './TopNav';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    display: "block-inline",
    textAlign: "center",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      padding: 0,
    },
    color: "inherit"
  },
  input: {
    flexGrow: 1,
  },
  inputRoot: {
    flexGrow: 1,
    color: 'inherit',
    border: "1px solid black",
    borderRadius: "35px",
    padding: theme.spacing(0, 2, 0, 3),
    margin: theme.spacing(0, 3),
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <>
      <img className={classes.logo} src={require('assets/img/CourseOverflowIcon.png').default} />
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
  )
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
        <IconButton >
          <SearchIcon />
        </IconButton>
      </Grid>
    </div>
  )
}
export const isLogIn = false;
function IconSet() {
  return (
    <>
      {
        isLogIn ?
          <>
            <IconButton >
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </>
          : <Responsive displayIn={["Laptop", "Tablet"]}>
            <Button variant="contained" color="primary">Sign in</Button>
          </Responsive>
      }
      <SideNav >
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
      </SideNav>
    </>
  )
}

export const Header = () => {
  const classes = useStyles();
  // if (window.innerWidth >= 768) {
  return (
    <>
      <Grid >
        <Toolbar className={classes.root}>
          <Grid container direction="column" style={{ flexGrow: 1 }}>
            <Grid container direction="row" alignItems="center" justify="flex-end">
              <Logo />
              <Responsive displayIn={["Laptop", "Tablet"]}>
                <SearchBox />
              </Responsive>
              <IconSet />
            </Grid>
            <Responsive displayIn={"Mobile"}>
              <Grid direction="row">
                <SearchBox />
              </Grid>
            </Responsive>
          </Grid>
        </Toolbar>
        <TopNav />
      </Grid>
    </>
  )
}

