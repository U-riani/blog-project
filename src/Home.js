import BlogList from "./BlogList";
import useCostumHook from "./useCostumHook";


const Home = () => {
    const {data, loadMessage, error} = useCostumHook(`http://localhost:8000/blogs`);

    return ( 
        <div className="home">
            {loadMessage && <h2>is Loading ...</h2>}
            {data && <BlogList data={data} error={error} loadMessage={loadMessage}/>}
            {error && <h3>{error}</h3>}
        </div>
     );
}
 
export default Home;