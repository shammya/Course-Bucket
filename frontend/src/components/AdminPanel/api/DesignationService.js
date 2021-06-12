import axios from "axios"
import {global} from 'Configure.js'


class DesignationService {

    getAllDesignation() {
        return axios.get(global.HOST + '/get-designations')
    }

    deleteDesignation(id) {
        return axios.delete(global.HOST + `/delete-designation/${id}`)
    }


    updateDesignation(designation) {
        return axios.put(global.HOST + '/update-designation',designation)
    }

    addDesignation(designation) {
        return axios.post(global.HOST + '/add-designation',designation)
    }
    
}

export default new DesignationService()