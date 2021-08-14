import { MiniCourse } from "classes/Course";
import CoursePagination from "components/course/CustomPagination";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import TeacherService from "./api/TeacherService";

function MyCourse() {
  const [courses, setCourses] = useState<MiniCourse>();
  useEffect(() => {
    TeacherService.getCreateCourse().then((response) => {
      console.log("Created course fetched", response.data);
      setCourses(response.data);
    });
  }, []);
  return (
    <User>
      <CoursePagination courses={courses} title="My courses" />
    </User>
  );
}

export default MyCourse;
