import http from "./http";

class EntrepreneurService {
  get(id) {
    return http.get(`/entrepreneurs/${id}`);
  }
  getAll() {
    return http.get("/entrepreneurs");
  }
  create(id, data) {
    return http.post(`/entrepreneurs?userId=${id}`, data);
  }
}

export default new EntrepreneurService();
