import React from "react"

export default function SelectField({ label, ...props }) {
    let option = props.options
    const register = props.register

    return (
        <div style={{ marginRight: "1rem" }}>
            <label htmlFor={props.name}>{label}</label>

            <select
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
                {...register(props.name)}
            >
                <option value='Select'>Select one</option>
                {option.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    )
}
