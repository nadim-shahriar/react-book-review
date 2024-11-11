import { toast } from "react-toastify";


const getSavedReadBooks = () =>{
    const storedBook = localStorage.getItem('read-books')
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}

const saveReadBooks = id =>{
    const storedBooks = getSavedReadBooks()
    const exists = storedBooks.find(bookId => bookId === id)
    if(!exists){
        storedBooks.push(id)
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
        toast("Book added to the read list !!");
    }
    else{
        toast("Already Added ..")
    }
}

export {saveReadBooks, getSavedReadBooks}