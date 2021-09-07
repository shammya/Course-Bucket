import axios from "axios";
import { Message } from "classes/Message";
import { authHeaders as authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";

class MessageService {
  getConversationList() {
    return axios.get(GLOBAL.HOST + `/get-conversation-list`, authHeaders());
  }
  getMessages(username: string) {
    return axios.get(GLOBAL.HOST + `/get-messages/${username}`, authHeaders());
  }
  insertMessage(message: Message) {
    return axios.post(GLOBAL.HOST + `/insert-message`, message, authHeaders());
  }
}
export default new MessageService();
