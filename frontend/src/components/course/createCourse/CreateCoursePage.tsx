import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Course } from "classes/Course";
import { CoursePrice } from "components/course/createCourse/CoursePrice";
import { Curriculum } from "components/course/createCourse/Curriculum/Curriculum";
import { TargetStudent } from "components/course/createCourse/TargetStudent";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseService from "../api/CourseService";
import { LandingPage } from "./Landing";
import { Files } from "classes/Files";

function CreateCourse(props) {
  let { courseId } = useParams();
  const icon = <InboxIcon />;
  const [course, setCourse] = useState(new Course());
  console.log(course);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (courseId != undefined) {
      CourseService.getCourse(courseId).then((response) => {
        console.log("Course fetched", response.data);
        let cover = response.data.cover;
        response.data.cover = new Files(cover.type, cover.title)
          .setId(cover.id)
          .setContent(cover.content);
        setCourse(response.data);
      });
    }
  }, []);

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
      CourseService.updateCourse(course);
    } else {
      CourseService.addCourse(course);
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

  const topics: Array<IDrawerLayoutObject> = [
    {
      label: "Landing Page",
      icon: icon,
      content: (
        <LandingPage
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Target Your Student",
      icon: <InboxIcon />,
      content: (
        <TargetStudent
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Set your curriculum",
      icon: icon,
      content: (
        <Curriculum
          course={course}
          onCourseAttrChange={handleCourseAttrChange}
        />
      ),
    },
    {
      label: "Set a price",
      icon: icon,
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
