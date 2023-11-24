import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
                <Link className="navbar-link navbar-link-1" to={`/`}>Blog Website</Link>
                <div className="nav-2">

                <Link className="navbar-link navbar-link-2" to={`/`}>Home</Link>
                <Link className="navbar-link navbar-link-2" to={`/create`}>New Blog</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;