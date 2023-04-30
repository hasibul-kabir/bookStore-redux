import { BOOKTOUPDATE, SEARCH } from "./actionTypes";

const initialState = {
    updatedData: {},
    query: ""
};

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOKTOUPDATE:
            return {
                ...state,
                updatedData: {
                    ...state.updatedData,
                    ...action.payload
                }
            }

        case SEARCH:
            return {
                ...state,
                query: action.payload
            }

        default:
            return state
    }
}

export default filterReducer;