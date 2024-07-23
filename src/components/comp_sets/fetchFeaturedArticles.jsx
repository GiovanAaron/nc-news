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
import { getRandomFeatured, getRandomLoremSmall } from "./loremIpsumGen";

export const FetchFeaturedArticles = ({ setIsLoading, isLoading }) => {
 
  const [fetchedArticles, setFetchedArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ article }) => {
      setFetchedArticles(article);

      setIsLoading((prevState) => ({
        ...prevState,
        featured: false,
      }));
    });
  }, []);

  // const featuredArticles = fetchedArticles.splice(0, 5);
  const featuredArticles = getRandomFeatured(fetchedArticles);

  return (
    <div>
      {isLoading.featured ? (
        <p>Loading articles...</p>
      ) : (
        <ul className="featured">
          {featuredArticles.map((article, i) => {
            return (
              <li key={i}>
                <article>
                  <Link to={`/articles/${article.article_id}`}>
                    {" "}
                    <img
                      className="articlePic"
                      src={article.article_img_url}
                    ></img>{" "}
                  </Link>
                  <div className="articlePreview">
                    <Link to={`/articles/${article.article_id}`}>
                      <h2 className="headline">{article.title}</h2>
                      <p className="body">
                        {getRandomLoremSmall()}
                        {article.body}
                        Lorem ipsum dolor sit amet consectetur. Natoque non sed
                        urna habitasse ultrices. Arcu blandit condimentum
                        ultricies risus sit. Risus eu non at massa scelerisque
                        sapien leo. Auctor ornare morbi sed urna morbi
                        porttitor.
                      </p>
                    </Link>
                    <p className="author">by {article.author}</p>
                  </div>
                </article>
                <div className="likeFrame">
                  <img src={thumbsUp}></img>
                  <h3 className="likeCount">{article.votes}</h3>
                </div>
                <h3 className="topicTag">Topic:{article.topic}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
