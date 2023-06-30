import React, { useState } from "react"
import TextField from "../components/TextField"
import RadioField from "../components/RadioField"
import { values } from "lodash"
export default function Fifth(props) {
    const [errors, setError] = useState([])
    const [submit, setSubmit] = useState([])
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)
    const handleSubmit = (e) => {
        e.preventDefault()

        // if (props.values.FirstName === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Name: "Name is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Name
        // }
        // if (props.values.Phone === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Phone: "Phone is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Phone
        // }
        // if (
        //     !props.values.WhatsApp === undefined ||
        //     !props.values.Instagram === undefined ||
        //     !props.values.LinkedIn === undefined
        // ) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Select: "Please Select any one checkbox",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Phone
        // }
        props.handleActivePage(2)
        const info = JSON.parse(localStorage.getItem("data") || "[]")
        let data = [...info]

        data.push(props.values)

        localStorage.setItem("data", JSON.stringify(data))

        props.handleActivePage(6)
    }

    const paymentData = localStorage.getItem("paymentData")

    return (
        <div>
            {/* {paymentData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
            <h1>Reference-detail form</h1>
            {props.values.referenceData.map((c, index) => {
                console.log(index)
                return (
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            marginBottom: "2rem",
                        }}
                    >
                        <TextField
                            key={index}
                            label='Name'
                            name='Name'
                            type='text'
                            value={props.values.Name}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div>{submit.Name}</div>
                        <TextField
                            key={index}
                            label='Phone Number'
                            name='Phone'
                            type='text'
                            value={props.values.Phone}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div>{submit.Phone}</div>

                        <RadioField label='Known through'></RadioField>
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <RadioField
                                name='WhatsApp'
                                type='checkbox'
                                value='WhatsApp'
                                errors={errors}
                                isCheck={
                                    props.values.referenceData[index]
                                        .WhatsApp === "WhatsApp"
                                }
                                handleChange={(e, index) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <RadioField
                                name='Instagram'
                                type='checkbox'
                                value='Instagram'
                                isCheck={
                                    props.values.referenceData[index]
                                        .Instagram === "Instagram"
                                }
                                errors={props.errors}
                                handleChange={(e) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <RadioField
                                name='LinkedIn'
                                type='checkbox'
                                value='LinkedIn'
                                isCheck={
                                    props.values.referenceData[index]
                                        .LinkedIn === "LinkedIn"
                                }
                                errors={errors}
                                handleChange={(e) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <div>{submit.Select}</div>
                        </div>
                        <TextField
                            label='Share screenshot'
                            name='screenshot'
                            type='file'
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <TextField
                            key={index}
                            name='Remove'
                            type='button'
                            handle={() => props.handleRemove(index)}
                        ></TextField>
                    </form>
                )
            })}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "500px",
                    marginLeft: "500px",
                }}
            >
                <TextField
                    name='Previous'
                    type='button'
                    handle={props.handlePrevious}
                ></TextField>
                <TextField
                    name='Next'
                    type='button'
                    handle={handleSubmit}
                ></TextField>
                <TextField
                    name='Add'
                    type='button'
                    handle={props.handleAdd}
                ></TextField>
            </div>
            <div>{submit.name}</div>
        </div>
    )
}
