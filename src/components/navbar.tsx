import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
        </>
    )
}

export default Navbar;