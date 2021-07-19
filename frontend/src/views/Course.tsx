import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { DoneAll, Image, LabelImportant, Star } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { Course, Property, Week } from "classes/Course";
import { Curriculum } from "components/createCourse/Curriculum/Curriculum";
import User from "layout/User";
import React from "react";
import { IconPickerItem } from "react-fa-icon-picker";
import { Sticky, StickyContainer } from "react-sticky";
import { Responsive } from "tools/Responsive";

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
  off: 30,
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
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
    new Property("Lorem ipsum dolor sit ok boss khela hobe amet"),
  ],
  weeks: [new Week(), new Week(), new Week()],
};
export function CourseView() {
  function PCHeader() {
    return (
      <Card
        style={{
          backgroundColor: "cyan",
          position: "relative",
          overflow: "inherit",
        }}
      >
        <CardContent>
          <Grid container direction="row">
            <Grid item md={8} xs={12} direction="column">
              <Grid item>
                <Typography variant="h4">{course.title}</Typography>
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
                width: "100%",
                position: "absolute",
                right: 16,
              }}
            >
              <Sticky>
                {({ style }) => (
                  <Card style={{ ...style, zIndex: 999, marginLeft: 16 }}>
                    <CardContent>
                      <Image />

                      <Grid
                        item
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        spacing={1}
                      >
                        <Grid item>
                          <Typography variant="h5">
                            ৳
                            {
                              (course.mainPrice -
                                (course.mainPrice * course.off) / 100) as Number
                            }
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ textDecoration: "line-through" }}
                          >
                            ৳{course.mainPrice}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            {course.off}% off
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "100%" }}
                        >
                          Buy now
                        </Button>
                      </Grid>
                      <Grid item></Grid>
                      <Grid item container direction="column">
                        <Grid item>
                          <Typography variant="h6">
                            This course includes:
                          </Typography>
                        </Grid>
                        <List dense={true}>
                          {course.properties.map((item) => (
                            <ListItem>
                              <ListItemAvatar>
                                <IconPickerItem
                                  //@ts-ignore
                                  icon={item.icon.content}
                                  containerStyles={{ fontSize: "15px" }}
                                />
                              </ListItemAvatar>
                              <ListItemText>{item.text}</ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </CardContent>
                  </Card>
                )}
              </Sticky>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function MobileHeader() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="column" xs spacing={1}>
            <Grid item>
              <Image />
            </Grid>
            <Grid item>
              <Typography variant="h4">{course.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{course.subTitle}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Created by</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                18234 Ratings 3425092 Students
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Last Updated : 26 March, 2021
              </Typography>
            </Grid>

            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h6">This course includes:</Typography>
              </Grid>
              <List dense={true}>
                {course.properties.map((item) => (
                  <ListItem>
                    <ListItemAvatar>
                      <IconPickerItem
                        //@ts-ignore
                        icon={item.icon.content}
                        containerStyles={{ fontSize: "15px" }}
                      />
                    </ListItemAvatar>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              container
              direction="row"
              style={{
                zIndex: 999,
                position: "fixed",
                bottom: 0,
                left: 0,
                backgroundColor: "pink",
              }}
            >
              <Grid item xs={6}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="h5">
                      ৳
                      {
                        (course.mainPrice -
                          (course.mainPrice * course.off) / 100) as Number
                      }
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ textDecoration: "line-through" }}
                    >
                      ৳{course.mainPrice}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">{course.off}% off</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "100%" }}
                >
                  BUY NOW
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function Info() {
    return (
      <>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h5">What you'll learn</Typography>
                </Grid>
                <List dense={false}>
                  {course.outcomes.map((item) => (
                    <ListItem>
                      <ListItemAvatar>
                        <DoneAll />
                      </ListItemAvatar>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h5">Requirements</Typography>
              <List dense={false}>
                {course.prerequisite.map((item) => (
                  <ListItem>
                    <ListItemAvatar style={{ top: 0 }}>
                      <LabelImportant />
                    </ListItemAvatar>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h5">Description</Typography>
              <Typography>{course.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
  function Content() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5">Course content</Typography>
            </Grid>
            <Grid item>
              <Curriculum course={course} onCourseAttrChange={(course) => {}} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function InstructorDetails() {
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
  function RatingSection() {
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item md={2} xs={3} container direction="column">
              <Grid item>
                <Typography>4.7</Typography>
              </Grid>
              <Grid item>...Rating</Grid>
              <Grid item>
                <Typography>Course Rating</Typography>
              </Grid>
            </Grid>
            <Grid item md={10} xs={9} container direction="column">
              {[5, 4, 3, 2, 1].map((value) => (
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item style={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={(value / 5) * 100}
                    />
                  </Grid>
                  <Grid item>
                    <Rating value={value} readOnly />
                  </Grid>
                  <Grid item>
                    <Typography>{value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function ReviewSection() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="row" wrap="nowrap" xs spacing={2}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item container direction="column">
              <Grid>
                <Typography variant="h5">Reviewer Name</Typography>
              </Grid>
              <Grid item container direction="row" xs spacing={2}>
                <Grid item>
                  <Rating value={3} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">4 weeks ago</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body1">{lorem + lorem}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function FAQSection() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="row" wrap="nowrap" xs spacing={2}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item container direction="column">
              <Grid>
                <Typography variant="h5">Questioner</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">4 weeks ago</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{lorem + lorem}</Typography>
              </Grid>
              <Grid item style={{ marginTop: 20 }}>
                <Grid container direction="row" wrap="nowrap" xs spacing={2}>
                  <Grid item>
                    <Avatar />
                  </Grid>
                  <Grid item container direction="column">
                    <Grid>
                      <Typography variant="h5">Respondent</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">4 weeks ago</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">{lorem + lorem}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  return (
    <User>
      <StickyContainer>
        <Grid container direction="column">
          <Grid item>
            <Responsive displayIn="Laptop">
              <PCHeader />
            </Responsive>
            <Responsive displayIn="Tablet">
              <MobileHeader />
            </Responsive>
            <Responsive displayIn="Mobile">
              <MobileHeader />
            </Responsive>
          </Grid>
          <Grid item container direction="column" md={8} xs spacing={2}>
            <Info />
            <Grid item>
              <Content />
            </Grid>
            <Grid item>
              <InstructorDetails />
            </Grid>
            <Grid item>
              <RatingSection />
            </Grid>
            <Grid item>
              <ReviewSection />
            </Grid>
            <Grid item>
              <FAQSection />
            </Grid>
          </Grid>
        </Grid>
      </StickyContainer>
    </User>
  );
}
