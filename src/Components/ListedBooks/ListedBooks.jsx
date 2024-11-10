import { FaChevronDown } from "react-icons/fa6";

const ListedBooks = () => {
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
        </div>
    );
};

export default ListedBooks;