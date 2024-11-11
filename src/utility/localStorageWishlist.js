import { toast } from "react-toastify";


const getSavedWishlistBooks = () =>{
    const storedBook = localStorage.getItem('wishlist-books')
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}

const saveWishlistBooks = id =>{
    const storedBooks = getSavedWishlistBooks()
    const exists = storedBooks.find(bookId => bookId === id)
    if(!exists){
        storedBooks.push(id)
        localStorage.setItem('wishlist-books', JSON.stringify(storedBooks))
        toast("Added on Wishlist");
    }
    else{
        toast("Already Added ..")
    }
}

const removeWishlistBooks = id =>{
    const storedBooks = getSavedWishlistBooks()
    const exists = storedBooks.filter(bookId => bookId !== id)
    if (exists){
        const newStoredBooks = [...exists]
        localStorage.setItem('wishlist-books', JSON.stringify(newStoredBooks))
    }
    else{
        toast('')
    }
}

export {saveWishlistBooks, getSavedWishlistBooks, removeWishlistBooks}