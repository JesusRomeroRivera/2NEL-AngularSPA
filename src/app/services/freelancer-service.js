import http from "./http";

class FreelancerService {
  get(id) {
    return http.get(`/freelancers/${id}`);
  }
  create(id, data) {
    return http.post(`/freelancers?userId=${id}`, data);
  }
  update(id, data) {
    return http.put(`/freelancers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/freelancers/${id}`);
  }

  getAll() {
    return http.get("/freelancers");
  }
}

export default new FreelancerService();
