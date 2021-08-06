import axios from "axios"
import {global} from 'Configure.js'


class InfoService{

    getTeacherInfo() {
        return axios.get(global.HOST + '/get-teacher-info')
    }

    getStudentInfo() {
        return axios.get(global.HOST + '/get-student-info')
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