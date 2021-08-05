import axios from "axios";
import { Person } from "classes/Person";
import { global } from "Configure.js";

class AuthService {
  prefix = "/api/auth";
  existByEmail(email: string) {
    return axios.post(global.HOST + this.prefix + `/validity-email/${email}`);
  }
  existByUsername(username: string) {
    return axios.post(
      global.HOST + this.prefix + `/validity-username/${username}`
    );
  }
  registerStudent(student: Person, eduStatusId: Number) {
    return axios.post(
      global.HOST + this.prefix + `/register-student/${eduStatusId}`,
      student
    );
  }
  registerTeacher(teacher: Person, designationId: Number) {
    return axios.post(
      global.HOST + this.prefix + `/register-teacher/${designationId}`,
      teacher
    );
  }
  signIn(username: string, password: string) {
    return axios.post(global.HOST + this.prefix + `/signin`, {
      username,
      password,
    });
  }
  requestChangePassword(username: string, dob: Date) {
    return axios.post(
      global.HOST + this.prefix + `/request-password-change/${username}`,
      dob
    );
  }
  changePassword(username: string, password: string) {
    return axios.post(global.HOST + this.prefix + `/password-change`, {
      username,
      password,
    });
  }
  isLogin() {
    if (localStorage.getItem("user")) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") + "");
  }
  getCurrentUsername() {
    if (this.getCurrentUser()) {
      return this.getCurrentUser().username;
    } else return "";
  }
  getCurrentEmail() {
    if (this.getCurrentUser()) {
      return this.getCurrentUser().email;
    } else return "";
  }
  getCurrentAccountType() {
    if (this.getCurrentUser()) {
      return this.getCurrentUser().accountType;
    } else return "";
  }
}
export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user") + "");

  if (user && user.token) {
    return { headers: { Authorization: "Bearer " + user.token } };
  } else {
    return { headers: {} };
  }
}
export default new AuthService();
