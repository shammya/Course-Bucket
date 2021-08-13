import axios from "axios"
import { GLOBAL } from 'Configure.js'

class LanguageService {

    getAllLanguages() {
        return axios.get(GLOBAL.HOST + '/get-languages')
    }

    deleteLanguage(id) {
        return axios.delete(GLOBAL.HOST + `/delete-language/${id}`)
    }


    updateLanguage(language) {
        return axios.put(GLOBAL.HOST + '/update-language', language)
    }

    addLanguage(language) {
        return axios.post(GLOBAL.HOST + '/add-language', language)
    }

}

export default new LanguageService()