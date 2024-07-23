import { useState } from "react";
import { FetchArticlesByTopic } from "../comp_sets/filterByTopic";
import { useParams } from "react-router-dom";


export function Pg_ArticlesByTopic (){
    const {topicName} = useParams()


    return (
        <div className="appHome">

<div className="redContainer_home">
        <h1>Topic: {topicName}</h1>
      </div>
            <main className="home">
            <FetchArticlesByTopic topicName={topicName} />
            </main>
        </div>

    )


}