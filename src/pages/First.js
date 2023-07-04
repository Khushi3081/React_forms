import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"
import SelectField from "../components/SelectField"
import "../assets/css/TextField.css"
import RadioField from "../components/RadioField"

export default function (props) {
    //Dropdown value
    const relation = ["Married", "Unmarried", "Widow"]

    return (
        <div>
            <h1>Basic-detail form</h1>
            <TextField
                label='FirstName'
                name='FirstName'
                type='text'
                value={props.values.basicData.FirstName}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></TextField>
            <div>{props.submit.FirstName}</div>

            <TextField
                label='LastName'
                name='LastName'
                type='text'
                value={props.values.basicData.LastName}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></TextField>
            <div>{props.submit.LastName}</div>

            <TextField
                label='Email'
                name='Email'
                type='email'
                value={props.values.basicData.Email}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></TextField>
            <div>{props.submit.Email}</div>
            <TextField
                label='PhoneNo'
                name='PhoneNo'
                type='text'
                value={props.values.basicData.PhoneNo}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></TextField>
            <div>{props.submit.PhoneNo}</div>
            <TextField
                label='DateOfBirth'
                name='DateOfBirth'
                type='date'
                value={props.values.basicData.DateOfBirth}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></TextField>
            <RadioField label='Gender'></RadioField>
            <div>{props.submit.DateOfBirth}</div>
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
            <div>{props.submit.gender}</div>
            <SelectField
                label='ReletionshipStatus'
                name='reletion'
                type='select'
                options={relation}
                value={props.values.basicData.reletion}
                handleChange={(e) => props.handleChange(e, "basicData")}
                errors={props.errors}
            ></SelectField>
            <div>{props.submit.reletion}</div>
        </div>
    )
}
