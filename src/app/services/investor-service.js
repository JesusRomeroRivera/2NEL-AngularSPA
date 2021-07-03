import http from "./http";

class InvestorService {
  get(id) {
    return http.get(`/investors/${id}`);
  }
  getAll() {
    return http.get("/investors");
  }
  create(id, data) {
    return http.post(`/investors?userId=${id}`, data);
  }
  update(id, data) {
    return http.put(`/investors/${id}`, data);
  }
}

export default new InvestorService();
