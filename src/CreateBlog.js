import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      setTimeout(() => {
        setIsPending(false);
        history.push('/')
      }, 1000);
    });
  };

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          required
          className="create create-title"
        />
        <label>Blog</label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
          value={body}
          required
          className="create create-body"
        ></textarea>
        <label>Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          value={author}
          required
          className="create create-author"
        />
        {!isPending && <button className="delete-add-button">add blog</button>}
        {isPending && <button className="delete-add-button" disabled>Loading</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
