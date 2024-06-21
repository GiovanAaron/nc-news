import axios from "axios";


const ncNewsApi = axios.create({

    baseURL: "https://news-api-g0qt.onrender.com/api"
})

export function patchArticleVote(article_id, vote) {

    const voteFormat = {inc_votes: vote}

  return ncNewsApi
    .patch(`/articles/${article_id}`, voteFormat)
    .then(({body}) => {

       return body
    })

}

