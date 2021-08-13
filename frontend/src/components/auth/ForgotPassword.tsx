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
import { ControlledTextfield } from "tools/customDesign/ControlledTextfield";
import { Alert } from "tools/Tools";
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

export function ForgotPassword({ signOut }: { signOut: boolean }) {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [accept, setAccept] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");

  function handleRequestClick(event) {
    event.preventDefault();
    if (username == "") {
      setMessage("Username is empty !!");
      setOpenSnackbar(true);
      return;
    }
    if (dob == null) {
      setMessage("Please set a date of birth");
      setOpenSnackbar(true);
      return;
    }
    AuthService.requestChangePassword(username, dob as Date).then(
      (response) => {
        console.log(response);
        if (response.data.stringValue) {
          setMessage(response.data.stringValue);
          setOpenSnackbar(true);
        } else if (response.data.boolValue == true) {
          setSuccessMessage(
            "Your request accepted. \nPlease set a new password"
          );
          setOpenSuccess(true);
          setAccept(true);
        }
      }
    );
  }
  function handleSubmitClick(event) {
    event.preventDefault();
    if (password != againPassword) {
      setMessage("Password doesn't match !!");
      setOpenSnackbar(true);
      return;
    }
    event.preventDefault();
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
    setOpenSuccess(false);
  }
  return (
    <>
      {signOut && (
        <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Snackbar
              open={openSuccess}
              onClose={handleSnackbarClose}
              autoHideDuration={2000}
            >
              <Alert onClose={handleSnackbarClose} severity="success">
                {successMessage}
              </Alert>
            </Snackbar>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Password Recovery
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={accept ? handleSubmitClick : handleRequestClick}
            >
              <Grid container>
                <Grid item container>
                  <ControlledTextfield
                    disabled={accept}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(event) => setUsername(event.target.value)}
                    pattern="letters-digits-no-space"
                  />
                </Grid>
                {!accept && (
                  <>
                    <Grid item container>
                      <KeyboardDatePicker
                        // disableToolbar
                        margin="normal"
                        required
                        fullWidth
                        variant="dialog"
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
                    </Grid>
                    <Grid item container>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        type="submit"
                      >
                        Request to change password
                      </Button>
                    </Grid>
                  </>
                )}
                {accept && (
                  <>
                    <Grid item container>
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
                    </Grid>
                    <Grid item container>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New Password (Again)"
                        autoComplete="email"
                        error={password != againPassword}
                        onChange={(event) =>
                          setAgainPassword(event.target.value)
                        }
                        helperText={
                          password != againPassword
                            ? "Password mismatch!!!"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item container>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        type="submit"
                      >
                        Submit and Sign In
                      </Button>
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid container direction="column" alignContent="center">
                <Grid item>
                  <Link
                    to={
                      history.location.pathname
                        .split("/")
                        .slice(0, -1)
                        .join("/") + "/signin"
                    }
                    variant="body2"
                  >
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={
                      history.location.pathname
                        .split("/")
                        .slice(0, -1)
                        .join("/") + "/signup"
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
      )}
    </>
  );
}
