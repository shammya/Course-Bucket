import axios from "axios"
import { GLOBAL } from 'Configure.js'


class CourseApprovalService {

    getApprovedCourses() {
        return axios.get(GLOBAL.HOST + '/get-approved-courses')
    }

    getUnapprovedCourses() {
        return axios.get(GLOBAL.HOST + '/get-unapproved-courses')
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