
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const params = useLoaderData()
    const id = params.id
    console.log(id)

    const books = [
        {
            "bookId": "1",
            "bookName": "The Silent Patient",
            "author": "Alex Michaelides",
            "image": "../images/book1.png",
            "review": "A gripping psychological thriller about a woman who shot her husband and then stopped speaking. The plot keeps you guessing till the end.",
            "totalPages": 368,
            "rating": 4.5,
            "category": "Thriller",
            "tags": ["Suspense", "Psychological", "Mystery"],
            "publisher": "Celadon Books",
            "yearOfPublishing": 2019
        },
        {
            "bookId": "2",
            "bookName": "Where the Crawdads Sing",
            "author": "Delia Owens",
            "image": "../images/book2.png",
            "review": "A beautifully written novel that blends mystery, romance, and nature. It tells the story of a young girl growing up in isolation in the marshlands of North Carolina.",
            "totalPages": 384,
            "rating": 4.8,
            "category": "Fiction",
            "tags": ["Romance", "Mystery", "Drama"],
            "publisher": "G.P. Putnam's Sons",
            "yearOfPublishing": 2018
        },
        {
            "bookId": "3",
            "bookName": "Educated",
            "author": "Tara Westover",
            "image": "../images/book3.png",
            "review": "A memoir about growing up in a strict, survivalist family and escaping to pursue an education. It's a powerful and inspiring story of self-discovery and resilience.",
            "totalPages": 334,
            "rating": 4.7,
            "category": "Memoir",
            "tags": ["Biography", "Self-help", "Inspiration"],
            "publisher": "Random House",
            "yearOfPublishing": 2018
        },
        {
            "bookId": "4",
            "bookName": "The Midnight Library",
            "author": "Matt Haig",
            "image": "../images/book4.png",
            "review": "A thought-provoking novel about regret, choices, and second chances. The story follows Nora, who explores alternate lives in a library between life and death.",
            "totalPages": 300,
            "rating": 4.2,
            "category": "Fantasy",
            "tags": ["Philosophy", "Self-discovery", "Fantasy"],
            "publisher": "Viking",
            "yearOfPublishing": 2020
        },
        {
            "bookId": "5",
            "bookName": "The Seven Husbands of Evelyn Hugo",
            "author": "Taylor Jenkins Reid",
            "image": "../images/book5.png",
            "review": "A captivating historical fiction novel that explores the glamorous, yet tragic life of an old Hollywood star. It's a story about love, secrets, and fame.",
            "totalPages": 400,
            "rating": 4.6,
            "category": "Historical Fiction",
            "tags": ["Drama", "Romance", "Hollywood"],
            "publisher": "Atria Books",
            "yearOfPublishing": 2017
        },
        {
            "bookId": "6",
            "bookName": "The Alchemist",
            "author": "Paulo Coelho",
            "image": "../images/book6.png",
            "review": "A philosophical novel that tells the story of Santiago, a shepherd boy on a journey to find treasure. It explores the themes of destiny and the importance of following one's dreams.",
            "totalPages": 208,
            "rating": 4.7,
            "category": "Fiction",
            "tags": ["Philosophy", "Adventure", "Inspiration"],
            "publisher": "HarperOne",
            "yearOfPublishing": 1988
        },
        {
            "bookId": "7",
            "bookName": "Atomic Habits",
            "author": "James Clear",
            "image": "../images/book7.png",
            "review": "A practical guide on how to build good habits and break bad ones. The author emphasizes small, incremental changes that lead to significant long-term results.",
            "totalPages": 320,
            "rating": 4.8,
            "category": "Self-help",
            "tags": ["Productivity", "Personal Growth", "Motivation"],
            "publisher": "Avery",
            "yearOfPublishing": 2018
        },
        {
            "bookId": "8",
            "bookName": "The Song of Achilles",
            "author": "Madeline Miller",
            "image": "../images/book8.png",
            "review": "A reimagining of the Iliad, focusing on the relationship between Achilles and Patroclus. A beautifully written, emotional retelling of the Greek myth.",
            "totalPages": 370,
            "rating": 4.7,
            "category": "Historical Fiction",
            "tags": ["Mythology", "Romance", "War"],
            "publisher": "Ecco",
            "yearOfPublishing": 2011
        },
        {
            "bookId": "9",
            "bookName": "Circe",
            "author": "Madeline Miller",
            "image": "../images/book9.png",
            "review": "A modern take on the story of Circe, the sorceress from Greek mythology. The novel explores themes of power, isolation, and transformation.",
            "totalPages": 400,
            "rating": 4.6,
            "category": "Fantasy",
            "tags": ["Mythology", "Fantasy", "Drama"],
            "publisher": "Little, Brown and Company",
            "yearOfPublishing": 2018
        },
        {
            "bookId": "10",
            "bookName": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "image": "https://covers.openlibrary.org/b/id/10413942-L.jpg",
            "review": "An exploration of the history of humankind, from the emergence of Homo sapiens to the present day. Harari provides a thought-provoking perspective on our species' development.",
            "totalPages": 443,
            "rating": 4.6,
            "category": "Non-fiction",
            "tags": ["History", "Anthropology", "Science"],
            "publisher": "Harper",
            "yearOfPublishing": 2011
        }
    ]


    const book = books.find(book => book.bookId === id)
    console.log(book)

    const { image, bookName, publisher, category, review, tags, totalPages, author, yearOfPublishing, rating } = book

    return (
        <div className="container mx-auto my-[60px]">
            <div className="flex gap-12">
                <div className="flex-1 bg-[#1313130D] py-[75px] flex justify-center">
                    <img className="w-[425px] h-[550px]" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className="text-xl font-medium">By: {author}</h3>
                    <hr />
                    <h4 className="text-xl">{category}</h4>
                    <hr />
                    <p><span className="font-bold">Review:</span>{review}</p>
                    <div className='flex gap-8 my-6 items-center font-bold'>Tags:
                        {
                            tags.map((tag, idx) => <ul className='text-[#23BE0A]' key={idx}>
                                <li className='bg-[#23BE0A0D] py-2 px-4 rounded-full'>{tag}</li>
                            </ul>)
                        }
                    </div>
                    <hr />
                    <p>Number of pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;