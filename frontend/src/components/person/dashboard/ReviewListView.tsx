import { ReviewList } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { ReviewBox } from "components/course/courseView/Review";
import CustomPagination from "layout/Pagination";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import StudentService from "../api/StudentService";
import TeacherService from "../api/TeacherService";
import { ContentHeader } from "./Dashboard";

export function ReviewListView() {
  const history = useHistory();
  const [reviewsWithCourses, setReviewsWithCourses] = useState<ReviewList[]>(
    []
  );
  useEffect(() => {
    switch (AuthService.getCurrentAccountType()) {
      case "Student":
        StudentService.getReviewList().then((response) => {
          console.log("Review List", response.data);
          setReviewsWithCourses(response.data);
        });
        break;
      case "Teacher":
        TeacherService.getReviewList().then((response) => {
          console.log("Review List", response.data);
          setReviewsWithCourses(response.data);
        });
        break;
    }
  }, []);
  return (
    <CustomPagination objectsPerPage={3}>
      {reviewsWithCourses?.map((reviewsWithCourse) => (
        <ContentHeader
          key={reviewsWithCourse.courseId}
          courseId={reviewsWithCourse.courseId}
          courseTitle={reviewsWithCourse.courseTitle}
          courseSubtitle={reviewsWithCourse.courseSubtitle}
          courseImage={reviewsWithCourse.courseImage}
        >
          <CustomPagination objectsPerPage={3} divider>
            {reviewsWithCourse?.reviewInfos?.map((review) => (
              <ReviewBox review={review} key={review.id} />
            ))}
          </CustomPagination>
        </ContentHeader>
      ))}
    </CustomPagination>
  );
}
