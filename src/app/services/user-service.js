import http from "./http";

class UserService {
  get(id) {
    return http.get(`/users/${id}`);
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  login(data) {
    return http.post(`/users/authenticate`, data);
  }

  getAll() {
    return http.get("/users");
  }
}

export default new UserService();
