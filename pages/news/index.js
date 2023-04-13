import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>News article list</h1>
      {articles.map(({ id, title, category }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title} | {category}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleList;

export const getServerSideProps = async ({ req, res }) => {
  const data = await fetch("http://localhost:4000/news").then((resp) =>
    resp.json()
  );

  return {
    props: {
      articles: data,
    },
  };
};
