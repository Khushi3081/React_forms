import React from "react"
import TextField from "./TextField"
import { useFieldArray } from "react-hook-form"

function EducationDetail(props) {
    const control = props.control
    const { append, remove, fields } = useFieldArray({
        control,
        name: "EducationDetail",
    })
    const error = props.formState.errors.EducationDetail
    return (
        <div>
            <h2>EducationDetail</h2>
            {fields.map((field, index) => {
                
                return (
                    <>
                        <section key={field.id}></section>
                        <TextField
                            label='Course-Name'
                            name={`EducationDetail[${index}].course`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error?error[index]?.course?.message:null}
                        </div>
                        <TextField
                            label='Duration'
                            name={`EducationDetail[${index}].duration`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error?error[index]?.duration?.message:null}
                        </div>
                        <TextField
                            label='Percentage'
                            name={`EducationDetail[${index}].percentage`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error?error[index]?.percentage?.message:null}
                        </div>
                        <TextField
                            label='Remove'
                            name='Remove'
                            type='button'
                            handle={() => remove(index)}
                        ></TextField>
                    </>
                )
            })}
            <TextField
                label='Add'
                name='Add'
                type='button'
                handle={() => append({})}
            ></TextField>
        </div>
    )
}

export default EducationDetail
