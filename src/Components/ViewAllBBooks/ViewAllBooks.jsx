import { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';

const ViewAllBooks = () => {

    const [books, setbooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div className='container mx-auto mb-10'>
            <div className="py-9">
                <h1 className="text-4xl font-bold text-center">Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Link to={`/book-details/${book.bookId}`} key={book.bookId}>
                        <Book
                            key={book.bookId}
                            book={book}
                        ></Book>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default ViewAllBooks;