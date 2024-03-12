import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c5e03693-a957-44d3-83b6-e734a5312135",
  },
});

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },

  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },

  logout() {
    return instance.delete("auth/login");
  },
};
