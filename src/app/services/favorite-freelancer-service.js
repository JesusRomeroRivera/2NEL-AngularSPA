import http from "./http";

class FavoriteFreelancerService {
  assign(userId, favoriteId) {
    return http.post(`/profiles/${userId}/favoriteFreelancers/${favoriteId}`);
  }

  unassaign(userId, favoriteId) {
    return http.delete(`/profiles/${userId}/favoriteFreelancers/${favoriteId}`);
  }

}

export default new FavoriteFreelancerService();
