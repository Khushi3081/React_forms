import React, { useEffect, useState } from "react"
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

    const queryData = localStorage.getItem("queryData")
    return (
        <div>
            {/* {queryData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
            <h1>Payment-detail form</h1>

            <SelectField
                label='Payment Method'
                name='Payment'
                type='select'
                options={PaymentMethod}
                value={props.values.paymentData.Payment}
                handleChange={(e) => props.handleChange(e, "paymentData")}
            ></SelectField>
            <div>{props.submit.Payment}</div>
            <TextField
                label='DateToPayment'
                name='PaymentDate'
                type='Date'
                value={props.values.paymentData.PaymentDate}
                handleChange={(e) => props.handleChange(e, "paymentData")}
            ></TextField>
            <div>{props.submit.PaymentDate}</div>
            {/* )} */}
        </div>
    )
}
