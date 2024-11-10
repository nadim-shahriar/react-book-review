import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl my-12 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-[150px]">
                <img
                    src="Book.png"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-black font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <Link to={'/all-books'} >
                        <button className="btn mt-12 text-white px-8 font-bold bg-[#23BE0A]">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;