import http from "./http";

class AuthService {
  auth(data) {
    return http.post("/auth/profiles", data);
  }
}

export default new AuthService();
