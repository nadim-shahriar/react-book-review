
import { FaChevronDown } from "react-icons/fa6";
import { NavLink, Outlet,  useLocation } from "react-router-dom";


const ListedBooks = () => {
    // const books = useLoaderData()
    // console.log(books)

    

    const location = useLocation()
    // console.log(location)


    return (
        <div className="container mx-auto">
            <div className="bg-[#1313130D] rounded-2xl py-9">
                <h1 className="text-3xl font-bold text-center">Books</h1>
            </div>
            <div className="text-center my-8 ">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white px-10 font-2 text-lg">Sort By <FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] font-2 font-semibold w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of page</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div>

                <NavLink to={'/listed-books'} className={({ isActive }) =>
                    `text-lg pt-4 pb-2 px-5 font-semibold ${location.pathname === '/listed-books' && isActive ? "border-t-4 border-x-4 border-b-8 border-b-white rounded-t-xl bg-gradient-to-t from-white to-gray-200" : ""}`
                }>Read Books</NavLink>
                <NavLink to={'/listed-books/wishlist'} className={({ isActive }) => `text-lg pt-4 pb-2 px-5 ${isActive && "border-t-4 border-x-4 border-b-8  border-b-white rounded-t-xl bg-gradient-to-t from-white to-gray-200"}`}>WishList</NavLink>
                <hr className="mt-[6.5px] border-2" />
            </div>

            <div className="mt-9">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;