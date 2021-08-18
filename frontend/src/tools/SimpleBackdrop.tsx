import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

export default function SimpleBackdrop() {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={true}
      transitionDuration={3000}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
