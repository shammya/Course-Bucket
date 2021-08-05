import axios from "axios"
import { authHeader } from "components/auth/api/AuthService"
import { global } from 'Configure.js'


class CategoryService {

    getCategories() {
        return axios.get(global.HOST + '/get-categories')
    }

    deleteCategory(id) {
        return axios.delete(global.HOST + `/delete-category/${id}`)
    }


    updateCategory(category) {
        return axios.put(global.HOST + '/update-category', category)
    }

    addCategory(category) {
        return axios.post(global.HOST + '/add-category', category);
    }

}

export default new CategoryService()