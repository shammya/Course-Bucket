import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ControlledTextfield } from "tools/customDesign/ControlledTextfield";
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
  // root: {
  //   height: "100vh",
  // },
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

export function SignUp({ signOut }: { signOut: boolean }) {
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

  function isValidPassword() {
    return password == againPassword && password != "";
  }

  function checkUsername(username: string) {
    AuthService.existByUsername(username).then((response) => {
      setUsernameFound(response.data.boolValue);
    });
  }
  function checkEmail(email: string) {
    AuthService.existByEmail(email).then((response) => {
      setEmailFound(response.data.boolValue);
    });
  }
  function handleSubmitClicked() {
    checkUsername(username);
    checkEmail(email);
    if (isValidPassword() && !usernameFound && !emailFound) {
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
      {signOut && (
        
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmitClicked}
              autoComplete="off"
            >
              <Grid container spacing={2}>
                <Grid item container>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                    required
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
                <Grid item container>
                  <ControlledTextfield
                    error={usernameFound}
                    variant="outlined"
                    required
                    fullWidth
                    label="Username"
                    onBlur={(event) => {
                      checkUsername(event.target.value);
                    }}
                    onFocus={(event) => setUsernameFound(false)}
                    onChange={(event) => {
                      checkUsername(event.target.value);
                      setUsername(event.target.value);
                    }}
                    helperText={usernameFound ? "Username already exist" : ""}
                    pattern="letters-digits"
                  />
                </Grid>
                <Grid item container>
                  <TextField
                    error={emailFound}
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    onBlur={(event) => {
                      checkEmail(event.target.value);
                    }}
                    autoComplete="off"
                    onFocus={(event) => setEmailFound(false)}
                    onChange={(event) => {
                      checkEmail(event.target.value);
                      setEmail(event.target.value);
                    }}
                    helperText={emailFound ? "E-mail already exist" : ""}
                  />
                </Grid>
                <Grid item container>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="off"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
                <Grid item container>
                  <TextField
                    error={againPassword != "" && password !== againPassword}
                    variant="outlined"
                    required
                    fullWidth
                    label="Password (Again)"
                    type="password"
                    onChange={(event) => setAgainPassword(event.target.value)}
                    helperText={
                      password !== againPassword ? "Password mismatch" : ""
                    }
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
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
      )}
    </>
  );
}
