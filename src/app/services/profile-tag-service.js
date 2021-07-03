import http from "./http";

class ProfileTagService {
  add(profileId, tagId) {
    return http.post(`/profiles/${profileId}/tags/${tagId}`);
  }

  delete(profileId, tagId) {
    return http.delete(`/profiles/${profileId}/tags/${tagId}`);
  }

}

export default new ProfileTagService();
