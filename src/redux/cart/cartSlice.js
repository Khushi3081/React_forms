import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    updateItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}
const cartSlice = createSlice({
    name: "cart", // name of the slice
    initialState, //provide initial state
    reducers: {
        setData: (state, action) => {
            state.cartItems = action.payload
            return state
        },
        addCount: (state, action) => {
            let data = { ...current(state) }
            data.amount += 1

            const latestData =
                data.cartItems?.length > 0 &&
                data.cartItems?.map((cur, i) => {
                    if (i === action.payload) {
                        return {
                            ...data.cartItems[action.payload],
                            count: data.cartItems[action.payload].count + 1,
                        }
                    }
                    return cur
                })
            data.cartItems = latestData

            return {
                ...data,
            }
        },
        subtractCount: (state, action) => {
            let data = { ...current(state) }
            if (data.cartItems[action.payload].count >= 1) {
                data.amount -= 1

                const latestData =
                    data.cartItems?.length > 0 &&
                    data.cartItems?.map((cur, i) => {
                        if (i === action.payload) {
                            return {
                                ...data.cartItems[action.payload],
                                count: data.cartItems[action.payload].count - 1,
                            }
                        }
                        return cur
                    })
                data.cartItems = latestData

                return {
                    ...data,
                }
            }
        },
        viewDetail: (state, action) => {
            let data = { ...current(state) }
            let view = data.cartItems[action.payload]
            data.updateItems = view
            return { ...data }
        },
        removeItem: (state, action) => {
            let data = { ...current(state) }
            const remainData = data.cartItems.filter(
                (arrow, index) => index !== action.payload
            )
            data.cartItems = remainData
            return { ...data }
        },
        editItems: (state, action) => {
            let data = { ...current(state) }
            let view = data && data.cartItems[action.payload]
            data.updateItems = view
            return { ...data }
        },
        submitEditData: (state, action) => {
            let data = { ...current(state) }

            const { id, title, description, price, category, image } =
                action.payload

            const editData = {
                id: id,
                title: title,
                description: description,
                price: price,
                category: category,
                image: image,
            }
            const res = data.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    item = editData
                }
                return item
            })
            data.cartItems = res

            return {
                ...data,
            }
        },
    },
})

export const {
    setData,
    addCount,
    subtractCount,
    viewDetail,
    removeItem,
    editItems,
    submitEditData,
} = cartSlice.actions
export default cartSlice.reducer
