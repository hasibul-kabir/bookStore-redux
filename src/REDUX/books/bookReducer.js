import { ADDEDBOOK, DELBOOK, LOADBOOK, UPDATEDBOOK } from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) => {

    const generateId = (books) => {
        const maxId = books.reduce((acc, book) => Math.max(book.id, acc), -1);
        return maxId + 1;
    }

    switch (action.type) {
        case LOADBOOK:
            return action.payload

        case ADDEDBOOK:
            const { name, author, thumbnail, price, rating, featured } = action.payload;
            return [
                ...state,
                {
                    name,
                    author,
                    thumbnail,
                    price,
                    rating,
                    featured,
                    id: generateId(state),
                }
            ]

        case UPDATEDBOOK:
            const restBooks = state.filter((book) => book.id !== action.payload.id)
            return [
                ...restBooks,
                {
                    ...action.payload
                }
            ]

        case DELBOOK:
            return state.filter((book) => book.id !== action.payload)


        default:
            return state;
    }

}
export default bookReducer