import React, { useEffect } from "react"
import { LuShoppingCart } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {
    setData,
    addCount,
    subtractCount,
    removeItem,
} from "../redux/cart/cartSlice"
import { BiCaretUp } from "react-icons/bi"
import { BiCaretDown } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
function Navbar() {
    const products = useSelector((state) => {
        return state.cart
    })
    // console.log(products)
    const dispatch = useDispatch()
    const cartProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err)
            })
        response.data.map((e) => {
            e.count = 0
        })
        dispatch(setData(response.data))
    }

    useEffect(() => {
        if (products?.updateItems?.length === 0) {
            cartProducts()
        }
    }, [])

    let sum = 0
    products.cartItems?.length > 1 &&
        products?.cartItems?.forEach((element) => {
            const total = element.price * element.count
            sum += total
        })
    const navigate = useNavigate()
    return (
        <nav>
            <div classNameName='nav-center'>
                <h3>Redux-toolkit</h3>
                <div classNameName='nav-container'>
                    <LuShoppingCart />
                    <div classNameName='amount-container'>
                        <p classNameName='total-amount'></p>
                    </div>
                    <table classNameName='table'>
                        <thead classNameName='thead-dark'>
                            <tr>
                                <th scope='col'>Id</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>price</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Image</th>
                                <th scope='col'>Add to cart</th>
                                <th scope='col'>Total Amount</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        {products?.cartItems?.map((e, index) => {
                            return (
                                <tbody>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.price}Rs.</td>
                                    <td>{e.category}</td>
                                    {/* <td>{e.rating.rate}</td> */}
                                    <td>
                                        <img
                                            src={e.image}
                                            style={{
                                                height: "60px",
                                                width: "70px",
                                            }}
                                        ></img>
                                    </td>
                                    <td>
                                        <p>
                                            <BiCaretUp
                                                onClick={() => {
                                                    dispatch(addCount(index))
                                                }}
                                            />
                                            {e.count}
                                            <BiCaretDown
                                                onClick={() => {
                                                    dispatch(
                                                        subtractCount(index)
                                                    )
                                                }}
                                            />
                                        </p>
                                    </td>
                                    <td>{e.price * e.count}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                navigate(`/view/${index}`)
                                            }
                                        >
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                navigate(`/edit/${index}`)
                                            }
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                dispatch(removeItem(index))
                                            }
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tbody>
                            )
                        })}
                        <tbody>
                            <td style={{ fontWeight: "bolder" }}>
                                Total quantity = {products.amount}
                            </td>
                            <td style={{ fontWeight: "bolder" }}>
                                Total Price = {sum}
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
