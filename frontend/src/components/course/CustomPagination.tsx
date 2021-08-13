import { Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import CourseBox from "components/course/CourseBox";
import React, { useState } from "react";

const CourseBoxContainer = ({ courses }) => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        {courses.map((course) => (
          <CourseBox courseData={course} />
        ))}
      </Grid>
    </>
  );
};
const CoursePagination = ({ courses, title }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastCourse = currentPage * postsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - postsPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h4">{title}</Typography>
      <CourseBoxContainer courses={currentCourses} />
      <Pagination
        count={Math.ceil(courses.length / postsPerPage)}
        page={currentPage}
        onChange={paginate}
        color="secondary"
        siblingCount={3}
        size="large"
      />
    </Grid>
  );
};

export default CoursePagination;
