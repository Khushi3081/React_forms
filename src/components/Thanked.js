import React from "react"
import TextField from "./TextField"
export default function Thanked(props) {
  function handlePrevious(){
    props.handleActivePage(5)

  }
    return (
        <div>
            <h1 style={{ color: "purple" }}>Thank you!!!</h1>

            <TextField
                label='Previous'
                name='Previous'
                type='button'
                handle={handlePrevious}
            ></TextField>
        </div>
    )
}
