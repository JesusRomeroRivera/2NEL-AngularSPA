import http from "./http";

class FavoriteInvestorService {
  assign(userId, favoriteId) {
    return http.post(`/profiles/${userId}/favoriteInvestors/${favoriteId}`);
  }

  unassaign(userId, favoriteId) {
    return http.delete(`/profiles/${userId}/favoriteInvestors/${favoriteId}`);
  }

}

export default new FavoriteInvestorService();
