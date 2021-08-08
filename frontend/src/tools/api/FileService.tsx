import axios from "axios";
import { global } from "Configure.js";

class FileService {
  uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(global.HOST + `/api/auth/upload-image`, formData);
  }
}

export default new FileService();
