import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import ArticleList from "./ArticleList"
import About from "./About"

const {name,image,about,posts}= blogData
console.log(blogData.posts)
function App() {
  console.log()
  return (
    <div className="App">
      <Header name= {name}/>
      <About image ={image} about ={about}
      />
      <ArticleList posts ={posts}/>
    </div>
  );
}

export default App;
