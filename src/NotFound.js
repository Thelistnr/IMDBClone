import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound" style={{textAlign:'center', marginTop:'140px'}}>
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <Link to='/'>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;