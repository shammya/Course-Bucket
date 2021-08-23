import {
  Avatar,
  Badge,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { Notifications } from "@material-ui/icons";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { StickyContainer } from "react-sticky";
import GridImageView from "tools/customDesign/ImageVeiw";
import { GLOBAL } from "./../../Configure";

interface NotificationProps {
  id: number;
  type: string;
  seen: boolean;
  time: Date;
  rating: number;
  username: string;
  fullName: string;
  photo: string;
  accountType: string;
  courseId: number;
  title: number;
  cover: string;
}

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: lightBlue["A700"],
  },
  bold: {
    fontWeight: "bold",
  },
  seen: {
    // backgroundColor: "#BAFFC9",
  },
  unseen: {
    backgroundColor: lightBlue[800],
    "&:hover": {
      backgroundColor: lightBlue[700],
    },
  },
}));

function NotificationItem({
  notification,
}: {
  notification: NotificationProps;
}) {
  const classes = useStyles();
  const history = useHistory();
  const {
    id,
    type,
    seen,
    time,
    rating,
    username,
    fullName,
    photo,
    accountType,
    courseId,
    title,
    cover,
  } = notification;
  async function handleNotificationClick(link) {
    await axios.put(
      GLOBAL.HOST + `/notification-seen/${id}`,
      {},
      authHeaders()
    );
    history.push(link);
  }

  let image;
  let text;
  let link;
  switch (notification.type) {
    case "REGISTRATION":
      image = <Avatar src={photo} />;
      link = `/profile/${username}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {username}
          </Typography>
          <Typography display="inline"> registered</Typography>
        </>
      );
      break;
    case "COURSEUPLOAD":
      image = <Avatar src={photo} />;
      link = `/course/${courseId}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {fullName}{" "}
          </Typography>
          <Typography display="inline">uploaded a new course</Typography>
        </>
      );
      break;
    case "COURSEPURCHASE":
      image = <Avatar src={photo} />;
      link = `/dashboard/purchase-history`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {fullName}{" "}
          </Typography>
          <Typography display="inline">purchased </Typography>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
        </>
      );
      break;
    case "COURSEAPPROVED":
      image = <GridImageView src={cover} />;
      link = `/course/${courseId}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
          <Typography display="inline">is approved </Typography>
        </>
      );
      break;
    case "COURSEUNAPPROVED":
      image = <img src={cover} />;
      link = `/course/${courseId}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
          <Typography display="inline">is unapproved </Typography>
        </>
      );
      break;
    case "RATING":
      image = <Avatar src={photo || ""} />;
      link = `/course/${courseId}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {fullName}{" "}
          </Typography>
          <Typography display="inline">rated </Typography>
          <Typography display="inline">{rating} star </Typography>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
        </>
      );
      break;
    case "REVIEW":
      image = <Avatar src={photo} />;
      link = `/dashboard/review`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {fullName}{" "}
          </Typography>
          <Typography display="inline">reviewed </Typography>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
        </>
      );
      break;
    case "FAQQUESTION":
      image = <Avatar src={photo} />;
      link = `/dashboard/faq`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {fullName}{" "}
          </Typography>
          <Typography display="inline">asked a question in </Typography>
          <Typography display="inline" className={classes.bold}>
            {title}
          </Typography>
        </>
      );
      break;
    case "FAQANSWER":
      image = <GridImageView src={cover} />;
      link = `/dashboard/faq`;
      text = (
        <>
          <Typography display="inline">your question is answered in</Typography>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
        </>
      );
      break;
    case "COURSEUPDATE":
      image = <img src={cover} />;
      link = `/course/${courseId}`;
      text = (
        <>
          <Typography display="inline" className={classes.bold}>
            {title}{" "}
          </Typography>
          <Typography display="inline">is updated</Typography>
        </>
      );
      break;
  }
  return (
    <ListItem
      button
      onClick={() => handleNotificationClick(link)}
      className={seen ? classes.seen : classes.unseen}
    >
      {/* <CardActionArea onClick={() => history.push(link)}> */}
      <ListItemAvatar
        style={{ width: 56, textAlign: "center", marginRight: 7 }}
      >
        {image ? image : <Avatar />}
      </ListItemAvatar>
      <ListItemText>{text} </ListItemText>
      {/* </CardActionArea> */}
    </ListItem>
  );
}
export function Notification() {
  const classes = useStyles();
  const [notificationAnchorRef, setNotificationAnchorRef] =
    useState<HTMLButtonElement | null>(null);
  const [notifications, setNotifications] = useState<
    NotificationProps[] | null
  >([]);
  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-notification", authHeaders())
      .then((response) => {
        console.log(response.data);
        setNotifications(response.data);
      });
    return () => setNotifications(null);
  }, []);

  function handleSeeAllClicked() {
    axios
      .put(GLOBAL.HOST + "/seen-all-notification", {}, authHeaders())
      .then(() => {
        axios
          .get(GLOBAL.HOST + "/get-notification", authHeaders())
          .then((response) => {
            console.log(response.data);
            setNotifications(response.data);
          });
      });
  }

  let unseenCount = 0;
  notifications?.forEach((item) => {
    if (!item.seen) unseenCount++;
  });
  return (
    <>
      <IconButton
        onClick={(event: React.MouseEvent<any>) =>
          setNotificationAnchorRef(event.currentTarget)
        }
      >
        <Badge badgeContent={unseenCount} color="secondary">
          <Notifications fontSize="large" style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <Popover
        open={Boolean(notificationAnchorRef)}
        anchorEl={notificationAnchorRef}
        onClose={() => setNotificationAnchorRef(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <StickyContainer>
          <Grid
            className={classes.background}
            container
            direction="row"
            style={{ maxHeight: "80vh", maxWidth: 350 }}
          >
            <Grid
              item
              container
              direction="row"
              wrap="nowrap"
              justifyContent="space-between"
              alignContent="center"
              style={{ padding: 12 }}
              spacing={3}
            >
              <Grid item>
                <Typography variant="h5">Notification</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={handleSeeAllClicked}>
                  See all
                </Button>
              </Grid>
            </Grid>
            <Grid item container>
              <List style={{ width: "100%" }}>
                {notifications?.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <Divider />
                    <NotificationItem notification={item} />
                  </React.Fragment>
                ))}
              </List>
            </Grid>
          </Grid>
        </StickyContainer>
      </Popover>
    </>
  );
}
