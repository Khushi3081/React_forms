import React, { useEffect, useState } from "react"
import TextField from "./TextField"
import SelectField from "./SelectField"
import RadioField from "./RadioField"

export default function Third(props) {
    const [errors, setError] = useState({})
    const [data, setData] = useState([])

    function handleSubmit(e) {
        // e.preventDefault()
        // if (props.values.Travel === undefined) {
        //     const errorMsg = "Select travelling medium"
        //     setError(() => {
        //         return { ...errors, Travel: errorMsg }
        //     })
        //     return false
        // } else {
        //     delete errors.Travel
        // }
        // if (props.values.Class === "Select") {
        //     const errorMsg = "Select travelling class"
        //     setError(() => {
        //         return { ...errors, Class: errorMsg }
        //     })
        // } else {
        //     delete errors.Class
        // }
        // console.log(props.values.Person)
        // if (props.values.Person < 1) {
        //     const errorMsg = "Select atleast one person"
        //     setError(() => {
        //         return { ...errors, Person: errorMsg }
        //     })
        // } else {
        //     delete errors.Person
        // }
        // if (props.values.OtherService) {
        //     const errorMsg = "Select Other Service"
        //     setError(() => {
        //         return { ...errors, OtherService: errorMsg }
        //     })
        // } else {
        //     delete errors.OtherService
        // }
        props.handleActivePage(4)
    }

    const Class = ["First", "Economy", "Business"]
    const travelData = localStorage.getItem("travelData")
    return (
        <div>
            {/* {travelData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
            <form>
                <h1>Travel-detail form</h1>
                <RadioField label='Travel Through'></RadioField>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <RadioField
                        name='Travel'
                        type='radio'
                        value='By Bus'
                        isCheck={props.values.queryData.Travel === "By Bus"}
                        handleChange={(e) => props.handleChange(e, "queryData")}
                    ></RadioField>

                    <RadioField
                        name='Travel'
                        type='radio'
                        value='By Train'
                        isCheck={props.values.queryData.Travel === "By Train"}
                        handleChange={(e) => props.handleChange(e, "queryData")}
                    ></RadioField>
                    <RadioField
                        name='Travel'
                        type='radio'
                        value='By Flight'
                        isCheck={props.values.queryData.Travel === "By Flight"}
                        handleChange={(e) => props.handleChange(e, "queryData")}
                    ></RadioField>
                </div>
                <div>{errors.Travel}</div>
                <SelectField
                    label='Class'
                    name='Class'
                    type='text'
                    value={props.values.queryData.Class}
                    options={Class}
                    handleChange={(e) => props.handleChange(e, "queryData")}
                ></SelectField>
                <div>{errors.Class}</div>
                <TextField
                    label='Person'
                    name='Person'
                    type='number'
                    value={props.values.queryData.Person}
                    handleChange={(e) => props.handleChange(e, "queryData")}
                ></TextField>
                <div>{errors.Person}</div>
                <TextField
                    label='Other Service'
                    name='OtherService'
                    type='text'
                    value={props.values.queryData.OtherService}
                    handleChange={(e) => props.handleChange(e, "queryData")}
                ></TextField>
                <div>{errors.OtherService}</div>
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
