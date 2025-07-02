'use client'

import { Book, getBooksList } from "@/api/api";
import BookCard from "@/components/BookCard";
import { useEffect, useState } from "react";

export default function Shop() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooksList();
            setBooks(data);
            console.log(data)
        }

        fetchBooks();
    }, [])

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {books.map((book, index) => (
                    <BookCard key={index} book={book}/>
                ))}
            </div>
        </div>
    );
}