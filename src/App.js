import React from "react";
import Nav from "components/Nav";
import Article from "components/Article/index";
import response from 'assets/article.json'

function App() {
  return (
    <>
    <Nav title="article" />
    <Article article={response.result.article}/>
    </>
    
  );
}

export default App;
