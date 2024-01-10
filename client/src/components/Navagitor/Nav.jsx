import { Link } from "react-router-dom"
import "./nav.css"
const Nav = () => {
    return (
        <div className="nav">
            <Link to="/" className="link">Home page</Link>
            <Link to="/post/:id" className="link">Single post</Link>
            <Link to="/create_post" className="link">Create A post</Link>
        </div >
    )
}

export default Nav
