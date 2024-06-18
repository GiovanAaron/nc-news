import { useState } from "react";

import thumbsUp from "../../assets/thumbs+up.svg";
import { getAllArticles } from "../../apis/get-api";
import { FetchFeaturedArticles } from "../comp_sets";


getAllArticles()

export function Pg_Home() {
  return (
    <div className="appHome">
      <div className="redContainer">
        <h1>What's New?</h1>
      </div>

      <main>
        

        <FetchFeaturedArticles/>
      </main>
     
    

    </div>
  );
}
