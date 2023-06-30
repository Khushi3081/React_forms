import React from "react"

export default function RadioField({ label, ...props }) {
    const errors = props.errors
    return (
        <div style={{ marginRight: "1rem" }}>
            {label ? (
                <label htmlFor={props.name}>{label}</label>
            ) : (
                <>
                    <label style={{ fontSize: "15px" }} htmlFor={props.name}>
                        {props.value}
                    </label>
                    <input
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        checked={props.isCheck}
                        onChange={props.handleChange}
                    />
                </>
            )}
            {errors
                ? errors.map((e) => {
                      const key = Object.keys(e).at(0)
                      const errorMsg = Object.values(e).at(0)
                      if (props.name === key) return errorMsg
                  })
                : null}
        </div>
    )
}
