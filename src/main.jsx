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
        element: <ListedBooks></ListedBooks>
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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
