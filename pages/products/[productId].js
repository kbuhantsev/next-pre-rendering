import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
  // когда fallback: true страница загружается
  // это фикс ошибки
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading..</h2>;
  }
  //

  const { id, title, price, description } = product;
  return (
    <>
      <h2>
        Product {id} {title} {price}
      </h2>
      <p>{description}</p>
    </>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const data = await fetch("http://localhost:4000/products").then((responce) =>
    responce.json()
  );

  const paths = data.slice(0, 1).map((product) => {
    return { params: { productId: `${product.id}` } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const data = await fetch(
    `http://localhost:4000/products/${params.productId}`
  ).then((responce) => responce.json());

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
    revalidate: 10,
  };
};
