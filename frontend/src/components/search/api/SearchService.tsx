import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class SearchService {
  getDataForFilter() {
    return axios.get(
      GLOBAL.HOST + `/public/get-data-for-filter`,
      authHeaders()
    );
  }
  getFilteredCourses(object) {
    return axios.post(
      GLOBAL.HOST + `/public/get-filtered-courses`,
      object,
      authHeaders()
    );
  }
}
export default new SearchService();
