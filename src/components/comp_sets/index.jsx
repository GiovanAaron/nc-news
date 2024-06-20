// import { Link, useParams } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { getAllArticles, getAllCommentsByID, getArticleByID } from "../../apis/get-api";
// import { useEffect, useState } from "react";
// import thumbsUp from "../../assets/thumbs+up.svg";
// import thumbsDown from "../../assets/thumbs+down.svg";

// export const NCNHeader = () => {
//   return (
//     <header>
//       <img src={logo} alt="Website Logo" />
//       <nav aria-label="Main Navigation">
//         <ul className="NavBar">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//           <li>
//             <Link to="/articles">All Articles</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export const FetchFeaturedArticles = () => {
//   const [fetchedArticles, setFetchedArticles] = useState([]);

//   useEffect(() => {
//     getAllArticles().then(({ article }) => {
//       setFetchedArticles(article);
//     });
//   }, []);
//   const featuredArticles = fetchedArticles.splice(0, 5);

//   return (
//     <ul className="featured">
//       {featuredArticles.map((article, i) => {
//         return (
//           <li key={i}>
//             <article>
//               <img
//                 className="profilePic"
//                 src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
//               ></img>
//               <div className="articlePreview">
//                 <Link to={`/articles/${article.article_id}`}>
//                   <h2 className="headline">{article.title}</h2>
//                   <p className="body">
//                     Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
//                     habitasse ultrices. Arcu blandit condimentum ultricies risus
//                     sit. Risus eu non at massa scelerisque sapien leo. Auctor
//                     ornare morbi sed urna morbi porttitor. Lorem ipsum dolor sit
//                     amet consectetur. Natoque non sed urna
//                     {article.body}
//                     Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
//                     habitasse ultrices. Arcu blandit condimentum ultricies risus
//                     sit. Risus eu non at massa scelerisque sapien leo. Auctor
//                     ornare morbi sed urna morbi porttitor.
//                   </p>
//                 </Link>
//                 <p className="author">by {article.author}</p>
//               </div>
//             </article>
//             <div className="likeFrame">
//               <img src={thumbsUp}></img>
//               <h3 className="likeCount">{article.votes}</h3>
//             </div>
//             <h3 className="topicTag">Topic:{article.topic}</h3>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export const FetchAllArticles = () => {
//   const [fetchedArticles, setFetchedArticles] = useState([]);

//   useEffect(() => {
//     getAllArticles().then(({ article }) => {
//       setFetchedArticles(article);
//     });
//   }, []);

//   return (
//     <ul className="featured">
//       {fetchedArticles.map((article, i) => {
//         return (
//           <Link to={`/articles/${article.article_id}`}>
//             <li key={i}>
//               <article>
//                 <img
//                   className="profilePic"
//                   src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
//                 ></img>
//                 <div className="articlePreview">
//                   <h2 className="headline">{article.title}</h2>
//                   <p className="body">
//                     Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
//                     habitasse ultrices. Arcu blandit condimentum ultricies risus
//                     sit. Risus eu non at massa scelerisque sapien leo. Auctor
//                     ornare morbi sed urna morbi porttitor. Lorem ipsum dolor sit
//                     amet consectetur. Natoque non sed urna
//                     {article.body}
//                     Lorem ipsum dolor sit amet consectetur. Natoque non sed urna
//                     habitasse ultrices. Arcu blandit condimentum ultricies risus
//                     sit. Risus eu non at massa scelerisque sapien leo. Auctor
//                     ornare morbi sed urna morbi porttitor.
//                   </p>
//                   <p className="author">by {article.author}</p>
//                 </div>
//               </article>
//               <div className="likeFrame">
//                 <img src={thumbsUp}></img>
//                 <h3 className="likeCount">{article.votes}</h3>
//               </div>
//               <h3 className="topicTag">Topic:{article.topic}</h3>
//             </li>
//           </Link>
//         );
//       })}
//     </ul>
//   );
// };

// export const FetchSelectedArticle = () => {
//   let { articleid } = useParams();

//   const [fetchedArticle, setFetchedArticle] = useState({});

//   useEffect(() => {
//     getArticleByID(articleid).then(({ article }) => {
//       setFetchedArticle({
//         article_id: article.article_id,
//         author: article.author,
//         body: article.body,
//         created_at: article.created_at,
//         title: article.title,
//         topic: article.topic,
//         votes: article.votes,
//       });
//     });
//   }, []);

//   return (
//     <div className="articleBox">
//       <div className="redContainer">{fetchedArticle.title}</div>
//       <p className="author_open"> by {fetchedArticle.author}</p>
//       <p className="articleText">
//       {fetchedArticle.body}Lorem ipsum dolor sit amet consectetur. Natoque non sed urna habitasse
//         ultrices. Arcu blandit condimentum ultricies risus sit.

//         {fetchedArticle.body}Risus eu non at massa scelerisque sapien leo.
//         Auctor ornare morbi sed urna morbi porttitor.{fetchedArticle.body}
//       </p>
//       <div className="likeInfo">
//         <img className="articleThumb" src={thumbsUp} />
//         <img className="articleThumb" src={thumbsDown} />
//         <h4 className="likeCount">{fetchedArticle.votes}</h4>
//       </div>
//     </div>
//   );
// };


// export const FetchSelectedComments = () => {

//   let { articleid } = useParams();

//   const [fetchedComments, setFetchedComments] = useState([]);

//   useEffect(() => {
//     getAllCommentsByID(articleid).then(({ comments }) => {

//       setFetchedComments(comments)
//     });
//   }, []);

//   console.log(fetchedComments)

//   return (

//     <div className="userComments">
//         <ul >
//           {fetchedComments.map((info) => {

//             return (
//               <li key={info.comment_id} className="comment">
//             <p className="comment">
//               {info.body}
//             </p>
//             <div className="commentInfo">
//               <div className="likeInfo_comment">
//                 <img className="voteComment" src={thumbsUp}></img><img className="voteComment" src={thumbsDown}></img><p className="likeCount">{info.votes}</p>
//               </div>
//               <div style={{display:"flex", padding:"1rem"}}>
//                   <p>{info.author} </p>
//                   <p style={{margin: "auto .5em"}}> @ </p>
//                   <p>{info.created_at}</p>
//               </div>
//             </div>
//             <button style={{ maxWidth: "50%", marginLeft:"auto", marginBottom:"1rem"}}>delete comment</button>
//           </li>

            
//             )

//           })}
//         </ul>
//       </div>



//   )


// }