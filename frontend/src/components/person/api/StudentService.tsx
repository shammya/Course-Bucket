import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class StudentController {
  getPurchaseCourse() {
    return axios.get(GLOBAL.HOST + `/get-purchased-courses`, authHeaders());
  }
}
export default new StudentController();
