import http from "./http";

class FavoriteEntrepreneurService {

  create(userId, favoriteId) {
    return http.post(`/api/profiles/${userId}/favoriteEntrepreneurs/${favoriteId}`);
  }

  unassaign(userId, favoriteId) {
    return http.delete(`/profiles/${userId}/favoriteEntrepreneurs/${favoriteId}`);
  }

}

export default new FavoriteEntrepreneurService();
