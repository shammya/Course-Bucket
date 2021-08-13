import axios from "axios"
import { global } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";


class CountryService {

    getAllCountries() {
        return axios.get(global.HOST + '/get-countries')
    }

    deleteCountry(id) {
        return axios.delete(global.HOST + `/delete-country/${id}`, authHeaders())
    }


    updateCountry(country) {
        return axios.put(global.HOST + '/update-country', country, authHeaders())
    }

    addCountry(country) {
        return axios.post(global.HOST + '/add-country', country, authHeaders())
    }

}

export default new CountryService()