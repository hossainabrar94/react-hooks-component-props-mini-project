import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    //console.log(posts)
    const theArticleList = posts.map((element)=>{
        console.log(element)
        return (
        <Article key = {element.id} title = {element.title} date = {element.date} preview = {element.preview}/>
        )
    })
    
    return (
        <main>
            {theArticleList}
        </main>
    )
}

export default ArticleList;