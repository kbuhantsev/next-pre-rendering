import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>PostList</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3>
              {post.id} {post.title}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default PostList;

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (responce) => responce.json()
  );

  return {
    props: { posts: data.slice(0, 3) },
  };
};
