import React from "react"
import SelectField from "./SelectField"
import RadioField from "./RadioField"
import TextField from "./TextField"

function PreferenceDetail(props) {
    const location = [
        "Ahemdabad",
        "Bhavnnagar",
        "Delhi",
        "Gandhinagar",
        "Rajkot",
        "surat",
        "Pune",
        "Mumbai",
    ]
    const error = props.formState.errors
    // console.log(error)
    return (
        <div>
            <h2>PreferenceDetail</h2>
            <SelectField
                label='Prefered location'
                name='location'
                type='select'
                options={location}
                register={props.register}
            ></SelectField>
            <div className='error'>{error.location?.message}</div>

            <TextField
                label='Expected-Salary'
                name='expectedSalary'
                type='text'
                register={props.register}
            ></TextField>
            <div className='error'>{error.expectedSalary?.message}</div>
            <RadioField label='Technologies'></RadioField>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <RadioField
                    name='tech'
                    type='checkbox'
                    value='java'
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='tech'
                    type='checkbox'
                    value='Python'
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='tech'
                    type='checkbox'
                    value='Android'
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='tech'
                    type='checkbox'
                    value='React.js'
                    register={props.register}
                ></RadioField>
                <RadioField
                    name='tech'
                    type='checkbox'
                    value='Node.js'
                    register={props.register}
                ></RadioField>
            </div>
            <div className='error'>{error.tech?.message}</div>
        </div>
    )
}

export default PreferenceDetail
