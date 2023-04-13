import React from "react";

const Post = ({ post }) => {
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

  const paths = data.map((post) => {
    return { params: { postId: `${post.id}` } };
  });

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

  return {
    props: { post: data },
  };
};
