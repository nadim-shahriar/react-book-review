import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedReadBooks } from "../../../utility/localStorageReadBooks";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const books = useLoaderData()
    // console.log(books)

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getSavedReadBooks()
        console.log(storedBookIds)
        if (books) {
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId))
            console.log(booksRead)
            setReadBooks(booksRead)
        }
    }, [])

    return (
        <div className="my-8 flex flex-col gap-6">
            {
                readBooks.map(book => <ReadBook 
                    key={book.bookId}
                    book={book}
                ></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;