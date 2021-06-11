import axios from "axios"


class LanguageService {

    getAllLanguages(username) {
        return axios.get(`http://localhost:8080/admins/${username}/languages`)
    }

    deleteLanguage(username,id) {
        return axios.delete(`http://localhost:8080/admins/${username}/languages/${id}`)
    }


    updateLanguage(username,id,language) {
        return axios.put(`http://localhost:8080/admins/${username}/languages/${id}`,language)
    }

    addLanguage(username,language) {
        return axios.post(`http://localhost:8080/admins/${username}/languages`,language)
    }
    
}

export default new LanguageService()