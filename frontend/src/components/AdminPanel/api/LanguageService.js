import axios from "axios"
import {global} from 'Configure.js'

class LanguageService {

    getAllLanguages() {
        return axios.get(global.HOST + '/get-languages')
    }

    deleteLanguage(id) {
        return axios.delete(global.HOST + `/delete-language/${id}`)
    }


    updateLanguage(language) {
        return axios.put(global.HOST + '/update-language',language)
    }

    addLanguage(language) {
        return axios.post(global.HOST + '/add-language',language)
    }
    
}

export default new LanguageService()