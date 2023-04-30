import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateBook from '../REDUX/books/thunk/updateBook';

const UpdateForm = ({ setUpdateForm }) => {
    const bookToupdate = useSelector((state) => state.filtered.updatedData);
    const dispatch = useDispatch();
    const [name, setName] = useState(bookToupdate.name);
    const [author, setAuthor] = useState(bookToupdate.author);
    const [thumbnail, setThumbnail] = useState(bookToupdate.thumbnail);
    const [price, setPrice] = useState(bookToupdate.price);
    const [rating, setRating] = useState(bookToupdate.rating);
    const [featured, setFeatured] = useState(bookToupdate.featured);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateBook({
            name,
            author,
            thumbnail,
            price: parseFloat(price),
            rating: parseInt(rating),
            featured,
            id: bookToupdate.id
        }))

        setUpdateForm(false)
    }

    return (
        <form className="book-form" onSubmit={handleUpdate}>
            <div className="space-y-2">
                <label for="name">Book Name</label>
                <input required className="text-input" type="text" id="input-Bookname" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label for="category">Author</label>
                <input required className="text-input" type="text" id="input-Bookauthor" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label for="image">Image Url</label>
                <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label for="price">Price</label>
                    <input required className="text-input" type="number" id="input-Bookprice" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="space-y-2">
                    <label for="quantity">Rating</label>
                    <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
            </div>

            <div className="flex items-center">
                <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="submit">Update Book</button>
        </form>
    )
}

export default UpdateForm