import { useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";
import { getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useParams } from "react-router-dom";
import { FetchSelectedArticle } from "../comp_sets/fetchSelectedArticle";
import { FetchSelectedComments } from "../comp_sets/fetchSelectedComments";
import { CommentBox } from "../comp_sets/commentBox";



export function Pg_ArticleByID() {

  const [ORMyComment, setORMyComment] = useState({
    submitted: false,
    body:[]
  })

  return (
    <main className="openedArticle">
      <FetchSelectedArticle  />

      <CommentBox setORMyComment={setORMyComment} ORMyComment={ORMyComment}/>

     

      <FetchSelectedComments ORMyComment={ORMyComment}/>

    </main>
  );
}
