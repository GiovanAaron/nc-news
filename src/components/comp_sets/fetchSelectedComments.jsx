import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  getAllArticles,
  getAllCommentsByID,
  getArticleByID,
} from "../../apis/get-api";
import { useEffect, useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";
import { deleteComment } from "../../apis/delete-api";

export const FetchSelectedComments = ({ ORMyComment }) => {
  let { articleid } = useParams();

  const [fetchedComments, setFetchedComments] = useState([]);

  const [deleteLoading, setDeleteLoading] = useState({
    commentID: null,
    deleting: false,
  });

  useEffect(() => {
    getAllCommentsByID(articleid).then(({ comments }) => {
      setFetchedComments(comments);
    });
  }, []);

  function handleDelete(comment_id) {
    const updatedComments = fetchedComments.filter(
      (comment) => comment.comment_id !== comment_id
    );

    setDeleteLoading((prev) => ({
      ...prev,
      deleting: true,
      commentID: comment_id,
      failed: false,
    }));

    setTimeout(() => {
      setDeleteLoading((prev) => ({
        ...prev,
        deleting: false,
        commentID: comment_id,
      }));

      deleteComment(comment_id).then((res) => {
        setFetchedComments(updatedComments);
      });
    }, 2000);
  }

  return (
    <div className="userComments">
      {/* optimistic rendering */}
      <ul>
        {ORMyComment.body.slice(1).map((myComment, i) => {
          return (
            <li key={i} className="comment">
              <p className="comment">{myComment.comment}</p>
              <div className="commentInfo">
                <div className="likeInfo_comment">
                  <img className="voteComment" src={thumbsUp}></img>
                  <img className="voteComment" src={thumbsDown}></img>
                  <p className="likeCount">0</p>
                </div>
                <div style={{ display: "flex", padding: "1rem" }}>
                  <p>Me </p>
                  <p style={{ margin: "auto .5em" }}> @ </p>
                  <p>Just Now</p>
                </div>
              </div>
              <button
                style={{
                  maxWidth: "50%",
                  marginLeft: "auto",
                  marginBottom: "1rem",
                }}
              >
                refresh to delete
              </button>
            </li>
          );
        })}

        {/* true rendering */}
        {fetchedComments.map((info) => {
          return (
            <li key={info.comment_id} className="comment">
              <p className="comment">{info.body}</p>
              <div className="commentInfo">
                <div className="likeInfo_comment">
                  <img className="voteComment" src={thumbsUp}></img>
                  <img className="voteComment" src={thumbsDown}></img>
                  <p className="likeCount">{info.votes}</p>
                </div>
                <div style={{ display: "flex", padding: "1rem" }}>
                  <p>{info.author} </p>
                  <p style={{ margin: "auto .5em" }}> @ </p>
                  <p>{info.created_at}</p>
                </div>
              </div>
              <button
                id={info.comment_id}
                onClick={() => handleDelete(info.comment_id)}
                style={{
                  maxWidth: "50%",
                  marginLeft: "auto",
                  marginBottom: "1rem",
                }}
              >
                {deleteLoading["deleting"] &&
                deleteLoading.commentID === info.comment_id
                  ? "deleting..."
                  : "delete comment"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
