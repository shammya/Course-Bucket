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
}
export default new CourseService();
