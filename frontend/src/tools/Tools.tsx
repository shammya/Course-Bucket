import { Slide, Snackbar } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export function delay() {
  return timeout(500);
}

export function getURLLastPart(url) {
  const result = url.split("/");
  return result[result.length - 1];
}

export const SlidingUpTransition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ErrorMessage({ open, message, onClose }) {
  function handleSnackbarClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    onClose(false);
  }
  return (
    <Snackbar open={open} onClose={handleSnackbarClose} autoHideDuration={2000}>
      <Alert onClose={handleSnackbarClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}
export function SuccessMessage({ open, message, onClose }) {
  function handleSnackbarClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    onClose(false);
  }
  return (
    <Snackbar open={open} onClose={handleSnackbarClose} autoHideDuration={2000}>
      <Alert onClose={handleSnackbarClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}

export function getDifference(date: Date) {
  var curDate = new Date();
  var diff = Math.abs(curDate.getTime() - date.getTime()) / 1000;
  if (diff < 60) return Math.floor(diff) + "s";
  diff /= 60;
  if (diff < 60) return Math.floor(diff) + "m";
  diff /= 60;
  if (diff < 24) return Math.floor(diff) + "h";
  diff /= 24;
  if (diff < 7) return Math.floor(diff) + "d";
  return date.toLocaleDateString();
}

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}
export default withRouter(ScrollToTop);
