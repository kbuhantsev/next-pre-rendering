import User from "@/components/user";
import React from "react";

const UserList = ({ users }) => {
  return (
    <>
      <h1> Users List</h1>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (responce) => responce.json()
  );

  return {
    props: { users: data },
  };
}
