import axios from "axios"


class EduStatusService {

    getAllEduStatus(username) {
        return axios.get(`http://localhost:8080/admins/${username}/edustatus`)
    }

    deleteEduStatus(username,id) {
        return axios.delete(`http://localhost:8080/admins/${username}/edustatus/${id}`)
    }


    updateEduStatus(username,id,edustatus) {
        return axios.put(`http://localhost:8080/admins/${username}/edustatus/${id}`,edustatus)
    }

    addEduStatus(username,edustatus) {
        return axios.post(`http://localhost:8080/admins/${username}/edustatus`,edustatus)
    }
    
}

export default new EduStatusService()