import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useCostumHook from "./useCostumHook";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
    const {id} = useParams();
    const {data, error, loadMessage} = useCostumHook(`http://localhost:8000/blogs/` + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8000/blogs/` + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div>
            {error && <div>faild fetch</div>}
            {loadMessage && <div>Loading . . .</div>}
            {data && (
                <div className="blog-details">
                    <article>
                        <h2>{data.title}</h2>
                        <p className="written-by">Written by {data.author}</p>
                        <div className="blog-body">
                            <p className="body-paragraph">{data.body}</p>
                        </div>
                    </article>
                    <button className="delete-add-button" onClick={handleDelete}>Delete Blog</button>
                </div>
            )
            }
        </div>
    );
}
 
export default BlogsDetails;