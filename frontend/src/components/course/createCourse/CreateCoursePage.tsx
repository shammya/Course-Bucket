import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Course } from "classes/Course";
import { Files } from "classes/Files";
import AuthService from "components/auth/api/AuthService";
import { CoursePrice } from "components/course/createCourse/CoursePrice";
import { Curriculum } from "components/course/createCourse/Curriculum/Curriculum";
import { TargetStudent } from "components/course/createCourse/TargetStudent";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CourseService from "../api/CourseService";
import { LandingPage } from "./Landing";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282C34",
    flexGrow: 1,
    padding: 5,
    "& > *": {
      color: "white",
    },
    "& input": {
      color: "white",
    },
    "& fieldset": {
      border: "2px solid white",
    },
    "& fieldset:focus": {
      border: "2px solid gray",
    },
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    display: "block-inline",
    textAlign: "center",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      padding: 0,
    },
    color: "inherit",
  },
  input: {
    flexGrow: 1,
  },
  inputRoot: {
    flexGrow: 1,
    color: "inherit",
    borderRadius: "35px",
    padding: theme.spacing(0, 2, 0, 3),
    margin: theme.spacing(0, 3),
  },
}));
function CreateCourse(props) {
  let { courseId } = useParams();
  let history = useHistory();
  const icon = <InboxIcon />;
  const [course, setCourse] = useState(new Course());
  console.log(course);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (courseId != undefined) {
      CourseService.getCourseForUpdate(courseId).then((response) => {
        console.log("Course fetched", response.data);
        if (history.location?.state?.duplicate) {
          removeId(response.data);
          console.log("after removing id", response.data);
        }
        let cover = response.data.cover;
        response.data.cover = new Files(cover.type, cover.title)
          .setId(cover.id)
          .setContent(cover.content);
        response.data.weeks = response.data.weeks.map((week) => {
          week.lectures = week.lectures.map((lecture) => {
            let file: Files = lecture.file;
            file = new Files(file.type, file.title)
              .setId(file.id)
              .setContent(file.content);
            lecture.file = file;
            return lecture;
          });
          return week;
        });
        setCourse(response.data);
      });
    } else {
      setCourse({
        ...course,
        teacherUsername: AuthService.getCurrentUsername(),
      });
    }
  }, []);

  function removeId(course: any) {
    course.id = undefined;
    course.cover.id = undefined;
    course.properties = course.properties.map((item) => ({
      ...item,
      id: undefined,
      icon: { ...item.icon, id: undefined },
    }));
    course.weeks = course.weeks.map((week) => ({
      ...week,
      id: undefined,
      lectures: week.lectures.map((lecture) => ({
        ...lecture,
        id: undefined,
        file: { ...lecture.file, id: undefined },
      })),
    }));
  }

  function handleOnSave() {
    let error = false;
    if (!course.title) {
      error = true;
      enqueueSnackbar("Please set Course Title", { variant: "warning" });
    }
    if (!course.subTitle) {
      error = true;
      enqueueSnackbar("Please set Course Subtitle", { variant: "warning" });
    }
    if (
      !course.languages ||
      (course.languages && course.languages.length == 0)
    ) {
      error = true;
      enqueueSnackbar("Please associate at least one language", {
        variant: "warning",
      });
    }
    if (!course.description) {
      error = true;
      enqueueSnackbar("Please set Description", { variant: "warning" });
    }
    if (!course.mainCategory || !course.subCategory) {
      error = true;
      enqueueSnackbar("Please associate a Category and Sub-Category", {
        variant: "warning",
      });
    }
    if (!course.cover) {
      error = true;
      enqueueSnackbar("Please associate an attractive cover photo", {
        variant: "warning",
      });
    }
    if (course.mainPrice < 0) {
      error = true;
      enqueueSnackbar("Please set a price or set to 0 for FREE", {
        variant: "warning",
      });
    }
    if (
      !course.prerequisites ||
      (course.prerequisites && course.prerequisites.length == 0)
    ) {
      error = true;
      enqueueSnackbar("Please set at least one prerequisite", {
        variant: "warning",
      });
    }
    course.prerequisites &&
      course.prerequisites.forEach((element) => {
        if (!element) {
          error = true;
          enqueueSnackbar(
            "Please set up prerequisite field properly or remove empty field",
            { variant: "warning" }
          );
          return;
        }
      });
    if (!course.outcomes || (course.outcomes && course.outcomes.length == 0)) {
      error = true;
      enqueueSnackbar("Please set at least one outcome", {
        variant: "warning",
      });
    }
    course.outcomes &&
      course.outcomes.forEach((element) => {
        if (!element) {
          error = true;
          enqueueSnackbar(
            "Please set up outcome field properly or remove empty field",
            { variant: "warning" }
          );
          return;
        }
      });
    if (
      !course.properties ||
      (course.properties && course.properties.length < 3)
    ) {
      error = true;
      enqueueSnackbar("Please set at least three short properties", {
        variant: "warning",
      });
    }
    course.properties &&
      course.properties.forEach((element) => {
        if (!element.text) {
          error = true;
          enqueueSnackbar(
            "Please set up properties field properly or remove empty field",
            { variant: "warning" }
          );
          return;
        }
      });
    if (course.weeks.length == 0) {
      error = true;
      enqueueSnackbar("Please set at least one week with lecture", {
        variant: "warning",
      });
    }
    course.weeks.forEach((element) => {
      if (element.lectures.length == 0) {
        error = true;
        enqueueSnackbar(
          "Please set up at least one lecture in week: " + element.weekNo,
          { variant: "warning" }
        );
        return;
      }
      element.lectures.forEach((lecture) => {
        if (!lecture.file) {
          error = true;
          enqueueSnackbar(
            `Please set up lecture properly in week: ${element.weekNo} and lecture: ${lecture.lectureNo}`,
            { variant: "warning" }
          );
          return;
        }
      });
    });
    if (error) return;

    if (course.id) {
      CourseService.updateCourse(course).then((response) => {
        if (response.status === 200) {
          enqueueSnackbar("Course updated successfully", {
            variant: "success",
          });
          history.push(`/course/${courseId}`);
        }
      });
    } else {
      CourseService.addCourse(course).then((response) => {
        if (response.status === 200) {
          enqueueSnackbar("Course uploaded successfully", {
            variant: "success",
          });
          history.push(`/course/${response.data}`);
        }
      });
    }
    //   .then((response) => {
    //   if (response.status == 200) {
    //     enqueueSnackbar("Successfully uploaded", { variant: "success" });
    //   }
    // });
  }

  function handleOnCancel() {}

  function handleCourseAttrChange(attribute) {
    setCourse({ ...course, ...attribute });
    console.log(course);
  }

  const classes = useStyles();
  const topics: Array<IDrawerLayoutObject> = [
    {
      label: "Landing Page",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/landingpage.png").default}
        />
      ),
      content: (
        <LandingPage
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Target Your Student",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/target.png").default}
        />
      ),
      content: (
        <TargetStudent
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Set your curriculum",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/curriculum.png").default}
        />
      ),
      content: (
        <Curriculum
          editable={true}
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Set a price",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/price.png").default}
        />
      ),
      content: (
        <CoursePrice
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
          onSave={handleOnSave}
          onCancel={handleOnCancel}
        />
      ),
    },
  ];

  return <DrawerLayout objects={topics} />;
}

export default CreateCourse;
