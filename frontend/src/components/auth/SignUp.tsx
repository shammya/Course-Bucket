import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Person } from "../../classes/Person";
import AuthService from "./api/AuthService";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage:
      "url(https://st4.depositphotos.com/21087722/22869/i/1600/depositphotos_228693110-stock-photo-amazing-succulents-welcome-handwriting-monogram.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    // margin: theme.spacing(1, 0),
    // minWidth: 400,
  },
}));

export function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  let person: Person;

  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const [usernameFound, setUsernameFound] = useState(false);
  const [emailFound, setEmailFound] = useState(false);
  const [signOut, setSignOut] = useState(true);

  useEffect(() => {
    if (AuthService.isLogin()) {
      setSignOut(false);
    }
  }, []);

  function isValidPassword() {
    return password == againPassword && password != "";
  }
  function handleSubmitClicked() {
    if (
      status != "" &&
      username != "" &&
      email != "" &&
      isValidPassword() &&
      !usernameFound &&
      !emailFound
    ) {
      let person: Person = new Person(email, username, password);
      person.accountType = status;
      history.push({
        pathname:
          history.location.pathname.split("/").slice(0, -1).join("/") +
          "/profile-details",
        state: { person: person, registered: false },
      });
    }
  }
  return (
    <>
      {
        <Dialog open={!signOut}>
          <DialogTitle>{"You are already signed in!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to sign out and sign up again?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={(event) => {
                setSignOut(true);
                AuthService.logout();
              }}
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={(event) => {
                history.goBack();
              }}
              color="primary"
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      }
      {signOut && (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container xs spacing={2}>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel>Your Status</InputLabel>
                    <Select
                      label="Your Status"
                      variant="outlined"
                      value={status}
                      onChange={(event) =>
                        setStatus(event.target.value as string)
                      }
                    >
                      <MenuItem key="Student" value={"Student"}>
                        Student
                      </MenuItem>
                      <MenuItem key="Teacher" value={"Teacher"}>
                        Teacher
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={usernameFound}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onBlur={(event) => {
                      AuthService.existByUsername(event.target.value).then(
                        (response) => {
                          setUsernameFound(response.data.boolValue);
                        }
                      );
                    }}
                    onFocus={(event) => setUsernameFound(false)}
                    onChange={(event) => setUsername(event.target.value)}
                    helperText={usernameFound ? "Username already exist" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={emailFound}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onBlur={(event) => {
                      AuthService.existByEmail(event.target.value).then(
                        (response) => {
                          setEmailFound(response.data.boolValue);
                        }
                      );
                    }}
                    onFocus={(event) => setUsernameFound(false)}
                    onChange={(event) => {
                      AuthService.existByEmail(event.target.value).then(
                        (response) => {
                          setEmailFound(response.data.boolValue);
                        }
                      );
                      setEmail(event.target.value);
                    }}
                    helperText={emailFound ? "E-mail already exist" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={password !== againPassword}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password (Again)"
                    type="password"
                    id="password-again"
                    autoComplete="current-password"
                    onChange={(event) => setAgainPassword(event.target.value)}
                    helperText={
                      password !== againPassword ? "Password mismatch" : ""
                    }
                  />
                </Grid>
              </Grid>
              {/* <Link
              to={{
                pathname: "/profile-details",
                state: person
              }}> */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmitClicked}
              >
                Sign Up
              </Button>
              {/* </Link> */}
              <Grid container>
                <Grid item>
                  <Link
                    to={
                      location.pathname.split("/").slice(0, -1).join("/") +
                      "/signin"
                    }
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      )}
    </>
  );
}
