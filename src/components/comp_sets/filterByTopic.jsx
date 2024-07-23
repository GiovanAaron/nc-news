import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getAllArticles, getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useEffect, useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";
import { getRandomLorem } from "./loremIpsumGen";




export const FetchArticlesByTopic = ({topicName}) => {
  const [fetchedArticles, setFetchedArticles] = useState([]);

  const [isLoading, setIsLoading] = useState({
    allArticles: true
  
  })

  useEffect(() => {
    getAllArticles().then(({ article }) => {
      setFetchedArticles(article);
      setIsLoading((prevState) => ({
        ...prevState,
        allArticles: false,
      }));

    });
  }, []);



  const filteredArticles = fetchedArticles.filter(article => article.topic === topicName)


  return (
    <div>
    {isLoading.allArticles ? (
      <p>Loading articles...</p>
    ) : (
    <ul className="featured">
      {filteredArticles.map((article, i) => {

        return (
          <Link key={i} to={`/articles/${article.article_id}`}>
            <li >
              <article>
                <img
                  
                  className="articlePic"
                  src={article.article_img_url}
                ></img>
                <div className="articlePreview">
                  <h2 className="headline">{article.title}</h2>
                  <p className="body">
                    {getRandomLorem()}
                  </p>
                  <p className="author">by {article.author}</p>
                </div>
              </article>
              <div className="likeFrame">
                <img src={thumbsUp}></img>
                <h3 className="likeCount">{article.votes}</h3>
              </div>
              <h3 className="topicTag">Topic: {article.topic}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
      )}
    </div>
  );
};

