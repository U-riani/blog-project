import { Link } from "react-router-dom/cjs/react-router-dom.min";


const BlogList = ({data, loadMessage, error}) => {

   

    return ( 
        <div className="blog-list">
            
            {data.map((blog) => (
                <div className="blog" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>written by - <span className="author">{blog.author}</span></p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;