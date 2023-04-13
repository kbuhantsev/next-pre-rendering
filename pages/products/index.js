import Link from "next/link";
import React from "react";

const ProductsList = ({ products }) => {
  return (
    <>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h3>
              {product.id} {product.title} {product.price}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ProductsList;

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:4000/products").then((responce) =>
    responce.json()
  );

  return {
    props: { products: data },
    revalidate: 10,
  };
};
