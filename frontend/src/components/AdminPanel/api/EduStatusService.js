import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";

class EduStatusService {

    getAllEduStatus() {
        return axios.get(GLOBAL.HOST + '/public/get-edustatus')
    }

    deleteEduStatus(id) {
        return axios.delete(GLOBAL.HOST + `/delete-edustatus/${id}`,authHeaders())
    }


    updateEduStatus(edustatus) {
        return axios.put(GLOBAL.HOST + '/update-edustatus', edustatus, authHeaders())
    }

    addEduStatus(edustatus) {
        return axios.post(GLOBAL.HOST + '/add-edustatus', edustatus, authHeaders())
    }

}

export default new EduStatusService()