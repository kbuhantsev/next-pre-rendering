import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  // когда fallback: true страница загружается
  // это фикс ошибки
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading..</h2>;
  }
  //

  const { id, title, body } = post;
  return (
    <>
      <h2>
        Post {id} {title}
      </h2>
      <p>{body}</p>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (responce) => responce.json()
  );

  const paths = data.slice(0, 3).map((post) => {
    return { params: { postId: `${post.id}` } };
  });

  //fallback: false, генерирует все что в getStaticPaths
  //если нету то 404
  //fallback: true, генерирует все что в getStaticPaths
  //если нету то рендерит и возвращает. нужно проверить на
  //isFallback через роутер
  //"blocking": генерирует все что в getStaticPaths
  //если нету то рендерит и возвращает. при этом никаких
  //лоадеров не показывает.
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((responce) => responce.json());

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};
