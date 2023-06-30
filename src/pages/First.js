import React, { useState } from "react"
import TextField from "../components/TextField"
import SelectField from "../components/SelectField"
import "../assets/css/TextField.css"
import RadioField from "../components/RadioField"

export default function (props) {
    //Dropdown value
    const relation = ["Married", "Unmarried", "Widow"]

    const [data, setData] = useState([])
    const [submit, setSubmit] = useState({})

    const handleSubmit = (e) => {
        // e.preventDefault()

        // if (props.values.FirstName === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             FirstName: "FirstName is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.FirstName
        // }
        // if (props.values.LastName === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             LastName: "LastName is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.LastName
        // }
        // if (props.values.Email === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Email: "Email is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Email
        // }
        // if (props.values.PhoneNo === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             PhoneNo: "PhoneNo is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.PhoneNo
        // }
        // if (props.values.DateOfBirth === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             name: "DateOfBirth is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.DateOfBirth
        // }
        // if (props.values.reletion === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             name: "reletion is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.reletion
        // }
        // if (
        //     props.errors.FirstName === "" ||
        //     props.errors.LastName === "" ||
        //     props.errors.Email === "" ||
        //     props.errors.PhoneNo === "" ||
        //     props.errors.DateOfBirth === "" ||
        //     props.errors.relation === ""
        // ) {
        props.handleActivePage(2)
        // }
    }

    return (
        <div>
            <form>
                <h1>Basic-detail form</h1>
                <TextField
                    label='FirstName'
                    name='FirstName'
                    type='text'
                    value={props.values.basicData.FirstName}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></TextField>
                <div>{submit.FirstName}</div>

                <TextField
                    label='LastName'
                    name='LastName'
                    type='text'
                    value={props.values.basicData.LastName}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></TextField>
                <div>{submit.LastName}</div>

                <TextField
                    label='Email'
                    name='Email'
                    type='email'
                    value={props.values.basicData.Email}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></TextField>
                <div>{submit.Email}</div>
                <TextField
                    label='PhoneNo'
                    name='PhoneNo'
                    type='text'
                    value={props.values.basicData.PhoneNo}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></TextField>
                <div>{submit.PhoneNo}</div>
                <TextField
                    label='DateOfBirth'
                    name='DateOfBirth'
                    type='date'
                    value={props.values.basicData.DateOfBirth}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></TextField>
                <RadioField label='Gender'></RadioField>
                <div>{submit.DateOfBirth}</div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <RadioField
                        name='gender'
                        type='radio'
                        value='Male'
                        isCheck={props.values.basicData.gender === "Male"}
                        handleChange={(e) => props.handleChange(e, "basicData")}
                        errors={props.errors}
                    ></RadioField>
                    <RadioField
                        name='gender'
                        type='radio'
                        value='Female'
                        isCheck={props.values.basicData.gender === "Female"}
                        handleChange={(e) => props.handleChange(e, "basicData")}
                        errors={props.errors}
                    ></RadioField>
                    <RadioField
                        name='gender'
                        type='radio'
                        value='Other'
                        isCheck={props.values.basicData.gender === "Other"}
                        handleChange={(e) => props.handleChange(e, "basicData")}
                        errors={props.errors}
                    ></RadioField>
                </div>
                <div>{submit.gender}</div>
                <SelectField
                    label='ReletionshipStatus'
                    name='reletion'
                    type='select'
                    options={relation}
                    value={props.values.basicData.reletion}
                    handleChange={(e) => props.handleChange(e, "basicData")}
                    errors={props.errors}
                ></SelectField>
                <div>{submit.reletion}</div>

                <TextField
                    label='Next'
                    name='Next'
                    type='button'
                    handle={handleSubmit}
                ></TextField>
            </form>
        </div>
    )
}
