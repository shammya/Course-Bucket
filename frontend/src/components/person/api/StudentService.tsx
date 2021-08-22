import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class StudentService {
  getPurchaseCourse() {
    return axios.get(GLOBAL.HOST + `/get-purchased-courses-self`, authHeaders());
  }
  getPurchaseCourseByUsername(username: string) {
    return axios.get(GLOBAL.HOST + `/public/get-purchased-courses/${username}`, authHeaders());
  
  }
  getFAQList() {
    return axios.get(GLOBAL.HOST + `/get-faq-for-student`, authHeaders());
  }
  getReviewList() {
  return axios.get(GLOBAL.HOST + `/get-review-student`, authHeaders());
  }
  getPurchaseHistory() {
    return axios.get(
      GLOBAL.HOST + `/get-purchase-history-student`,
      authHeaders()
    );
  }
  getEduStatus(username:  string) {
    return axios.get(
      GLOBAL.HOST + `/public/get-student-edustatus/${username}`
    );
  }
  getStudentMiniInfo(username: string) {
    return axios.get(
      GLOBAL.HOST + `/public/get-student-mini/${username}`
    )
  }
}
export default new StudentService();
