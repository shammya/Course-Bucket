import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class TeacherService {
  getPerson(username: string) {
    return axios.get(GLOBAL.HOST + `/get-person`, authHeaders());
  }
  getCreateCourseByUsername(username: string) {
    return axios.get(
      GLOBAL.HOST + `/get-created-courses/${username}`,
      authHeaders()
    );
  }
  getMiniInfo(username: string) {
    return axios.get(
      GLOBAL.HOST + `/get-teacher-mini/${username}`,
      authHeaders()
    );
  }
  getCreateCourse() {
    return axios.get(GLOBAL.HOST + `/get-created-courses`, authHeaders());
  }
  getEnrolledStudentList() {
    return axios.get(GLOBAL.HOST + `/get-student-list-teacher`, authHeaders());
  }
  getFAQList() {
    return axios.get(GLOBAL.HOST + `/get-faq-for-teacher`, authHeaders());
  }
  getReviewList() {
    return axios.get(GLOBAL.HOST + `/get-review-teacher`, authHeaders());
  }
  getPurchaseHistory() {
    return axios.get(
      GLOBAL.HOST + `/get-purchase-history-teacher`,
      authHeaders()
    );
  }
}
export default new TeacherService();
