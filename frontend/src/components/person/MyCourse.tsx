import { MiniCourse } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import CoursePagination from "components/course/CustomPagination";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import StudentService from "./api/StudentService";
import TeacherService from "./api/TeacherService";

function MyCourse() {
  const [courses, setCourses] = useState<MiniCourse>();
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (AuthService.getCurrentAccountType() == "Student") {
      StudentService.getPurchaseCourse().then((response) => {
        console.log("Purchased course fetched", response.data);
        setCourses(response.data);
        setTitle("Purchased Courses");
      });
    } else if (AuthService.getCurrentAccountType() == "Teacher") {
      TeacherService.getCreateCourse().then((response) => {
        console.log("Created course fetched", response.data);
        setCourses(response.data);
        setTitle("My Courses");
      });
    }
  }, []);
  return (
    <User>
      <CoursePagination courses={courses} title={title} />
    </User>
  );
}

export default MyCourse;
