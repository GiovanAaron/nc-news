import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://news-api-g0qt.onrender.com/api/articles/")
    .then(({ data }) => {
      return data;
    });
}
