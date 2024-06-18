import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { getAllArticles } from "../../apis/get-api";
import { useEffect, useState } from "react";
import thumbsUp from "../../assets/thumbs+up.svg"

export const NCNHeader = () => {

function handleNavigation (e) {

}

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
    }




export const FetchFeaturedArticles = () => {

    const [fetchedArticles, setFetchedArticles] = useState([])

    useEffect(() => {
        getAllArticles().then(({article}) => {
        setFetchedArticles(article)
    
    })
}, [])
const featuredArticles = fetchedArticles.splice(0, 5)

return (

    <ul className="featured">

        {featuredArticles.map((article, i) => {
            
            return (
                <li key={i}>
            <article>
              <img
                className="profilePic"
                src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
              ></img>
              <div className="articlePreview">
                <h2 className="headline">{article.title}</h2>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                  habitasse ultrices. Arcu blandit condimentum ultricies risus sit.
                  Risus eu non at massa scelerisque sapien leo. Auctor ornare morbi
                  sed urna morbi porttitor.
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                 {article.body}
            
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                  habitasse ultrices. Arcu blandit condimentum ultricies risus sit.
                  Risus eu non at massa scelerisque sapien leo. Auctor ornare morbi
                  sed urna morbi porttitor.
                </p>
                <p className="author">by {article.author}</p>
              </div>
            </article>
            <div className="likeFrame">
              <img src={thumbsUp}></img>
              <h3 className="likeCount">{article.votes}</h3>
            </div>
            <h3 className="topicTag">Topic:{article.topic}</h3>
        </li>

            )
        })}

    </ul>

)

}

export const FetchAllArticles = () => {

    const [fetchedArticles, setFetchedArticles] = useState([])

    useEffect(() => {
        getAllArticles().then(({article}) => {
        setFetchedArticles(article)
    
    })
}, [])

return (

    <ul className="featured">

        {fetchedArticles.map((article, i) => {
            
            return (
                <li key={i}>
            <article>
              <img
                className="profilePic"
                src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
              ></img>
              <div className="articlePreview">
                <h2 className="headline">{article.title}</h2>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                  habitasse ultrices. Arcu blandit condimentum ultricies risus sit.
                  Risus eu non at massa scelerisque sapien leo. Auctor ornare morbi
                  sed urna morbi porttitor.
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                 {article.body}
            
                  Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
                  habitasse ultrices. Arcu blandit condimentum ultricies risus sit.
                  Risus eu non at massa scelerisque sapien leo. Auctor ornare morbi
                  sed urna morbi porttitor.
                </p>
                <p className="author">by {article.author}</p>
              </div>
            </article>
            <div className="likeFrame">
              <img src={thumbsUp}></img>
              <h3 className="likeCount">{article.votes}</h3>
            </div>
            <h3 className="topicTag">Topic:{article.topic}</h3>
        </li>

            )
        })}

    </ul>

)

}

 


