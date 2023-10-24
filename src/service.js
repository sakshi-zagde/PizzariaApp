import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

 
}

export default new TutorialDataService();