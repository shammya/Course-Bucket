import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";

class DesignationService {

    getAllDesignation() {
        return axios.get(GLOBAL.HOST + '/public/get-designations')
    }

    deleteDesignation(id) {
        return axios.delete(GLOBAL.HOST + `/delete-designation/${id}`,authHeaders())
    }


    updateDesignation(designation) {
        return axios.put(GLOBAL.HOST + '/update-designation', designation,authHeaders())
    }

    addDesignation(designation) {
        return axios.post(GLOBAL.HOST + '/add-designation', designation,authHeaders())
    }

}

export default new DesignationService()