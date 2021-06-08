import axios from "axios"


class CountryService {

    getAllCountries(username) {
        return axios.get(`http://localhost:8080/admins/${username}/countries`)
    }

    deleteCountry(username,id) {
        return axios.delete(`http://localhost:8080/admins/${username}/countries/${id}`)
    }


    updateCountry(username,id,country) {
        return axios.put(`http://localhost:8080/admins/${username}/countries/${id}`,country)
    }

    addCountry(username,country) {
        return axios.post(`http://localhost:8080/admins/${username}/countries`,country)
    }
    
}

export default new CountryService()