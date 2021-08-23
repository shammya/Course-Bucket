import axios from "axios";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class SliderService {
  getSliders() {
    return axios.get(GLOBAL.HOST + "/get-slider-images", authHeaders());
  }
  deleteSlider(id) {
    return axios.delete(GLOBAL.HOST + `/delete-slider/${id}`, authHeaders());
  }
  addSlider(slider) {
    return axios.post(GLOBAL.HOST + "/add-slider", slider, authHeaders());
  }
  updateSerial(sliders) {
    return axios.post(
      GLOBAL.HOST + "/update-slider-serial",
      sliders,
      authHeaders()
    );
  }
}

export default new SliderService();
