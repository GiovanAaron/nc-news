import axios from "axios";


const ncNewsApi = axios.create({

    baseURL: "https://news-api-g0qt.onrender.com/api"
})

export function getAllArticles() {
  return ncNewsApi
    .get("/articles")
    .then(({ data }) => {
      return data;
    });
}

export function getArticleByID(article_id){

    return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({data}) => {
        
        return data

    })
}

export function getAllCommentsByID(article_id){

    return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({data}) => {
      
      return data
    })

}

export function getAllTopics(){

  return ncNewsApi
  .get(`/topics`)
  .then(({data}) => {
    
    return data
  })

}