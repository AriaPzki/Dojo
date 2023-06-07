import { useState } from "react";
import React from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "Lorem Ipsum ...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome Party", body: "Lorem Ipsum ...", author: "yoshi", id: 2 },
    {
      title: "Web Dev Top Tips",
      body: "Lorem Ipsum ...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};
export default Home;
