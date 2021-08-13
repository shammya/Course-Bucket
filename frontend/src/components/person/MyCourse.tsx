import { MiniCourse } from "classes/Course";
import CourseBox from "components/course/CourseBox";
import { courseData } from "Data";
import CustomPagination from "layout/Pagination";
import User from "layout/User";
import React, { useState } from "react";

function MyCourse() {
  const [courses, setCourses] = useState<MiniCourse>();

  return (
    <User>
      <CustomPagination type="calculate-by-width" title="My Course">
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
        ].map((item) => (
          <CourseBox courseData={courseData} />
        ))}
      </CustomPagination>
    </User>
  );
}

export default MyCourse;
