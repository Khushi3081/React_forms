import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"
import SelectField from "../components/SelectField"
import RadioField from "../components/RadioField"

export default function Third(props) {
    const [errors, setError] = useState({})
   

    const Class = ["First", "Economy", "Business"]
    const travelData = localStorage.getItem("travelData")
    return (
        <div>
            {/* {travelData == null ? (
                <h1>Please fill Travel-detail first</h1>
            ) : ( */}
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
            {props.submit.Travel}
            <SelectField
                label='Class'
                name='Class'
                type='text'
                value={props.values.queryData.Class}
                options={Class}
                handleChange={(e) => props.handleChange(e, "queryData")}
            ></SelectField>
            {errors.Class}
            <TextField
                label='Person'
                name='Person'
                type='number'
                value={props.values.queryData.Person}
                handleChange={(e) => props.handleChange(e, "queryData")}
            ></TextField>
            {props.submit.Person}
            <TextField
                label='Other Service'
                name='OtherService'
                type='text'
                value={props.values.queryData.OtherService}
                handleChange={(e) => props.handleChange(e, "queryData")}
            ></TextField>
            {props.submit.OtherService}

            {/* )} */}
        </div>
    )
}
