import { Link, useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import { useState } from "react";


const Books = () => {
    const books = useLoaderData();

    const [displayBooksLength, setDisplayBooksLength] = useState(6)



    return (
        <div className="mb-10">
            <div className="py-9">
                <h1 className="text-4xl font-bold text-center">Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.slice(0, displayBooksLength).map(book => <Link to={`/book-details/${book.bookId}`} key={book.bookId}>
                        <Book
                            book={book}
                        ></Book>
                    </Link>)
                }
            </div>
            <div className={`mb-20 text-center ${displayBooksLength === books.length && 'hidden'}`}>
                <button onClick={() => setDisplayBooksLength(books.length)} className="btn mt-12 text-white px-8 font-bold bg-[#23BE0A]">Show All</button>
            </div>
        </div>
    );
};

export default Books;