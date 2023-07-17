import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editItems, submitEditData } from "../redux/cart/cartSlice"

function EditData() {
    const { index } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(editItems(index))

    const product = useSelector((state) => state.cart.updateItems)
    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    const [image, setImage] = useState(product.image)

    const onTitleChange = (e) => setTitle(e.target.value)
    const onDescriptionChange = (e) => setDescription(e.target.value)
    const onPriceChange = (e) => setPrice(e.target.value)
    const onCategoryChange = (e) => setCategory(e.target.value)
    const onImageChange = (e) => setImage(e.target.value)

    function submitData() {
        if (title && description && price && category && image) {
            dispatch(
                submitEditData({
                    id: product.id,
                    title: title,
                    description: description,
                    price: price,
                    category: category,
                    image: image,
                })
            )
        }
        navigate("/")
    }

    return (
        <div>
            <center>
                <td style={{ fontWeight: "bold", fontSize: "2rem" }}>
                    EditData
                </td>
            </center>
            <tr>
                <input
                    type='text'
                    name='title'
                    style={{ height: "50px", width: "50rem" }}
                    value={title}
                    onChange={onTitleChange}
                ></input>
            </tr>
            <br />
            <tr>
                <input
                    type='text'
                    name='description'
                    style={{ height: "50px", width: "50rem" }}
                    value={description}
                    onChange={onDescriptionChange}
                ></input>
            </tr>
            <br />
            <tr>
                <input
                    type='text'
                    name='price'
                    style={{ height: "50px", width: "50rem" }}
                    value={price}
                    onChange={onPriceChange}
                ></input>
            </tr>
            <br />
            <tr>
                <input
                    type='text'
                    name='category'
                    style={{ height: "50px", width: "50rem" }}
                    value={category}
                    onChange={onCategoryChange}
                ></input>
            </tr>
            <br />
            <tr>
                <input
                    type='file'
                    name='image'
                    style={{ height: "50px", width: "50rem" }}
                    value={image}
                    onChange={onImageChange}
                ></input>
            </tr>
            <br />
            <button onClick={() => submitData()}>Update</button>
        </div>
    )
}

export default EditData
