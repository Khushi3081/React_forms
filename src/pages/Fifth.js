import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"
import RadioField from "../components/RadioField"
export default function Fifth(props) {
    const [errors, setError] = useState([])

    const paymentData = localStorage.getItem("paymentData")

    return (
        <div>
            {/* {paymentData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
            <h1>Reference-detail form</h1>
            {props.values.referenceData.map((c, index) => {
                return (
                    <>
                        <TextField
                            key={index}
                            label='Name'
                            name={`Name${index}`}
                            type='text'
                            value={c[`Name${index}`]}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div>{props.submit[`Name${index}`]}</div>
                        <TextField
                            key={index}
                            label='Phone Number'
                            name={`Phone${index}`}
                            type='text'
                            value={c[`Phone${index}`]}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div>{props.submit[`Phone${index}`]}</div>
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
                                name={`WhatsApp${index}`}
                                type='checkbox'
                                value='WhatsApp'
                                errors={errors}
                                isCheck={c[`WhatsApp${index}`] === "WhatsApp"}
                                handleChange={(e) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <RadioField
                                name={`Instagram${index}`}
                                type='checkbox'
                                value='Instagram'
                                isCheck={c[`Instagram${index}`] === "Instagram"}
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
                                name={`LinkedIn${index}`}
                                type='checkbox'
                                value='LinkedIn'
                                isCheck={c[`LinkedIn${index}`] === "LinkedIn"}
                                errors={errors}
                                handleChange={(e) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <div>{props.submit[`Instagram${index}`]}</div>
                        </div>
                        <TextField
                            label='Share screenshot'
                            name={`screenshot${index}`}
                            type='file'
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div>{props.submit[`screenshot${index}`]}</div>
                        <TextField
                            name='Remove'
                            type='button'
                            handle={() => props.handleRemove(index)}
                        ></TextField>

                        <TextField
                            name='Add'
                            type='button'
                            handle={() => props.handleAdd(index + 1)}
                        ></TextField>
                    </>
                )
            })}
        </div>
    )
}
