import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Course } from "classes/Course";
import { CoursePrice } from "components/createCourse/CoursePrice";
import { Curriculum } from "components/createCourse/Curriculum/Curriculum";
import { TargetStudent } from "components/createCourse/TargetStudent";
import React from "react";
import { LandingPage } from "../components/createCourse/LandingPage";
import DrawerLayout, { IDrawerLayoutObject } from "../layout/DrawerLayout";

function CreateCourse(props) {
  const icon = <InboxIcon />;

  let course = new Course();
  course = {
    ...course,
    mainPrice: 1200,
    title: "Title",
    subTitle: "Sub",
    outcomes: ["1", "2", "ok"],
  };
  console.log(course);

  function handleCourseAttrChange(attribute) {
    course = { ...course, ...attribute };
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
        />
      ),
    },
  ];

  return <DrawerLayout objects={topics} />;
}

export default CreateCourse;
