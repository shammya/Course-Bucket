import axios from "axios"
import { GLOBAL } from 'Configure.js'


class DesignationService {

    getAllDesignation() {
        return axios.get(GLOBAL.HOST + '/get-designations')
    }

    deleteDesignation(id) {
        return axios.delete(GLOBAL.HOST + `/delete-designation/${id}`)
    }


    updateDesignation(designation) {
        return axios.put(GLOBAL.HOST + '/update-designation', designation)
    }

    addDesignation(designation) {
        return axios.post(GLOBAL.HOST + '/add-designation', designation)
    }

}

export default new DesignationService()