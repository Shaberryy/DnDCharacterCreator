import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <>
        <h1>navbar</h1>
        <div>
            <Link to='/home'>See all Characters</Link>
        </div>
        </>
    )
}