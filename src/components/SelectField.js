import React from "react"

export default function SelectField({ label, ...props }) {
    let option = props.options
    let errors = props.errors

    return (
        <div style={{ marginRight: "1rem" }}>
            <label htmlFor={props.name}>{label}</label>

            <select
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
            >
                <option value='Select'>Select one</option>
                {option.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
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
