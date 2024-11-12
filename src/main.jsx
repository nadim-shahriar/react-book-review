import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import ErrorElement from './Components/ErrorElement/ErrorElement'
import ListedBooks from './Components/ListedBooks/ListedBooks'
import ViewAllBooks from './Components/ViewAllBBooks/ViewAllBooks'
import BookDetails from './Components/BookDetailes/BookDetails'
import ReadBooks from './Components/ListedBooks/ReadBooks/ReadBooks'
import WishlistBooks from './Components/ListedBooks/WishlistBooks/WishlistBooks'
import PageToRead from './Components/PageToRead/PageToRead'
import HandleRating from './Components/ListedBooks/HandleRating/HandleRating'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch(`/books.json`)
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/books.json'),
        children:[
          {
            path: '/listed-books',
            element:<ReadBooks></ReadBooks>,
            loader:()=> fetch('/books.json')
          },
          {
            path: '/listed-books/wishlist',
            element: <WishlistBooks></WishlistBooks>,
            loader:()=> fetch('/books.json')
          },
          {
            path: '/listed-books/read-books/rating',
            element: <HandleRating></HandleRating>,
            loader: () => fetch('/books.json')
          }
        ]
      },
      {
        path: '/all-books',
        element: <ViewAllBooks></ViewAllBooks>
      },
      {
        path: '/book-details/:id',
        loader: ({params}) => {
          return params
        },
        element: <BookDetails></BookDetails>
      },
      {
        path: '/page-to-read',
        element: <PageToRead></PageToRead>,
        loader: ()=> fetch('books.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
