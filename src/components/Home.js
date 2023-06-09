import { useState, useEffect } from "react";
import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};
export default Home;
