import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class PersonController {
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
}
export default new PersonController();
