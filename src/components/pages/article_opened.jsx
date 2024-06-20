import { useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";
import { getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useParams } from "react-router-dom";
import { FetchSelectedArticle } from "../comp_sets/fetchSelectedArticle";
import { FetchSelectedComments } from "../comp_sets/fetchSelectedComments";



export function Pg_ArticleByID() {

  const [articleVote, setArticleVote] = useState({})

  return (
    <main className="openedArticle">
      <FetchSelectedArticle  />

      <div className="yourCommentBox">
        <div className="redContainer">Comments</div>
        <form className="yourComment">
          <textarea
            className="yourComment"
            placeholder="leave comment here"
            type="text"
          ></textarea>

          <button className="yourComment">Post Comment</button>
        </form>
      </div>

     

      <FetchSelectedComments/>

    </main>
  );
}
