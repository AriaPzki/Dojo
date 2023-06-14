import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [IsPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    const newBlog = {
      title,
      body,
      author,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsPending(false);
      console.log("new blog added");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!IsPending && <button>Add Blog</button>}
        {IsPending && <button disabled>Loading ...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
