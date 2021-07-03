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
  update(id, data) {
    return http.put(`/entrepreneurs/${id}`, data);
  }
  getFavorites(userId){
    return http.get(`/api/profiles/${userId}/favoriteEntrepreneurs`)
  }
}

export default new EntrepreneurService();
