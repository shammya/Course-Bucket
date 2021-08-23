import axios from "axios";
import { MiniCourse } from "classes/Course";
import { authHeaders } from "components/auth/api/AuthService";
import CoursePagination from "components/course/CustomPagination";
import { GLOBAL } from "Configure";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryCourse() {
  const [courses, setCourses] = useState<MiniCourse>();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    axios
      .get(
        GLOBAL.HOST + `/public/get-course-by-category/${categoryId}`,
        authHeaders()
      )
      .then((response) => {
        setCourses(response.data);
      });
    axios
      .get(GLOBAL.HOST + `/public/get-category-by-name/${categoryId}`)
      .then((response) => {
        setTitle(response.data.name);
      });
  }, []);
  return (
    <User loading={loading}>
      <CoursePagination courses={courses} title={title} />
    </User>
  );
}

export default CategoryCourse;
