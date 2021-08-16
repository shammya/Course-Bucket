import { Grid } from "@material-ui/core";
import { FaqList } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { FAQBox } from "components/course/courseView/FAQ";
import CustomPagination from "layout/Pagination";
import React, { useEffect, useState } from "react";
import StudentService from "../api/StudentService";
import TeacherService from "../api/TeacherService";
import { ContentHeader } from "./Dashboard";

export function FaqView() {
  const [faqWithCourses, setFaqWithCourses] = useState<FaqList[]>([]);
  useEffect(() => {
    handleLoadData();
  }, []);
  function handleLoadData() {
    switch (AuthService.getCurrentAccountType()) {
      case "Student":
        StudentService.getFAQList().then((response) => {
          console.log("faq list", response.data);
          setFaqWithCourses(response.data);
        });
        break;
      case "Teacher":
        TeacherService.getFAQList().then((response) => {
          console.log("faq list", response.data);
          setFaqWithCourses(response.data);
        });
        break;
    }
  }
  return (
    <CustomPagination objectsPerPage={3}>
      {faqWithCourses?.map((faqWithCourse) => (
        <ContentHeader
          courseId={faqWithCourse.courseId}
          courseTitle={faqWithCourse.courseTitle}
          courseSubtitle={faqWithCourse.courseSubtitle}
          courseImage={faqWithCourse.courseImage}
        >
          <CustomPagination objectsPerPage={3} divider>
            {faqWithCourse?.faqInfos?.map((faq) => (
              <FAQBox faq={faq} onSubmit={handleLoadData} />
            ))}
          </CustomPagination>
        </ContentHeader>
      ))}
    </CustomPagination>
  );
}
