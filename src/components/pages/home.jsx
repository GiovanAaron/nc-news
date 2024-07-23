import { useState } from "react";

import thumbsUp from "../../assets/thumbs+up.svg";
import { getAllArticles } from "../../apis/get-api";
import { FetchFeaturedArticles } from "../comp_sets/fetchFeaturedArticles";





// getAllArticles()

export function Pg_Home() {
  const [isLoading, setIsLoading] = useState({
    featured: true,
    allArticles: true
  
  })

  return (
    <div className="appHome">
      <div className="redContainer_home">
        <h1>What's New?</h1>
      </div>

      <main className="home">
        

        { <FetchFeaturedArticles setIsLoading={setIsLoading} isLoading={isLoading}/> }
      </main>
     
    

    </div>
  );
}
