import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders } from "components/auth/api/AuthService";

class InfoService {

    getTeacherInfo() {
        return axios.get(GLOBAL.HOST + '/get-teacher-info', authHeaders())
    }

    getStudentInfo() {
        return axios.get(GLOBAL.HOST + '/get-student-info', authHeaders())
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

export default new InfoService()