import { Avatar, Button, Divider, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import input from "postcss/lib/input";
import { useState, useEffect } from "react";
import { GLOBAL } from "./../../Configure";
function Notification({ notification }) {
  let type = "register-person";
  let image;
  let text;
  switch (notification.type) {
    case "REGISTRATION":
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
    case "COURSEUPLOAD":
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
    case "COURSEPURCHASE":
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
    case "COURSEAPPROVED":
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
    case "COURSEUNAPPROVED":
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
    case "RATING":
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
    case "REVIEW":
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
    case "FAQQUESTION":
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
    case "FAQANSWER":
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
    case "COURSEUPDATE":
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
  }
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
export function NotificationPopUp() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-notification", authHeaders())
      .then((response) => {
        setNotifications(response.data);
      });
  }, []);
  return (
    <Grid container direction="column">
      <Grid item container justifyContent="space-between">
        <Typography variant="h4">Notification</Typography>
        <Button variant="outlined">See all</Button>
      </Grid>
      {notifications.map((item) => (
        <>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Notification notification={item} />
          </Grid>
        </>
      ))}
    </Grid>
  );
}
