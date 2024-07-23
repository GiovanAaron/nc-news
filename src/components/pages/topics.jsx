import { useState } from "react";
import { FetchAllTopics } from "../comp_sets/fetchAllTopics";

export function Pg_topics (){

    return (
        <div className="appHome">
        <div className="redContainer_home">
          <h1>Topics</h1>
        </div>
  
        <main className="topics">


        <FetchAllTopics/>
        </main>
     
    

    </div>

    )


}