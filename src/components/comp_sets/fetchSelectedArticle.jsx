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
import { patchArticleVote } from "../../apis/patch-api";

export const FetchSelectedArticle = ({ articleVote, setArticleVote }) => {
  let { articleid } = useParams();

  const [fetchedArticle, setFetchedArticle] = useState({});
  const [ORVote, setORVote] = useState({
    vote: 0,
    clicked: false,
    upVClicked: false,
    downVClicked: false,
  });

  useEffect(() => {
    getArticleByID(articleid).then(({ article }) => {
      setFetchedArticle({
        article_id: article.article_id,
        author: article.author,
        body: article.body,
        created_at: article.created_at,
        title: article.title,
        topic: article.topic,
        votes: article.votes,
      });
    });
  }, []);

  function rateArticle(vote) {
    setORVote((prev) => {
      if (vote === 1 && prev.clicked === false) {
        patchArticleVote(articleid, vote);
        return { ...prev, vote: prev.vote + 1, clicked: !prev.clicked };
      } else if (vote === -1 && prev.clicked === false) {
        patchArticleVote(articleid, vote);
        return { ...prev, vote: prev.vote - 1, clicked: !prev.clicked };
      } else {
        return prev;
      }
    });

    return;
  }

  return (
    <div className="articleBox">
      <div className="redContainer">{fetchedArticle.title}</div>
      <p className="author_open"> by {fetchedArticle.author}</p>
      <p className="articleText">
        {fetchedArticle.body}Lorem ipsum dolor sit amet consectetur. Natoque non
        sed urna habitasse ultrices. Arcu blandit condimentum ultricies risus
        sit.
        {fetchedArticle.body}Risus eu non at massa scelerisque sapien leo.
        Auctor ornare morbi sed urna morbi porttitor.{fetchedArticle.body}
      </p>
      <div className="likeInfo">
        <img
          onClick={() => rateArticle(1)}
          id="thumbsUp"
          className="articleThumb"
          src={thumbsUp}
        />
        <img
          onClick={() => rateArticle(-1)}
          id="thumbsDown"
          className="articleThumb"
          src={thumbsDown}
        />
        <h4 className="likeCount">{fetchedArticle.votes + ORVote.vote}</h4>
      </div>
    </div>
  );
};
