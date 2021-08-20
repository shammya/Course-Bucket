import axios from "axios"
import { GLOBAL } from 'Configure.js'
import { authHeaders as authHeaders } from "components/auth/api/AuthService";


class CountryService {

    getAllCountries() {
        return axios.get(GLOBAL.HOST + '/public/get-countries')
    }

    deleteCountry(id) {
        return axios.delete(GLOBAL.HOST + `/delete-country/${id}`, authHeaders())
    }


    updateCountry(country) {
        return axios.put(GLOBAL.HOST + '/update-country', country, authHeaders())
    }

    addCountry(country) {
        return axios.post(GLOBAL.HOST + '/add-country', country, authHeaders())
    }

}

export default new CountryService()