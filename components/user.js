import React from "react";

function User({ user }) {
  const { name, email } = user;

  return (
    <li>
      Name: {name}, Email:{email}
    </li>
  );
}

export default User;
