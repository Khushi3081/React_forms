import React, { useState } from "react"
import TextField from "../components/TextField"
import RadioField from "../components/RadioField"
export default function Reference(props) {
    const [errors, setError] = useState([])

    return (
        <div>
            <h1>Reference-detail form</h1>
            {props.values.referenceData.map((c, index) => {
                return (
                    <>
                        <TextField
                            label='Name'
                            name='Name'
                            type='text'
                            value={c.Name}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div className='error'>
                            {props.referenceError[index].Name}
                        </div>
                        <TextField
                            key={index}
                            label='Phone Number'
                            name='Phone'
                            type='text'
                            value={c.Phone}
                            errors={props.errors}
                            handleChange={(e) =>
                                props.handleChange(e, "referenceData", index)
                            }
                        ></TextField>
                        <div className='error'>
                            {props.referenceError[index].Phone}
                        </div>
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
                                isCheck={c.WhatsApp === "WhatsApp"}
                                handleChange={(e) =>
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
                                isCheck={c.Instagram === "Instagram"}
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
                                isCheck={c.LinkedIn === "LinkedIn"}
                                errors={errors}
                                handleChange={(e) =>
                                    props.handleChange(
                                        e,
                                        "referenceData",
                                        index
                                    )
                                }
                            ></RadioField>
                            <div className='error'>
                                {props.referenceError[index].Instagram}
                            </div>
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
                        <div className='error'>
                            {props.referenceError[index].screenshot}
                        </div>
                        {index === 0 ? null : (
                            <TextField
                                name='Remove'
                                type='button'
                                handle={() => props.handleRemove(index)}
                            ></TextField>
                        )}
                        <TextField
                            name='Add'
                            type='button'
                            handle={() => props.handleAddField()}
                        ></TextField>
                    </>
                )
            })}
        </div>
    )
}
