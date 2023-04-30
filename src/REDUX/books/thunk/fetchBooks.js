import { loadBooks } from "../actions";

const fetchBooks = async (dispatch) => {
    const res = await fetch("http://localhost:9000/books");
    const books = await res.json();

    dispatch(loadBooks(books));

}

export default fetchBooks;