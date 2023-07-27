import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Articles } from "../components/Articles";
import { NotFound } from "./NotFound";
import axios from "axios";
import { Comments } from "../components/Comments";
import AddCommentsForm from "../components/AddCommentsForm";

export const Article = () => {
  const { name } = useParams();
  const [article, setArticle] = useState({ comments: [] });
  const [allArticle, setAllArticle] = useState([]);
  //const article = articles.find((article) => article.name === name);
  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios.get(
        `http://localhost:8000/articles/article/${name}`
      );
      //console.log(result.data.article);
      setArticle(result.data.article);
    };
    fetchArticle();
  }, [name]);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios.get(
        "http://localhost:8000/articles/allArticles"
      );
      //console.log(result.data.articles);
      setAllArticle(result.data.articles);
    };
    fetchArticles();
  }, []);
  if (!article) return <NotFound />;
  const otherArticles = allArticle.filter((article) => article.name !== name);
  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-gray-900 sm:text-4xl">
        {article.name}
      </h1>
      <p className="mx-auto mb-4 text-base leading-relaxed ">
        {article.discription}
      </p>
      <Comments comments={article.comments} />
      <AddCommentsForm articleName={name} /> 8
      <h1 className="my-4 text-xl font-bold text-gray-900 sm:text-2xl">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4 ">
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};
