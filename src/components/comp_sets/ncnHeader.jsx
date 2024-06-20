import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getAllArticles, getAllCommentsByID, getArticleByID } from "../../apis/get-api";
import { useEffect, useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg";
import thumbsDown from "../../assets/thumbs+down.svg";

export const NCNHeader = () => {
  return (
    <header>
      <img src={logo} alt="Website Logo" />
      <nav aria-label="Main Navigation">
        <ul className="NavBar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/articles">All Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
