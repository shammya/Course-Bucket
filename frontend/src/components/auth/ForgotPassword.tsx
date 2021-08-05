import { Snackbar } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Alert } from "tools/customDesign/Alert";
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
}));

export function ForgotPassword() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(new Date());
  const [accept, setAccept] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");

  function handleRequestClick(event) {
    AuthService.requestChangePassword(username, dob).then((response) => {
      console.log(response);
      if (response.data.stringValue) {
        setMessage(response.data.stringValue);
        setOpenSnackbar(true);
      } else if (response.data.boolValue == true) {
        setAccept(true);
      }
    });
  }
  function handleSubmitClick(event) {
    if (password != againPassword) return;
    AuthService.changePassword(username, password).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        history.push({ pathname: "/home" });
      } else if (response.data.stringValue) {
        setMessage(response.data.stringValue);
        setOpenSnackbar(true);
      }
    });
  }
  function handleSnackbarClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  }
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Snackbar
          open={openSnackbar}
          onClose={handleSnackbarClose}
          autoHideDuration={2000}
        >
          <Alert onClose={handleSnackbarClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Recovery
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            disabled={accept}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(event) => setUsername(event.target.value)}
          />
          {!accept && (
            <>
              <KeyboardDatePicker
                // disableToolbar
                fullWidth
                variant="inline"
                format="dd/MMM/yyyy"
                label="Date of Birth"
                inputVariant="outlined"
                value={dob}
                onChange={(date) => {
                  setDob(date as Date);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleRequestClick}
                className={classes.submit}
              >
                Request to change password
              </Button>
            </>
          )}
          {accept && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="New Password"
                autoComplete="email"
                autoFocus
                onChange={(event) => setPassword(event.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="New Password (Again)"
                autoComplete="email"
                autoFocus
                error={password != againPassword}
                onChange={(event) => setAgainPassword(event.target.value)}
                helperText={
                  password != againPassword ? "Password mismatch!!!" : ""
                }
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmitClick}
                className={classes.submit}
              >
                Submit and Sign In
              </Button>
            </>
          )}
          <Grid container direction="column" alignContent="center">
            <Grid item>
              <Link
                to={
                  history.location.pathname.split("/").slice(0, -1).join("/") +
                  "/signin"
                }
                variant="body2"
              >
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={
                  history.location.pathname.split("/").slice(0, -1).join("/") +
                  "/signup"
                }
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  );
}
