import { Grid } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

export interface ImageViewProps {
  src?: string;
  item?: boolean;
  align?: "center" | "left" | "right";
  containerProps?: DefaultComponentProps<any>;
  wrapperProps?: DefaultComponentProps<any>;
}
export default function GridImageView(props: ImageViewProps) {
  let { align, item } = props;
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
      <Grid item {...props.wrapperProps}>
        <img src={props.src} />
      </Grid>
    </Grid>
  );
}
