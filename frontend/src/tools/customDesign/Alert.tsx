import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
