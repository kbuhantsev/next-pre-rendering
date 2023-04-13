import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Create Next App</h1>
      <Link href="/users">Users - &gt;</Link>
      <hr />
      <Link href="/posts">Posts - &gt;</Link>
      <hr />
      <Link href="/products">Products - &gt;</Link>
      <hr />
      <Link href="/news">News - &gt;</Link>
      <hr />
      <Link href="/dashboard">Dashboard - &gt;</Link>
      <hr />
      <Link href="/events">Events - &gt;</Link>
    </>
  );
}
