import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'
import Form from '../Components/Form'
import UpdateForm from '../Components/UpdateForm'
import fetchBooks from '../REDUX/books/thunk/fetchBooks'

const Home = () => {
    const [featured, setFeatured] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);

    const query = useSelector((state) => state.filtered.query);



    //get books
    const allBooks = useSelector((state) => state.books);
    const featuredBooks = allBooks.filter((book) => book.featured === true);

    //handle feature
    const handleSwitchFeatured = () => {
        setFeatured(true)
    }
    const handleSwitchAll = () => {
        setFeatured(false);
    }

    const searchQuery = (data) => {
        return data.filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    }


    return (
        <>
            <main className="py-12 2xl:px-6">
                <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                    <div className="order-2 xl:-order-1">
                        <div className="flex items-center justify-between mb-12">
                            <h4 className="mt-2 text-xl font-bold">Book List</h4>

                            <div className="flex items-center space-x-4">
                                {
                                    !featured ?
                                        <>
                                            <button className="filter-btn active-filter" id="lws-filterAll" onClick={handleSwitchAll} >All</button>
                                            <button className="filter-btn" id="lws-filterFeatured" onClick={handleSwitchFeatured}>Featured</button>
                                        </>
                                        :
                                        <>
                                            <button className="filter-btn" id="lws-filterAll" onClick={handleSwitchAll} >All</button>
                                            <button className="filter-btn active-filter" id="lws-filterFeatured" onClick={handleSwitchFeatured}>Featured</button>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="lws-bookContainer">
                            {/* <!-- Card --> */}
                            {
                                featured ?
                                    featuredBooks.length > 0 ?
                                        searchQuery(featuredBooks)?.map((book) =>
                                            <Card key={book.id} book={book} setUpdateForm={setUpdateForm} />
                                        ) :
                                        <p>No Featured book Added</p>
                                    :
                                    allBooks.length > 0 ?
                                        searchQuery(allBooks)?.map((book) =>
                                            <Card key={book.id} book={book} setUpdateForm={setUpdateForm} />
                                        )
                                        :
                                        <p>No Book Added</p>

                            }
                            {/* card */}
                        </div>
                    </div>
                    <div>
                        {
                            updateForm ?
                                <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                                    <h4 className="mb-8 text-xl font-bold text-center">Update Book</h4>
                                    {/* Form */}
                                    <UpdateForm setUpdateForm={setUpdateForm} />

                                </div>
                                :
                                <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                                    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                                    {/* Form */}
                                    <Form />

                                </div>
                        }

                    </div>
                </div>
            </main>
        </>
    )
}

export default Home