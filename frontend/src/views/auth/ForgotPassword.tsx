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
  const [dob, setDob] = useState(new Date());
  const [accept, setAccept] = useState(false);

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Recovery
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
                onClick={() => setAccept(true)}
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
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="New Password (Again)"
                autoComplete="email"
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => history.push({ pathname: "/home" })}
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
