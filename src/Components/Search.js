import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { queryByBookName } from '../REDUX/filter/actions';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(queryByBookName(e.target.value))
        setSearchQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(queryByBookName(searchQuery));
        setSearchQuery("");
    }
    return (
        <form className="flex items-center" onSubmit={handleSubmit}>
            <div className="group relative rounded-md bg-white">
                <svg width="20" height="20" fill="currentColor"
                    className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                    </path>
                </svg>
                <input type="text" placeholder="Filter books..." className="search" id="lws-searchBook" value={searchQuery} onChange={handleChange} />
            </div>
        </form>
    )
}

export default Search