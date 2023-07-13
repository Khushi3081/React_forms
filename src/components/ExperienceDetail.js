import React from "react"
import TextField from "./TextField"
import { useFieldArray } from "react-hook-form"

function ExperienceDetail(props) {
    const control = props.control
    const { append, remove, fields } = useFieldArray({
        control,
        name: "ExperienceDetail",
    })
    const error = props.formState.errors.ExperienceDetail
    return (
        <div>
            <h2>ExperienceDetail</h2>
            {fields.map((field, index) => {
                return (
                    <>
                        <section key={field.id}></section>
                        <TextField
                            label='Company-Name'
                            name={`ExperienceDetail[${index}].companyName`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error ? error[index]?.companyName?.message : null}
                        </div>
                        <TextField
                            label='Total experience'
                            name={`ExperienceDetail[${index}].expYear`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error ? error[index]?.expYear?.message : null}
                        </div>
                        <TextField
                            label='Job-Duration'
                            name={`ExperienceDetail[${index}].jobDuration`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error ? error[index]?.jobDuration?.message : null}
                        </div>
                        <TextField
                            label='Last-salary'
                            name={`ExperienceDetail[${index}].salary`}
                            type='text'
                            register={props.register}
                        ></TextField>
                        <div className='error'>
                            {error ? error[index]?.salary?.message : null}
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

export default ExperienceDetail
