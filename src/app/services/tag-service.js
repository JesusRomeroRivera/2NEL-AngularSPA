import http from "./http";

class TagService {
  getById(tagId) {
    return http.get(`/tags/${tagId}`);
  }
  create(data) {
    return http.post("/tags", data);
  }
  update(tagId) {
    return http.put(`/tags/${tagId}`, data);
  }
  delete(tagId) {
    return http.delete(`/tags/${tagId}`);
  }
  getAll() {
    return http.get("/tags");
  }
  getByUserId(userId) {
    return http.get(`/profiles/${userId}/tags`);
  }
}

export default new TagService();
