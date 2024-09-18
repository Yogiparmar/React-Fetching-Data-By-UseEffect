import React from "react";

export default function Post({data}) {
  const { title, body } = data;

  return (
    <>
      <div className="w-full p-3 border rounded-md bg-gray-50 ">
        <h1 className="text-2xl mb-5 line-clamp-1">{title}</h1>

        <p className="text-sm line-clamp-4">{body}</p>
      </div>
    </>
  );
}
