import React from "react"
import TextField from "./TextField"
import RadioField from "./RadioField"
function PersonalDetail(props) {
    const error = props.formState.errors
    return (
        <div>
            <h2>PersonalDetail</h2>
            <TextField
                label='FirstName'
                name='FirstName'
                type='text'
                // info={props.formState.errors}
                register={props.register}
            ></TextField>
            <div className='error'>{error.FirstName?.message}</div>
            <TextField
                label='LastName'
                name='LastName'
                type='text'
                register={props.register}
            ></TextField>
            <div className='error'>{error.LastName?.message}</div>
            <TextField
                label='email'
                name='email'
                type='text'
                register={props.register}
            ></TextField>
            <div className='error'>{error.email?.message}</div>
            <TextField
                label='phoneNo'
                name='phoneNo'
                type='text'
                register={props.register}
            ></TextField>
            <div className='error'>{error.phoneNo?.message}</div>
            <TextField
                label='dateOfBirth'
                name='dateOfBirth'
                type='date'
                register={props.register}
            ></TextField>
            <div className='error'>{error.dateOfBirth?.message}</div>
            <TextField
                label='address'
                name='address'
                type='textarea'
                register={props.register}
            ></TextField>
            <div className='error'>{error.address?.message}</div>
            <TextField
                label='pinCode'
                name='pinCode'
                type='text'
                register={props.register}
            ></TextField>
            <div className='error'>{error.pinCode?.message}</div>
            <RadioField label='Gender' register={props.register}></RadioField>
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
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='gender'
                    type='radio'
                    value='Female'
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='gender'
                    type='radio'
                    value='Other'
                    register={props.register}
                ></RadioField>
                <div className='error'>{error.gender?.message}</div>
            </div>
        </div>
    )
}

export default PersonalDetail
