import { Grid, makeStyles } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme) => ({
  optionsWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.4,
    "&:hover": { opacity: 1 },
  },
}));
export interface ImageViewProps {
  src?: string;
  item?: boolean;
  align?: "center" | "left" | "right";
  options?: JSX.Element | JSX.Element[];
  containerProps?: DefaultComponentProps<any>;
  wrapperProps?: DefaultComponentProps<any>;
  imgProps?: DefaultComponentProps<any>;
}
export default function GridImageView(props: ImageViewProps) {
  const classes = useStyles();
  let { align, item, options } = props;
  align = align || "center";
  item = item || false;
  return (
    <Grid
      item={item}
      container
      alignItems="center"
      justifyContent={
        align === "left" ? "flex-start" : align === "right" ? "flex-end" : align
      }
      {...props.containerProps}
    >
      {options ? (
        <Grid item {...props.wrapperProps}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            style={{ position: "relative" }}
          >
            <Grid item container>
              <img src={props.src} {...props.imgProps} />
            </Grid>
            <Grid item className={classes.optionsWrapper}>
              {options}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item {...props.wrapperProps}>
          <img src={props.src} />
        </Grid>
      )}
    </Grid>
  );
}
