import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  text: {
    fontSize: 34,
    padding: "20 10",
    textAlign: "center",
    fontWeight: 900,
    color: "white",
    textShadow: "#aaa 0 0 20px, #ccc 0 0 40px, #ddd 0 0 60px, #aaa 0 0 80px",
    textTransform: "uppercase",
    whiteSpace: "normal",
    lineHeight: "1.5em",
  },
}));

export default function ShadowText({ children, ...other }) {
  const classes = useStyle();
  return (
    <Typography className={classes.text} {...other}>
      {children}
    </Typography>
  );
}
