import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import CourseBox from "components/course/CourseBox";
import React, { useState } from "react";
import ShadowText from "./../../tools/customDesign/ShadowText";

const CourseBoxContainer = ({ courses }) => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-around" spacing={2}>
        {(courses == undefined || courses.length == 0) && (
          <ShadowText>No course to show</ShadowText>
        )}
        {courses.map((course) => (
          <Grid item key={course.id}>
            <CourseBox courseData={course} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
const CoursePagination = ({ courses, title }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(8);

  if (courses == undefined) return <></>;
  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  console.log(
    "coursePagination",
    coursePerPage,
    indexOfLastCourse,
    indexOfFirstCourse
  );
  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Grid item container>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h4" align="center">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container>
        <CourseBoxContainer courses={currentCourses} />
      </Grid>
      {courses?.length > coursePerPage && (
        <Grid item container justifyContent='center'>
          <Pagination
            count={Math.ceil(courses.length / coursePerPage)}
            page={currentPage}
            onChange={paginate}
            color="secondary"
            siblingCount={3}
            size="large"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default CoursePagination;
