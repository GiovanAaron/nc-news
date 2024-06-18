import { useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg"
import thumbsDown from "../../assets/thumbs+down.svg"
import { getArticleByID } from "../../apis/get-api";
import { useParams } from "react-router-dom";
import { FetchSelectedArticle } from "../comp_sets";

export function Pg_ArticleByID (){



    return (
        <main className="openedArticle">
           <FetchSelectedArticle/>


            <div className="yourCommentBox">
                <div className="redContainer">Comments</div>
                <form className="yourComment">
                    <input className="yourComment" placeholder="leave comment here" type="text"></input>

                <button className="yourComment">Post Comment</button>
                </form>
            </div>

            <div>
                <p>comment loerm ipusym consectetur. Natoque non sed urna habitasse ultrices. Arcu blandit
                condimentum ultricies risus sit. Ri</p>
                <div><div><img src={thumbsUp}></img>like frame</div> <p>username</p></div>
                <button>delete comment</button>

            </div>

            
        </main>




    )



}