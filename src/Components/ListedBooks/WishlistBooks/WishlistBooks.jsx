import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedWishlistBooks } from "../../../utility/localStorageWishlist";
import WishlistBook from "../WishlistBook/WishlistBook";
import EmptyWishlist from "./EmptyWishlist";


const WishlistBooks = () => {
    const books = useLoaderData()
    console.log(books)

    const [wishlistBooks, setWishlistBooks] = useState([])

    useEffect(() => {
        const storedWishlistBooksIds = getSavedWishlistBooks()
        console.log(storedWishlistBooksIds)
        if (books) {
            const booksWishlist = books.filter(book => storedWishlistBooksIds.includes(book.bookId))
            setWishlistBooks(booksWishlist)
        }
    }, [])

    return (
        <div className="my-8 flex flex-col gap-6">
            {
                wishlistBooks.length === 0 && <EmptyWishlist></EmptyWishlist>
            }
            {
                wishlistBooks.map(book => <WishlistBook
                    key={book.bookId}
                    book={book}
                ></WishlistBook>)
            }

        </div>
    );
};

export default WishlistBooks;