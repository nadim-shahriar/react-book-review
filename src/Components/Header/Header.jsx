import { NavLink} from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive && "bg-white border-2 border-[#23BE0A] text-[#23BE0A]" 
                    }>Home</NavLink></li>
        <li><NavLink to={'/listed-books'} className={({ isActive }) =>
                        isActive && "bg-white border-2 border-[#23BE0A] text-[#23BE0A]" 
                    }>Listed Books</NavLink></li>
        <li><NavLink to={'/page-to-read'} className={({ isActive }) =>
                        isActive && "bg-white border-2 border-[#23BE0A] text-[#23BE0A]" 
                    }>Page to Read</NavLink></li>
    </>

    // console.log(links)
    // const location = useLocation()
    // console.log(location)
    return (
        <div className="navbar bg-base-100 my-5 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu font-bold menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-xl font-bold menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn bg-[#23BE0A] text-xl text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-xl text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;