import React, { useState } from "react"

export default function TextField({ label, ...props }) {
    let errors = props.errors
    var today = new Date()
    var date = today.getDate()
    var month = today.getMonth() + 1
    var year = today.getUTCFullYear()
    if (month < 10) {
        month = "0" + month
    }
    if (date < 10) {
        date = "0" + date
    }
    var maxdate = year + "-" + month + "-" + date
    // if (
    //     referenceError[0].Name === "" &&
    //     referenceError[0].Phone === "" &&
    //     referenceError[0].WhatsApp === "" &&
    //     referenceError[0].Instagram === "" &&
    //     referenceError[0].LinkedIn === "" &&
    //     referenceError[0].screenshot === "" &&
    //     finalSubmitFlag === true
    // )
    return (
        <div style={{ marginRight: "1rem" }}>
            <div>
                {props.type === "file" ? (
                    <>
                        <label htmlFor={props.name}>{label}</label>
                        <input
                            type={props.type}
                            name={props.name}
                            value={props.value}
                            onChange={props.handleChange}
                            min={maxdate}
                            step={props.stage}
                        ></input>
                    </>
                ) : (
                    <div>
                        {props.type === "submit" ? (
                            <>
                                {props.referenceError ? (
                                    <>
                                        <button
                                            type={props.type}
                                            name={props.name}
                                            value={props.name}
                                            disabled
                                            style={{ marginTop: "1rem" }}
                                        >
                                            {props.name}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type={props.type}
                                            name={props.name}
                                            value={props.name}
                                            style={{ marginTop: "1rem" }}
                                        >
                                            {props.name}
                                        </button>
                                    </>
                                )}
                            </>
                        ) : (
                            <div>
                                {props.type === "button" ? (
                                    <>
                                        <input
                                            type={props.type}
                                            name={props.name}
                                            onClick={props.handle}
                                            value={props.name}
                                            style={{ marginTop: "1rem" }}
                                        ></input>
                                    </>
                                ) : (
                                    <div>
                                        {props.name === "DateOfBirth" ? (
                                            <>
                                                <label
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        flexWrap: "wrap",
                                                    }}
                                                    htmlFor={props.name}
                                                >
                                                    {label}
                                                </label>
                                                <input
                                                    type={props.type}
                                                    name={props.name}
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                    value={props.value}
                                                    max={maxdate}
                                                ></input>
                                            </>
                                        ) : (
                                            <>
                                                <label htmlFor={props.name}>
                                                    {label}
                                                </label>
                                                <input
                                                    type={props.type}
                                                    name={props.name}
                                                    value={props.value}
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                    min={maxdate}
                                                    placeholder={
                                                        props.placeholder
                                                    }
                                                ></input>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            {/* {console.log(errors, "++++++++++++++")} */}
            {errors
                ? errors.map((e) => {
                      const key = Object.keys(e).at(0)
                      const errorMsg = Object.values(e).at(0)
                      if (props.name === key)
                          return <div className='error'>{errorMsg}</div>
                  })
                : null}
        </div>
    )
}
// <button
//                                     type={props.type}
//                                     name={props.name}
//                                     value={props.name}
//                                     style={{ marginTop: "1rem" }}
//                                 >
//                                     {props.name}
//                                 </button>
