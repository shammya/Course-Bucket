import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class StudentService {
  getPurchaseCourse() {
    return axios.get(GLOBAL.HOST + `/get-purchased-courses`, authHeaders());
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
}
export default new StudentService();
