import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import filterReducer from "./filter/filterReducer";


const rootReducer = combineReducers({
    books: bookReducer,
    filtered: filterReducer
})

export default rootReducer;