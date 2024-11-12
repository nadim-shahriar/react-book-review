import PropTypes from 'prop-types'
import { IoStarOutline } from "react-icons/io5";

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags} = book;
    return (
        <div className='border border-[#13131326] rounded-2xl p-6'>
            <div className=' bg-[#F3F3F3] rounded-2xl p-8 flex justify-center'>
                <img className='w-[134px] h-[166px]' src={image} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-8 my-6'>
                {
                    tags.map((tag, idx) => <ul className='text-[#23BE0A]' key={idx}>
                        <li className='bg-[#23BE0A0D] py-2 px-4 rounded-full'>{tag}</li>
                    </ul>)
                }
            </div>
            <div>
                <h3 className='font-bold text-2xl mb-4'>{bookName}</h3>
                <p className='font-medium mb-5'>By: {author}</p>
            </div>
            <hr className='border-dashed' />
            <div className='font-medium mt-5 flex justify-between'>
                <p>{category}</p>
                <p className='font-2 flex gap-2 items-center'>
                    {rating}
                    <IoStarOutline />
                </p>
            </div>
           
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;