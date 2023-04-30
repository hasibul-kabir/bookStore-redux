import { updatedBook } from "../actions"


const updateBook = (book) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/books/${book.id}`, {
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })

        const updated = await res.json();
        console.log(updated);

        dispatch(updatedBook(updated))
    }
}

export default updateBook;