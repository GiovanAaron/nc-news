import { useState } from "react";
import { FetchAllArticles } from "../comp_sets/fetchAllArticles";


export function Pg_Articles (){

    return (
        <div>
            <h3>this is all the articles</h3>
            <FetchAllArticles/>
        </div>

    )


}