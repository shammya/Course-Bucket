import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { Course, Property, Week } from "classes/Course";
import { Curriculum } from "components/createCourse/Curriculum/Curriculum";
import User from "layout/User";
import React from "react";

let lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid magni adipisci, a quibusdam deserunt cupiditate. Reprehenderit, molestiae quas minima corporis non nulla perspiciatis esse nostrum in harum eveniet. Repellendus, animi!";
let course = new Course();
course = {
  ...course,
  title:
    'Course title Lorem ipsum dolor sit amet consectetur adipisicing "Lorem ipsum dolor sit amet consectetur adipisicing ',
  subTitle: "Sub",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis earum quidem. Numquam, quasi obcaecati similique, architecto dolore laboriosam consectetur sed aliquam nemo, inventore illo! Temporibus vitae harum quaerat earum.",
  mainPrice: 1200,
  outcomes: [
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
  ],
  prerequisite: [
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
    lorem,
  ],
  properties: [
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
    new Property(lorem),
  ],
  weeks: [new Week(), new Week(), new Week()],
};
export function CourseView() {
  function Header() {
    return (
      <Grid container direction="row" style={{ backgroundColor: "cyan" }}>
        <Grid item md={8} xs={12} direction="column">
          <Grid item>
            <Typography variant="h3">{course.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{course.subTitle}</Typography>
          </Grid>
          <Grid item container direction="row">
            <Grid item>{/* <Rating></Rating> */}</Grid>
            <Grid item>118001 ratings 1090034 students</Grid>
          </Grid>
          <Grid item>Created by {course.teacherName}</Grid>
          <Grid item container direction="row">
            <Grid item>Last updated {course.lastUpdate}</Grid>
            <Grid item>languages</Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{
            backgroundColor: "red",
          }}
        >
          <Image />
          <Grid item container direction="row">
            <Typography variant="h5">
              {
                (course.mainPrice -
                  (course.mainPrice * course.off) / 100) as Number
              }
            </Typography>
            <Typography>{course.mainPrice}</Typography>
            <Typography>{course.off}% off</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Buy now</Button>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body2">This course includes:</Typography>
            </Grid>
            {course.properties.map((item) => (
              <Grid item container direction="row">
                pic
                <Typography>{item.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function Info() {
    return (
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h5">What you'll learn</Typography>
              </Grid>
              <Grid item container direction="row">
                <Grid item container md={6} direction="column">
                  item 1
                </Grid>
                <Grid item container md={6} direction="column">
                  item 2
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h5">Requirement</Typography>
              </Grid>
              <Grid item container direction="row">
                {course.outcomes.map((item) => (
                  <Typography>{item}</Typography>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Typography variant="h5">Requirements</Typography>
            <Grid container direction="column">
              {course.prerequisite.map((item) => (
                <Typography>{item}</Typography>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Typography variant="h5">Description</Typography>
            <Typography>{course.description}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
  function Content() {
    return (
      <Paper>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h5">Course content</Typography>
          </Grid>
          <Grid item>
            <Curriculum course={course} onCourseAttrChange={(course) => {}} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return (
    <User>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container md={8} direction="column" spacing={2}>
          <Grid item>
            <Info />
          </Grid>
          <Grid item>
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </User>
  );
}
