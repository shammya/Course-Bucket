import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: "absolute",
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      zIndex: 99,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

// export interface SaveButtonProps extends ButtonTypeMap{
//   loading: boolean,
//   onClick?: (event) => void;
// }

export default function SaveButton(props) {
  const classes = useStyles();
  const timer = React.useRef<number>();
  const [loading, setLoading] = useState(false);
  const { onClick, children, ...rest } = props;

  const buttonClassname = clsx({
    [classes.buttonSuccess]: true,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = window.setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //   }
  // };
  async function handleButtonClick(event) {
    setLoading(true);
    console.log("start of save button");
    if (onClick) await onClick(event);
    setLoading(false);
    console.log("end of save button");
  }
  console.log("save button loading", loading);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {!loading && <Button
          {...rest}
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {children}
        </Button>
        }
        {loading && (
          <CircularProgress color="secondary" size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}
