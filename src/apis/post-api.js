import axios from "axios";


const ncNewsApi = axios.create({

    baseURL: "https://news-api-g0qt.onrender.com/api"
})

export function postComment(article_id, body){

  
    const message = {
        articleID: article_id,
        username: "tickle122",
        body: body,

    }

    return ncNewsApi
    .post(`/articles/${article_id}/comments`, message )

}

