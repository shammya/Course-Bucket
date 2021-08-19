import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";

class CourseApprovalService {

    getApprovedCourses() {
        return axios.get(GLOBAL.HOST + '/get-approved-courses', authHeaders())
    }

    getUnapprovedCourses() {
        return axios.get(GLOBAL.HOST + '/get-unapproved-courses', authHeaders())
    }

    approveCourse(courseId) {
        return axios.post(GLOBAL.HOST + `/approve-course/${courseId}`, {}, authHeaders())
    }
    unapproveCourse(courseId) {
        return axios.post(GLOBAL.HOST + `/unapprove-course/${courseId}`, {}, authHeaders())
    }

    // deleteCountry(id){
    //     return axios.delete(global.HOST + `/delete-country/${id}`)
    // }


    // updateCountry(country) {
    //     return axios.put(global.HOST + '/update-country',country)
    // }

    // addCountry(country) {
    //     return axios.post(global.HOST + '/add-country',country)
    // }

}

export default new CourseApprovalService()