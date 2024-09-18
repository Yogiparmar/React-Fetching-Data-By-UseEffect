import { useEffect } from "react";
import { useState } from "react";
import Post from "./components/Post";
import User from "./components/User";
import Comment from "./components/Comment";

function App() {
  const [view, setView] = useState("posts");
  const [data, setData] = useState([]);

  async function getData(view) {
    await fetch(`https://jsonplaceholder.typicode.com/${view}`)
      .then(async (response) => await response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData(view);
  }, [view]);

  return (
    <>
      <header className="w-full py-3 flex flex-col justify-center items-center border-b shadow-md gap-5">
        <h1 className="text-3xl font-semibold">React UseEffect Hook</h1>
        <ul className="w-full flex justify-center items-center gap-5">
          <li
            onClick={() => setView("users")}
            className="px-4 py-2 rounded-md cursor-pointer transition-all duration-500 border border-gray-100 hover:bg-gray-300"
          >
            Users
          </li>
          <li
            onClick={() => setView("posts")}
            className="px-4 py-2 rounded-md cursor-pointer transition-all duration-500 border border-gray-100 hover:bg-gray-300"
          >
            Posts
          </li>
          <li
            onClick={() => setView("comments")}
            className="px-4 py-2 rounded-md cursor-pointer transition-all duration-500 border border-gray-100 hover:bg-gray-300"
          >
            Comments
          </li>
        </ul>
      </header>

      <div className="container mx-auto px-3">
        <section className="w-full py-5">
          <h1 className="text-3xl mb-5">
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </h1>

          <div className="w-full grid grid-cols-3 gap-3 auto-rows-auto">
            {view === "posts" ? (
              <>
                {data &&
                  data.map((ele) => {
                    return <Post key={ele.id} data={ele} />;
                  })}
              </>
            ) : view === "users" ? (
              <>
                {" "}
                {data &&
                  data.map((ele) => {
                    return <User key={ele.id} data={ele} />;
                  })}{" "}
              </>
            ) : (
              <>
                {data &&
                  data.map((ele) => {
                    return <Comment key={ele.id} data={ele} />;
                  })}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
