import axios from "axios";


const ncNewsApi = axios.create({

    baseURL: "https://news-api-g0qt.onrender.com/api"
})

export function deleteComment(commentID) {

  return ncNewsApi
    .delete(`/comments/${commentID}`)
    .then(({body}) => {

       return body
    })
   

}
