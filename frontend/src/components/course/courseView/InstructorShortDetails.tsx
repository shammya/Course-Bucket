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
import GridImageView from "tools/customDesign/ImageVeiw";
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
          <Grid item container>
            <CardActionArea
              onClick={(event) => history.push(`/profile/${details?.username}`)}
            >
              <Grid container direction="row" wrap="nowrap">
                {/* <Grid item > */}
                <GridImageView
                  item
                  src={details?.photoContent}
                  align="left"
                  containerProps={{ lg: 4, md: 5, sm: 4, xs: 12 }}
                />
                {/* </Grid> */}
                <Grid item lg={8} md={7} sm={8} xs={12}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                  >
                    <List dense={true}>
                      <ListItem>
                        <ListItemAvatar style={{ minWidth: 30 }}>
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
                        <ListItemAvatar style={{ minWidth: 30 }}>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          {details?.reviewCount} Reviews
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar style={{ minWidth: 30 }}>
                          <Star />
                        </ListItemAvatar>
                        <ListItemText>
                          {details?.studentCount} Students
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar style={{ minWidth: 30 }}>
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
