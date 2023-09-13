import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <>
        <h1>navbar</h1>
        <div className="links">
            {/* <Link to='/home'>See all Characters</Link> */}
            <Link to='/builder'>Create</Link>
            <br/>
            <Link to='/'>Home page</Link>
        </div>
        </>
    )
}