import React, { useEffect, useState } from "react";
import { Articles } from "../components/Articles";
import axios from "axios";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const result = await axios.get(
      `http://localhost:8000/articles/allArticles`
    );

    console.log(result.data.articles);
    setArticles(result.data.articles);
  };

  return (
    <div className="mb-20 ">
      <h2 className="my-6 text-2xl font-bold text-gray-900 sm:text-4xl">
        Articles
      </h2>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};
