import { useState } from "react";
import { postComment } from "../../apis/post-api";
import { useParams } from "react-router-dom";


export const CommentBox = ({setORMyComment, ORMyComment}) => {

    let { articleid } = useParams();


    const [commentInput, setCommentInput] = useState({comment:""})

    function handleValueInput(e){

        setCommentInput({comment:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()


        postComment(articleid, commentInput.comment)
        setORMyComment((prev) => {
            
            return {...prev, body: [prev.body,commentInput], submitted: true }

        })

    }

  return (
    <div className="yourCommentBox">
      <div className="redContainer">Comments</div>
      <form className="yourComment" onSubmit={handleSubmit}>
        <textarea
          className="yourComment"
          placeholder="leave comment here"
          type="text"
          onChange={handleValueInput
          }

          value={commentInput.comment}
        ></textarea>

        <button className="yourComment">Post Comment</button>
      </form>
    </div>
  );
};
