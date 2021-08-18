import {
  Avatar,
  Button,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";
function Notification() {
  let type = "register-person";
  let image;
  let text;
  switch (type) {
    case "register-person":
      image = (
        <Grid item style={{ width: 100 }}>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography variant="button">username</Typography>
          <Typography>is registered</Typography>
        </Grid>
      );
      break;
    case "upload-course":
      image = (
        <Grid item>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>username</Typography>
          <Typography>uploaded a new course</Typography>
        </Grid>
      );
      break;
    case "purchase-course":
      image = (
        <Grid item>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>username</Typography>
          <Typography>purchased </Typography>
          <Typography>courseName </Typography>
        </Grid>
      );
      break;
    case "approve-course":
      image = (
        <Grid item>
          <img src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>courseName</Typography>
          <Typography>is approved </Typography>
        </Grid>
      );
      break;
    case "rating":
      image = (
        <Grid item>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>username</Typography>
          <Typography>rated </Typography>
          <Typography>4 star </Typography>
          <Typography>courseName </Typography>
        </Grid>
      );
      break;
    case "review":
      image = (
        <Grid item>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>username</Typography>
          <Typography>reviewed </Typography>
          <Typography>courseName </Typography>
        </Grid>
      );
      break;
    case "faq-question":
      image = (
        <Grid item>
          <Avatar src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>username</Typography>
          <Typography>asked a question </Typography>
        </Grid>
      );
      break;
    case "faq-answer":
      image = (
        <Grid item>
          <img src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>your question is answered in</Typography>
          <Typography>courseName</Typography>
        </Grid>
      );
      break;
    case "course-update":
      image = (
        <Grid item>
          <img src={""} />
        </Grid>
      );
      text = (
        <Grid item>
          <Typography>courseName</Typography>
          <Typography>is updated.</Typography>
        </Grid>
      );
      break;
      return (
        <Grid
          container
          direction="row"
          spacing={1}
          alignContent="center"
          justifyContent="flex-start"
        >
          {image}
          {text}
        </Grid>
      );
  }
}
export function NotificationPopUp() {
  return (
    <Grid container direction="column">
      <Grid item container justifyContent="space-between">
        <Typography variant="h4">Notification</Typography>
        <Button variant="outlined">See all</Button>
      </Grid>
      <Divider />
      <Grid item></Grid>
    </Grid>
  );
}
