import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>{" "}
      </h1>
      {articles.map(({ id, title, description }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title}
            </h2>
            <p>{description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  console.log(req.headers.cookie);
  console.log(query); //full
  console.log(params); //short

  res.setHeader("Set-Cookie", ["name=Ratamahanta"]);

  const { category } = params;

  const data = await fetch(
    `http://localhost:4000/news?category=${category}`
  ).then((resp) => resp.json());

  return {
    props: {
      articles: data,
      category,
    },
  };
};
