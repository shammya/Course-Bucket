import axios from "axios";
import { Person } from "classes/Person";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class PersonService {
  getPerson(username: string) {
    return axios.get(GLOBAL.HOST + `/get-person`, authHeaders());
  }
  getPersonSelf() {
    return axios.get(GLOBAL.HOST + "/get-person-self", authHeaders());
  }
  getDesignation() {
    return axios.get(GLOBAL.HOST + "/get-designation-self", authHeaders());
  }
  getEduStatus() {
    return axios.get(GLOBAL.HOST + "/get-edustatus-self", authHeaders());
  }
  updateStudent(person: Person, statusId: number) {
    return axios.put(
      GLOBAL.HOST + `/update-student/${statusId}`,
      person,
      authHeaders()
    );
  }
  updateTeacher(person: Person, statusId: number) {
    return axios.put(
      GLOBAL.HOST + `/update-teacher/${statusId}`,
      person,
      authHeaders()
    );
  }
  changePassword(oldPassword: string, newPassword: string) {
    let formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    return axios.put(GLOBAL.HOST + "/change-password", formData, authHeaders());
  }
  getPersonToShow(username: string) {
    return axios.get(
      GLOBAL.HOST + `/public/get-person-by-username/${username}`,
      authHeaders()
    );
  }
  getCreditCardDetails() {
    return axios.get(GLOBAL.HOST + `/get-credit-card`, authHeaders());
  }
  // getProfilePhoto() {
  //   return axios.get(GLOBAL.HOST + "/get-profile-photo", authHeaders());
  // }
}
export default new PersonService();
