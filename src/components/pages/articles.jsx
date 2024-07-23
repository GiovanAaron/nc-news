import { useState } from "react";
import { FetchAllArticles } from "../comp_sets/fetchAllArticles";


export function Pg_Articles (){

    return (
        <div className="appHome">

<div className="redContainer_home">
        <h1>All Articles</h1>
      </div>
            <main className="home">
            <FetchAllArticles/>
            </main>
        </div>

    )


}