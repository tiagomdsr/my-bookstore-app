import axios from "axios";

export type Book = {
    id: number;
    id_category: number;
    id_publisher: number;
    id_author: number;
    title: string;
    summary: string;
    release_year: string;
    pages: number;
    isbn: string;
}

export async function getBooksList() {
    try {
        const response = await axios.get<Book[]>('http://localhost:3001/books')
        console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
        return [];
    }
}