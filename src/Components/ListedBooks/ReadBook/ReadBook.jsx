import PropTypes from 'prop-types'
import { IoPeopleCircleOutline } from "react-icons/io5";
import { MdInsertPageBreak } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadBook = ({ book }) => {
    console.log(book)

    const {bookId, image, bookName, author, tags, publisher, totalPages, category, rating } = book

    return (
        <div className='flex gap-6 p-6 border rounded-2xl shadow-lg'>
            <div className='px-14 py-8 rounded-2xl bg-[#1313130D]'>
                <img className='w-[130px] h-[172px]' src={image} alt="" />
            </div>
            <div>
                <h3 className='text-2xl mb-4 font-bold'>{bookName}</h3>
                <p className='font-medium'>By: {author}</p>
                <div className='flex gap-8 my-6 items-center font-bold'>Tags
                    {
                        tags.map((tag, idx) => <ul className='text-[#23BE0A]' key={idx}>
                            <li className='bg-[#23BE0A0D] py-2 px-4 rounded-full'>{tag}</li>
                        </ul>)
                    }
                </div>
                <div className='flex mb-4 gap-8'>
                    <p className='flex gap-2 items-center'>
                        <IoPeopleCircleOutline className='text-3xl'/>
                        Publisher: {publisher}
                    </p>
                    <p className='flex gap-2 items-center'>
                        <MdInsertPageBreak className='text-3xl'/>
                        Pages: <span className='font-2'>{totalPages}</span>
                    </p>
                </div>
                <hr />
                <div className='mt-4 flex gap-3'>
                    <div className='bg-[#328EFF26] text-[#328EFF] py-3 px-5 rounded-full'>
                        <p>Category: {category}</p>
                    </div>
                    <div className='bg-[#FFAC3326] text-[#FFAC33] py-3 px-5 rounded-full'>
                        <p>Rating: <span className='font-2'>{rating}</span></p>
                    </div>
                    <Link to={`/book-details/${bookId}`}><button className='btn btn-circle w-[150px] bg-[#23BE0A] text-white text-lg '>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object
}

export default ReadBook;