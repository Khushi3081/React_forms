import React, { useState } from "react"
import SelectField from "../components/SelectField"
import TextField from "../components/TextField"

export default function Fourth(props) {
    const PaymentMethod = [
        "Debit-card",
        "Credit-card",
        "Cheque",
        "G-pay",
        "Paytm",
    ]

    const [data, setData] = useState([])
    const [errors, setError] = useState({})

    const handleSubmit = () => {
        // console.log("callll")
        // console.log(props.values.Payment)
        // if (
        //     props.values.Payment === undefined ||
        //     props.values.Payment === "Select"
        // ) {
        //     const errorMsg = "Select Payment method"
        //     setError(() => {
        //         return { ...errors, Payment: errorMsg }
        //     })
        // } else {
        //     delete errors.Payment
        // }
        // if (props.values.PaymentDate === undefined) {
        //     const errorMsg = "Select Payment date"
        //     setError((errors) => {
        //         return { ...errors, PaymentDate: errorMsg }
        //     })
        // } else {
        //     delete errors.PaymentDate
        // }
        // if (props.values.Payment && props.values.PaymentDate) {
        props.handleActivePage(5)
        // }
    }

    const queryData = localStorage.getItem("queryData")
    return (
        <div>
            {/* {queryData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
            <form>
                <h1>Payment-detail form</h1>

                <SelectField
                    label='Payment Method'
                    name='Payment'
                    type='select'
                    options={PaymentMethod}
                    value={props.values.paymentData.Payment}
                    handleChange={(e) => props.handleChange(e, "paymentData")}
                ></SelectField>
                <div>{errors.Payment}</div>
                <TextField
                    label='DateToPayment'
                    name='PaymentDate'
                    type='Date'
                    value={props.values.paymentData.PaymentDate}
                    handleChange={(e) => props.handleChange(e, "paymentData")}
                ></TextField>
                <div>{errors.PaymentDate}</div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <TextField
                        label='Previous'
                        name='Previous'
                        type='button'
                        handle={props.handlePrevious}
                    ></TextField>
                    <TextField
                        label='Next'
                        name='Next'
                        type='button'
                        handle={handleSubmit}
                    ></TextField>
                </div>
            </form>
            {/* )} */}
        </div>
    )
}
