import BlogList from "./BlogList";
import BlogsDetails from "./BlogsDetail";
import CreateBlog from "./CreateBlog";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetails />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
