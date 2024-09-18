import React from "react";

export default function Comment({ data }) {
  const { email, body } = data;
  return (
    <>
      <div className="w-full p-3 border rounded-md bg-gray-50 ">
        <h1 className="text-2xl mb-5">{email}</h1>

        <p className="text-lg line-clamp-4">{body}</p>
      </div>
    </>
  );
}
