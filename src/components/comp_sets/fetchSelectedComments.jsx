import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getAllArticles, getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useEffect, useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";




export const FetchSelectedComments = ({ORMyComment}) => {

  let { articleid } = useParams();

  const [fetchedComments, setFetchedComments] = useState([]);

  useEffect(() => {
    getAllCommentsByID(articleid).then(({ comments }) => {

      setFetchedComments(comments)
    });
  }, []);
  

  return (

    <div className="userComments">
      {/* optimistic rendering */}
        <ul >
          {ORMyComment.body.slice(1).map((myComment, i)=> {
          
            return (
            <li key={i} className="comment">
              <p className="comment">
                {myComment.comment}
              </p>
              <div className="commentInfo">
                <div className="likeInfo_comment">
                  <img className="voteComment" src={thumbsUp}></img><img className="voteComment" src={thumbsDown}></img><p className="likeCount">0</p>
                </div>
                <div style={{display:"flex", padding:"1rem"}}>
                    <p>Me </p>
                    <p style={{margin: "auto .5em"}}> @ </p>
                    <p>Just Now</p>
                </div>
              </div>
              <button style={{ maxWidth: "50%", marginLeft:"auto", marginBottom:"1rem"}}>delete comment</button>
            </li>
            )
          })}

          {/* true rendering */}
          {fetchedComments.map((info) => {
            
            
            return (
              <li key={info.comment_id} className="comment">
            <p className="comment">
              {info.body}
            </p>
            <div className="commentInfo">
              <div className="likeInfo_comment">
                <img className="voteComment" src={thumbsUp}></img><img className="voteComment" src={thumbsDown}></img><p className="likeCount">{info.votes}</p>
              </div>
              <div style={{display:"flex", padding:"1rem"}}>
                  <p>{info.author} </p>
                  <p style={{margin: "auto .5em"}}> @ </p>
                  <p>{info.created_at}</p>
              </div>
            </div>
            <button style={{ maxWidth: "50%", marginLeft:"auto", marginBottom:"1rem"}}>delete comment</button>
          </li>

            
            )

          })}
        </ul>
      </div>



  )


}