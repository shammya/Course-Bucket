import axios from "axios";
import { GLOBAL } from "Configure.js";

class FileService {
  uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(GLOBAL.HOST + `/api/auth/upload-image`, formData);
  }
}

export default new FileService();
