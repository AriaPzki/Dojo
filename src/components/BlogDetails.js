import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
  const history = useHistory();

  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        console.log("Blog Deleted");
        history.push("/");
      }
    );
  };
  return (
    <div className="blog-details">
      <h1>Blog Deatils - {id}</h1>
      {isPending && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
