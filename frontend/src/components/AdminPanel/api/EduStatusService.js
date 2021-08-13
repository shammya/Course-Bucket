import axios from "axios"
import { GLOBAL } from 'Configure.js'


class EduStatusService {

    getAllEduStatus() {
        return axios.get(GLOBAL.HOST + '/get-edustatus')
    }

    deleteEduStatus(id) {
        return axios.delete(GLOBAL.HOST + `/delete-edustatus/${id}`)
    }


    updateEduStatus(edustatus) {
        return axios.put(GLOBAL.HOST + '/update-edustatus', edustatus)
    }

    addEduStatus(edustatus) {
        return axios.post(GLOBAL.HOST + '/add-edustatus', edustatus)
    }

}

export default new EduStatusService()