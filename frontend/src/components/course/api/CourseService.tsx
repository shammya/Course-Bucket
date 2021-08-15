import axios from "axios";
import { Course } from "classes/Course";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class CourseService {
  getCourseForUpdate(courseId: number) {
    return axios.get(
      GLOBAL.HOST + `/get-course-for-update/${courseId}`,
      authHeaders()
    );
  }
  getCourseToShow(courseId: number) {
    return axios.get(
      GLOBAL.HOST + `/get-course-to-show/${courseId}`,
      authHeaders()
    );
  }
  addCourse(course: Course) {
    course.cover
      .upload()
      .then(() => {
        course.weeks.forEach((week) => {
          week.lectures.forEach(async (lecture) => {
            await lecture.file.upload();
          });
        });
      })
      .then(() => {
        console.log("Course upload starting", course);
        axios
          .post(GLOBAL.HOST + "/add-course", course, authHeaders())
          .then((response) => {
            console.log(response);
          });
      });
  }
  updateCourse(course: Course) {
    // if (course.cover.content.file) {
    course.cover
      .upload()
      .then(() => {
        course.weeks.forEach((week) => {
          week.lectures.forEach(async (lecture) => {
            if (lecture.file.content.file) {
              await lecture.file.upload();
            }
          });
        });
      })
      .then(() => {
        console.log("Course update starting", course);
        axios
          .put(GLOBAL.HOST + "/update-course", course, authHeaders())
          .then((response) => {
            console.log(response);
          });
      });
  }
  purchase(courseId: number) {
    return axios.post(
      GLOBAL.HOST + `/add-purchase-history/${courseId}`,
      {},
      authHeaders()
    );
  }
  courseRatingReview(courseId: number) {
    return axios.get(
      GLOBAL.HOST + `/get-course-public-response/${courseId}`,
      authHeaders()
    );
  }
  ratingSelf(courseId: number) {
    return axios.get(
      GLOBAL.HOST + `/get-rating-self/${courseId}`,
      authHeaders()
    );
  }
  reviewSelf(courseId: number) {
    return axios.get(
      GLOBAL.HOST + `/get-review-self/${courseId}`,
      authHeaders()
    );
  }

  submitRating(courseId: number, ratingValue: number) {
    let formData = new FormData();
    formData.append("courseId", courseId + "");
    formData.append("ratingValue", ratingValue + "");
    return axios.post(GLOBAL.HOST + `/add-rating`, formData, authHeaders());
  }
  submitReview(courseId: number, review: string) {
    let formData = new FormData();
    formData.append("courseId", courseId + "");
    formData.append("review", review);
    return axios.post(GLOBAL.HOST + `/add-review`, formData, authHeaders());
  }
  submitQuestion(courseId: number, question: string) {
    let formData = new FormData();
    formData.append("courseId", courseId + "");
    formData.append("question", question);
    return axios.post(
      GLOBAL.HOST + `/add-faq-question`,
      formData,
      authHeaders()
    );
  }
  submitAnswer(faqId: number, answer: string) {
    let formData = new FormData();
    formData.append("faqId", faqId + "");
    formData.append("answer", answer);
    return axios.post(GLOBAL.HOST + `/add-faq-answer`, formData, authHeaders());
  }
  faqSelf(courseId: number) {
    return axios.get(GLOBAL.HOST + `/get-faq-self/${courseId}`, authHeaders());
  }
  isBought(courseId: number) {
    return axios.get(GLOBAL.HOST + `/is-bought/${courseId}`, authHeaders());
  }
  // } else {
  //   course.weeks.forEach((week) => {
  //     new Promise(() => {
  //       week.lectures.forEach(async (lecture) => {
  //         if (lecture.file.content.file) {
  //           await lecture.file.upload();
  //         }
  //       });
  //     }).then(() => {
  //       console.log("Course update starting", course);
  //       axios
  //         .put(GLOBAL.HOST + "/update-course", course, authHeaders())
  //         .then((response) => {
  //           console.log(response);
  //         });
  //     });
  //   });
  // }
}
export default new CourseService();
