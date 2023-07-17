import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewDetail } from "../redux/cart/cartSlice"
import { useParams } from "react-router-dom"
function ViewData() {
    const { index } = useParams()
    const dispatch = useDispatch()

    dispatch(viewDetail(index))
    const product = useSelector((state) => state.cart.updateItems)
    // console.log(product)
    return (
        <div>
            ViewData
            <table classNameName='table' style={{ margin: "2rem" }}>
                <tr>
                    <th>Id</th>
                    <td>{product.id}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{product.title}</td>
                </tr>

                <tr>
                    <th>price</th>
                    <td>{product.price}Rs.</td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>{product.category}</td>
                </tr>
                <tr>
                    <th>Rating</th>
                    <td>{product.rating.rate}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{product.description}</td>
                </tr>
                <tr>
                    <th>Image</th>
                    <img
                        src={product.image}
                        style={{
                            height: "60px",
                            width: "70px",
                        }}
                    ></img>
                </tr>
            </table>
        </div>
    )
}

export default ViewData
