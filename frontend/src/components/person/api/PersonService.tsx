import axios from "axios";
import { Person } from "classes/Person";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { global } from "Configure.js";

class PersonController {
  getPerson(username: string) {
    return axios.get(global.HOST + `/get-person`, authHeaders());
  }
  getPersonSelf() {
    return axios.get(global.HOST + "/get-person-self", authHeaders());
  }
  getDesignation() {
    return axios.get(global.HOST + "/get-designation-self", authHeaders());
  }
  getEduStatus() {
    return axios.get(global.HOST + "/get-edustatus-self", authHeaders());
  }
  updateStudent(person: Person, statusId: number) {
    return axios.put(
      global.HOST + `/update-student/${statusId}`,
      person,
      authHeaders()
    );
  }
  updateTeacher(person: Person, statusId: number) {
    return axios.put(
      global.HOST + `/update-teacher/${statusId}`,
      person,
      authHeaders()
    );
  }
  changePassword(oldPassword: string, newPassword: string) {
    let formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    return axios.put(global.HOST + "/change-password", formData, authHeaders());
  }
}
export default new PersonController();
