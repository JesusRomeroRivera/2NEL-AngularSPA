import http from "./http";

class FavoriteEntrepreneurService {
  assign(userId, favoriteId) {
    return http.post(`/profiles/${userId}/favoriteEntrepreneurs/${favoriteId}`);
  }

  unassaign(userId, favoriteId) {
    return http.delete(`/profiles/${userId}/favoriteEntrepreneurs/${favoriteId}`);
  }

}

export default new FavoriteEntrepreneurService();
