import axios from "axios"


class DesignationService {

    getAllDesignations(username) {
        return axios.get(`http://localhost:8080/admins/${username}/designations`)
    }

    deleteDesignation(username,id) {
        return axios.delete(`http://localhost:8080/admins/${username}/designations/${id}`)
    }


    updateDesignation(username,id,designation) {
        return axios.put(`http://localhost:8080/admins/${username}/designations/${id}`,designation)
    }

    addDesignation(username,designation) {
        return axios.post(`http://localhost:8080/admins/${username}/designations`,designation)
    }
    
}

export default new DesignationService()