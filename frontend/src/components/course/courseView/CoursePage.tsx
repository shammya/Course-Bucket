import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DoneAll, LabelImportant } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { Course, Property, Week } from "classes/Course";
import {
  CheckoutDialog,
  CongratulationDialog,
} from "components/course/courseView/Checkout";
import { FAQSection } from "components/course/courseView/FAQ";
import InstructorShortDetailsBox from "components/course/courseView/InstructorShortDetails";
import RatingSection from "components/course/courseView/Rating";
import { ReviewSection } from "components/course/courseView/Review";
import { Curriculum } from "components/course/createCourse/Curriculum/Curriculum";
import TeacherService from "components/person/api/TeacherService";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import { IconPickerItem } from "react-fa-icon-picker";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Sticky, StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import CourseService from "../api/CourseService";
import { TeacherMiniInfo } from "./../../../classes/Person";

export const lorem =
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
  prerequisites: [
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

const useStyles = makeStyles((theme) => ({
  MuiListItemRoot: {
    alignItems: "flex-start",
  },
  MuiListItemGutters: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  MuiListItemAvatarRoot: {
    minWidth: 30,
  },
  MuiSvgIconRoot: {
    fontSize: "1.2rem",
    marginTop: 3,
  },
}));

export function CourseView() {
  const { courseId } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [checkoutShow, setCheckoutShow] = useState(false);
  const [congratulationShow, setCongratulationShow] = useState(false);
  const [course, setCourse] = useState<Course>(new Course());
  const [teacherInfo, setTeacherInfo] = useState<TeacherMiniInfo>();
  useEffect(() => {
    if (courseId) {
      CourseService.getCourseToShow(courseId).then((response) => {
        console.log("Course fetched", response.data);
        setCourse(response.data);
        TeacherService.getMiniInfo(response.data.teacherUsername).then(
          (response) => {
            setTeacherInfo(response.data);
          }
        );
      });
    }
  }, []);

  function handleCongratulationClose() {
    setCongratulationShow(false);
    history.push(`/course/${courseId}`);
  }

  function handleOnPurchase() {
    CourseService.purchase(courseId).then((response) => {
      if (response.status == 200) {
        setCheckoutShow(false);
        setCongratulationShow(true);
      }
    });
  }

  function Price() {
    return (
      <>
        <Grid item>
          <Typography variant="h5">
            ৳
            {course?.mainPrice
              ? course?.mainPrice - (course?.mainPrice * course?.off) / 100
              : ""}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ textDecoration: "line-through" }}
          >
            ৳{course?.mainPrice}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{course?.off}% off</Typography>
        </Grid>
      </>
    );
  }
  function TitleSection() {
    return (
      <>
        <Grid item>
          <Typography variant="h4">{course?.title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{course?.subTitle}</Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item>
            <Rating value={2} readOnly name="rating" /> (2)
          </Grid>
          <Grid item>118001 ratings 1090034 students</Grid>
        </Grid>
        <Grid item>Created by {course?.teacherName}</Grid>
        <Grid item container direction="row">
          <Grid item>Published date: {course?.publishDate}</Grid>
          <Grid item>languages</Grid>
        </Grid>
      </>
    );
  }
  function CourseProperties() {
    return (
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h6">This course includes:</Typography>
        </Grid>
        <List dense={true}>
          {course?.properties.map((item, index) => (
            <ListItem
              key={item.id ? item.id : index}
              classes={{
                root: classes.MuiListItemRoot,
                gutters: classes.MuiListItemGutters,
              }}
            >
              <ListItemAvatar classes={{ root: classes.MuiListItemAvatarRoot }}>
                <IconPickerItem
                  // classes={{ root: classes.MuiSvgIconRoot }}
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
    );
  }

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
            <Grid item container md={8} xs={12} direction="column">
              <TitleSection />
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
                      <img src={course?.cover?.content} />
                      <Grid
                        item
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Price />
                      </Grid>
                      <Grid item>
                        <div onClick={() => setCheckoutShow(true)}>
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ width: "100%" }}
                          >
                            Buy now
                          </Button>
                        </div>
                        <CheckoutDialog
                          open={checkoutShow}
                          course={course}
                          onClose={() => setCheckoutShow(false)}
                          onPurchase={handleOnPurchase}
                        />
                        <CongratulationDialog
                          open={congratulationShow}
                          course={course}
                          onClose={handleCongratulationClose}
                        />
                      </Grid>
                      <CourseProperties />
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
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <img src={course?.cover?.content} />
            </Grid>
            <Grid item>
              <TitleSection />
            </Grid>
            <Grid item>
              <CourseProperties />
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
                  justifyContent="center"
                  spacing={1}
                >
                  <Price />
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <div onClick={() => setCheckoutShow(true)}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    Buy now
                  </Button>
                </div>
                <CheckoutDialog
                  open={checkoutShow}
                  course={course}
                  onClose={() => setCheckoutShow(false)}
                  onPurchase={handleOnPurchase}
                />
                <CongratulationDialog
                  open={congratulationShow}
                  course={course}
                  onClose={handleCongratulationClose}
                />
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
        <Grid item container>
          <Card style={{ width: "100%" }}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h5">What you'll learn</Typography>
                </Grid>
                <List dense={false}>
                  {course?.outcomes.map((item, index) => (
                    <ListItem
                      key={index}
                      classes={{
                        root: classes.MuiListItemRoot,
                        gutters: classes.MuiListItemGutters,
                      }}
                    >
                      <ListItemAvatar
                        classes={{ root: classes.MuiListItemAvatarRoot }}
                      >
                        <DoneAll classes={{ root: classes.MuiSvgIconRoot }} />
                      </ListItemAvatar>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          <Card style={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5">Requirements</Typography>
              <List dense={false}>
                {course?.prerequisites.map((item, index) => (
                  <ListItem
                    key={index}
                    classes={{
                      root: classes.MuiListItemRoot,
                      gutters: classes.MuiListItemGutters,
                    }}
                  >
                    <ListItemAvatar
                      classes={{ root: classes.MuiListItemAvatarRoot }}
                    >
                      <LabelImportant
                        classes={{ root: classes.MuiSvgIconRoot }}
                      />
                    </ListItemAvatar>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          <Card style={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5">Description</Typography>
              <Typography>{course?.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
  function Content() {
    return (
      <Card style={{ width: "100%" }}>
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
    return <InstructorShortDetailsBox details={teacherInfo} />;
  }
  return (
    <User>
      <StickyContainer>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Responsive displayIn={["Laptop", "Tablet"]}>
              <PCHeader />
            </Responsive>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            // style={{ padding: 10 }}
            spacing={2}
            xs
            md={8}
          >
            <Grid item>
              <Responsive displayIn={["Mobile"]}>
                <MobileHeader />
              </Responsive>
            </Grid>
            <Info />
            <Grid item container>
              <Content />
            </Grid>
            <Grid item container>
              <InstructorDetails />
            </Grid>
            <Grid item container>
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
