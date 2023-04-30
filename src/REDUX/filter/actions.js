import { BOOKTOUPDATE, SEARCH } from "./actionTypes"

export const bookToUpdate = (book) => {
    return {
        type: BOOKTOUPDATE,
        payload: book
    }
}

export const queryByBookName = (bookName) => {
    return {
        type: SEARCH,
        payload: bookName
    }
}