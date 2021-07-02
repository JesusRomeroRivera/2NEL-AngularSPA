import http from "./http";

class AuthService {
  auth(data) {
    return http.post("/auth/sign-in", data);
  }
}

export default new AuthService();
