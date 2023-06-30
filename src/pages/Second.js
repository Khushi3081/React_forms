import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"
import SelectField from "../components/SelectField"
import { useNavigate } from "react-router-dom"

export default function Second(props) {
    const FromLoc = [
        "Ahemdabad",
        "Rajkot",
        "Surat",
        "Baroda",
        "Jamnagar",
        "Kutch",
        "Bhavnagar",
        "Dwarka",
    ]
    const ToLoc = [
        "Abu",
        "Bombay",
        "Chennai",
        "Goa",
        "Haridwar",
        "Jammu-kashmir",
        "Kerala",
        "Ladaakh",
        "Nainital",
        "Tirupati",
        "Rameshwar",
    ]
    const tripType = [
        "Beach & Relaxation",
        "City Breaks",
        "Culture & History",
        "Family trip",
        "Walking & Trekking",
        "Wildlife & Safaris",
    ]

    const [submit, setSubmit] = useState({})
    const [data, setData] = useState([])
    const handleSubmit = (e) => {
        // e.preventDefault()
        // if (props.values.From === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             From: "starting location is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.From
        // }
        // if (props.values.To === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             To: "ending location is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.To
        // }
        // if (props.values.DateToStart === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             DateToStart: "Starting Date is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.DateToStart
        // }
        // if (props.values.DateToEnd === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             DateToEnd: "End Date is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.DateToEnd
        // }
        // if (props.values.Budget === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Budget: "Budget is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Budget
        // }
        // if (props.values.Triptype === undefined) {
        //     setSubmit(() => {
        //         return {
        //             ...submit,
        //             Triptype: "Triptype is Required",
        //         }
        //     })
        //     return false
        // } else {
        //     delete submit.Triptype
        // }

        props.handleActivePage(3)
    }
    const basicData = localStorage.getItem("basicData")

    return (
        <div>
            {/* {basicData == null ? (
                <h1>Please fill Basic-detail first</h1>
            ) : ( */}
            <>
                <form>
                    <h1>Travel-detail form</h1>
                    <SelectField
                        label='From(Begginning)'
                        name='From'
                        type='select'
                        options={FromLoc}
                        value={props.values.travelData.From}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                        errors={props.errors}
                    ></SelectField>
                    <div>{submit.From}</div>

                    <SelectField
                        label='To(Destination)'
                        name='To'
                        type='select'
                        options={ToLoc}
                        value={props.values.travelData.To}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                        errors={props.errors}
                    ></SelectField>
                    <div>{submit.To}</div>
                    <TextField
                        label='DateToStart'
                        name='DateToStart'
                        type='date'
                        value={props.values.travelData.DateToStart}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                    ></TextField>
                    <div>{submit.DateToStart}</div>
                    <TextField
                        label='DateToEnd'
                        name='DateToEnd'
                        type='date'
                        value={props.values.travelData.DateToEnd}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                        errors={props.errors}
                    ></TextField>
                    <div>{submit.DateToEnd}</div>
                    <TextField
                        label='Budget(approximate)'
                        name='Budget'
                        type='text'
                        value={props.values.travelData.Budget}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                        errors={props.errors}
                    ></TextField>
                    <div>{submit.Budget}</div>

                    <SelectField
                        label='Trip-type'
                        name='Triptype'
                        type='text'
                        options={tripType}
                        value={props.values.travelData.Triptype}
                        handleChange={(e) =>
                            props.handleChange(e, "travelData")
                        }
                        errors={props.errors}
                    ></SelectField>
                    <div>{submit.Triptype}</div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <TextField
                            label='Previous'
                            name='Previous'
                            type='button'
                            handle={props.handlePrevious}
                        ></TextField>
                        <TextField
                            label='Next'
                            name='Next'
                            type='button'
                            handle={handleSubmit}
                        ></TextField>
                    </div>
                </form>
            </>
            {/* )} */}
        </div>
    )
}
