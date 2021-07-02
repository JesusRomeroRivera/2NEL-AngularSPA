import http from "./http";

class EnterpriseService {
  get(id) {
    return http.get(`/enterprises/${id}`);
  }
  create(id, data) {
    return http.post(`/enterprises?userId=${id}`, data);
  }
  update(id, data) {
    return http.put(`/enterprises/${id}`, data);
  }

  delete(id) {
    return http.delete(`/enterprises/${id}`);
  }

  getAll() {
    return http.get("/enterprises");
  }
}

export default new EnterpriseService();
