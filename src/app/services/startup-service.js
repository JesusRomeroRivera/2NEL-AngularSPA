import http from "./http";

class StartupService {
  getAll() {
    return http.get("/enterprises");
  }
}

export default new StartupService();
