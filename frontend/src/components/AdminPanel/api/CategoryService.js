import axios from "axios"
import { authHeaders } from "components/auth/api/AuthService"
import { GLOBAL } from 'Configure.js'


class CategoryService {

    getCategories() {
        return axios.get(GLOBAL.HOST + '/get-categories')
    }

    deleteCategory(id) {
        return axios.delete(GLOBAL.HOST + `/delete-category/${id}`)
    }


    updateCategory(category) {
        return axios.put(GLOBAL.HOST + '/update-category', category)
    }

    addCategory(category) {
        return axios.post(GLOBAL.HOST + '/add-category', category);
    }

}

export default new CategoryService()