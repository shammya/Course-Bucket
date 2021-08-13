import axios from "axios";
import { Person } from "classes/Person";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class PersonController {
  getPerson(username: string) {
    return axios.get(GLOBAL.HOST + `/get-person`, authHeaders());
  }
}
export default new PersonController();
