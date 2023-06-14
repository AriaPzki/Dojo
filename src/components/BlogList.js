import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog-details/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
