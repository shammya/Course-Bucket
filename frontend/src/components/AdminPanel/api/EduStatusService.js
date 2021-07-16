import axios from "axios"
import {global} from 'Configure.js'


class EduStatusService {

    getAllEduStatus() {
        return axios.get(global.HOST + '/get-edustatus')
    }

    deleteEduStatus(id) {
        return axios.delete(global.HOST + `/delete-edustatus/${id}`)
    }


    updateEduStatus(edustatus) {
        return axios.put(global.HOST + '/update-edustatus',edustatus)
    }

    addEduStatus(edustatus) {
        return axios.post(global.HOST + '/add-edustatus',edustatus)
    }
    
}

export default new EduStatusService()