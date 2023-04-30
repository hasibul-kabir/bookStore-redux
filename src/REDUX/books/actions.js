import { LOADBOOK, ADDEDBOOK, UPDATEDBOOK, DELBOOK } from "./actionTypes";

export const loadBooks = (books) => {
    return {
        type: LOADBOOK,
        payload: books
    }
}

export const addedBook = (value) => {
    return {
        type: ADDEDBOOK,
        payload: value
    }
}

export const updatedBook = (updatedValue) => {
    return {
        type: UPDATEDBOOK,
        payload: updatedValue
    }
}

export const deleteBook = (id) => {
    return {
        type: DELBOOK,
        payload: id
    }
}