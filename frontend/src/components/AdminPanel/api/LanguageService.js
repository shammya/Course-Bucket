import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";

class LanguageService {

    getAllLanguages() {
        return axios.get(GLOBAL.HOST + '/public/get-languages')
    }

    deleteLanguage(id) {
        return axios.delete(GLOBAL.HOST + `/delete-language/${id}`,authHeaders())
    }

    updateLanguage(language) {
        return axios.put(GLOBAL.HOST + '/update-language', language,authHeaders())
    }

    addLanguage(language) {
        return axios.post(GLOBAL.HOST + '/add-language', language, authHeaders())
    }

}

export default new LanguageService()