import { useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";
import { getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useParams } from "react-router-dom";
import { FetchSelectedArticle, FetchSelectedComments } from "../comp_sets";





export function Pg_ArticleByID() {
  return (
    <main className="openedArticle">
      <FetchSelectedArticle />

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
