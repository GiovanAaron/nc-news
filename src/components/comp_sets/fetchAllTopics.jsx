import { Link } from "react-router-dom";
import { getAllTopics } from "../../apis/get-api";
import { useEffect, useState } from "react";

export const FetchAllTopics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedTopics, setFetchedTopics] = useState([]);

  useEffect(() => {
    getAllTopics()
      .then(({ topics }) => {
        setFetchedTopics(topics);
        
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching topics:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        <ul className="topics">
            <p>Topic/Description</p>
          {fetchedTopics.map((topic, i) => (
              <Link to={`/topics/${topic.slug}`} className="noUnderline">
            <li key={i} className="topics" >
                <h3 className="topicSlug">{topic.slug}</h3>
                <h3 className="topicDesc">{topic.description}</h3>
            </li>
              </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
