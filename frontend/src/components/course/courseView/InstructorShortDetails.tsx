import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import { TeacherMiniInfo } from "./../../../classes/Person";

function InstructorShortDetailsBox({
  details,
}: {
  details: TeacherMiniInfo | undefined;
}) {
  const history = useHistory();
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5">{details?.teacherName}</Typography>
          </Grid>
          <Grid item>
            <CardActionArea
              onClick={(event) => history.push(`/profile/${details?.username}`)}
            >
              <Grid container direction="row" wrap="nowrap">
                <Grid item lg={4} md={5} sm={7} xs={12}>
                  <img src={details?.photoContent} />
                </Grid>
                <Grid item lg={8} md={7} sm={5} xs={12}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                  >
                    <List dense={true}>
                      <ListItem>
                        <ListItemAvatar>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          (
                          {Math.round(
                            (details?.rating ? details?.rating : 0) * 100
                          ) / 100}
                          ) {details?.ratingCount} Rating
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          {details?.reviewCount} Reviews
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          {details?.studentCount} Students
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          {details?.courseCount} Courses
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </CardActionArea>
          </Grid>

          <Grid item>
            <Typography variant="h6">About</Typography>
            <Typography>{details?.about}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InstructorShortDetailsBox;
