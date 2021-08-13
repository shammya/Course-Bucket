import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { global } from "Configure.js";
import { FileObject } from "material-ui-dropzone";

export class Files {
  id: number;
  type: "ICON" | "VIDEO" | "PICTURE" | "PDF" | "ARTICLE" | "LINK";
  title: string;
  content: any;
  uploadTime: Date;
  lastUpdateTime: Date;

  constructor(
    type: "ICON" | "VIDEO" | "PICTURE" | "PDF" | "ARTICLE" | "LINK",
    title: string = ""
  ) {
    this.type = type;
    this.title = title;
  }
  setFile(file: FileObject): Files {
    console.log("In File: ", file);
    this.content = file;
    return this;
  }
  setTitle(title: string): Files {
    this.title = title;
    return this;
  }
  setContent(content: string): Files {
    this.content = content;
    return this;
  }
  async upload() {
    if (this.type == "VIDEO" || this.type == "PICTURE" || this.type == "PDF") {
      if (this.content.file) {
        const formData = new FormData();
        formData.append("file", this.content.file);
        formData.append("type", this.type);
        formData.append("secure", this.type != "PICTURE" ? "true" : "false");
        await axios
          .put(global.HOST + `/resources/upload`, formData, authHeaders())
          .then((response) => {
            this.content = response.data.uri;
            console.log(1);
            console.log("File url: ", response.data);
          });
        axios
          .get(global.HOST + `/get-countries`, authHeaders())
          .then((response) => {
            console.log(2);
          });
      }
    }
    return await Promise.resolve();
  }
}

export {};
