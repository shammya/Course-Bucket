import {
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Card,
} from "@material-ui/core";
import { Star, Image } from "@material-ui/icons";
import React from "react";
import { lorem } from "components/course/courseView/CoursePage";

function InstructorShortDetailsBox() {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid item container direction="row">
            <Image />
            <Grid item>
              <Grid container direction="column">
                <List dense={true}>
                  <ListItem>
                    <ListItemAvatar>
                      <Star />
                    </ListItemAvatar>
                    <ListItemText>4.6 Instructor Rating</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Star />
                    </ListItemAvatar>
                    <ListItemText>... Reviews</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Star />
                    </ListItemAvatar>
                    <ListItemText>... Students</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Star />
                    </ListItemAvatar>
                    <ListItemText>... Courses</ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6">About</Typography>
            <Typography>{lorem}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InstructorShortDetailsBox;
