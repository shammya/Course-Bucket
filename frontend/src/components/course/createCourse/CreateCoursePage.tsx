import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Category } from "classes/Category";
import { Course } from "classes/Course";
import { CoursePrice } from "components/course/createCourse/CoursePrice";
import { Curriculum } from "components/course/createCourse/Curriculum/Curriculum";
import { TargetStudent } from "components/course/createCourse/TargetStudent";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import React from "react";
import { LandingPage } from "./Landing";

function CreateCourse(props) {
  const icon = <InboxIcon />;

  let id = 1;
  let course = new Course();
  course = {
    ...course,
    mainPrice: 1200,
    title: "Title",
    subTitle: "Sub",
    outcomes: ["1", "2", "ok"],
    categories: [
      new Category(id++, "Category " + id),
      new Category(id++, "Category " + id),
      new Category(id++, "Category " + id),
      new Category(id++, "Category " + id),
      new Category(id++, "Category " + id),
    ],
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
