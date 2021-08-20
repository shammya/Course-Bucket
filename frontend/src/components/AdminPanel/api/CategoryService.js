import axios from "axios"
import { authHeaders as authHeaders } from "components/auth/api/AuthService"
import { GLOBAL } from 'Configure.js'


class CategoryService {

    getCategories() {
        return axios.get(GLOBAL.HOST + '/get-categories', authHeaders())
    }

    deleteCategory(id) {
        return axios.delete(GLOBAL.HOST + `/delete-category/${id}`, authHeaders())
    }


    updateCategory(category) {
        return axios.put(GLOBAL.HOST + '/update-category', category, authHeaders())
    }

    addCategory(category) {
        return axios.post(GLOBAL.HOST + '/add-category', category, authHeaders());
    }

}

export default new CategoryService()