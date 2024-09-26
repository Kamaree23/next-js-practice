"use client";
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  // company: string;
}

const GrabUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  console.log(users.length);
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    }
  };
  // console.log(users);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2 className="card-title">{user.name}</h2>
            <h4>{user.email}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GrabUser;
