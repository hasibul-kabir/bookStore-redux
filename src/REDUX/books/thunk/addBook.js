import { addedBook } from "../actions";


const addBook = (bookinfo) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify(bookinfo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })

        const newBook = await res.json();

        dispatch(addedBook(newBook));
    }
}

export default addBook;