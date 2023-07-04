import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"
import SelectField from "../components/SelectField"

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

    const basicData = localStorage.getItem("basicData")

    return (
        <div>
            {/* {basicData == null ? (
                <h1>Please fill Basic-detail first</h1>
            ) : ( */}
            <>
                <h1>Travel-detail form</h1>
                <SelectField
                    label='From(Begginning)'
                    name='From'
                    type='select'
                    options={FromLoc}
                    value={props.values.travelData.From}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                    errors={props.errors}
                ></SelectField>
                <div>{props.submit.From}</div>

                <SelectField
                    label='To(Destination)'
                    name='To'
                    type='select'
                    options={ToLoc}
                    value={props.values.travelData.To}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                    errors={props.errors}
                ></SelectField>
                <div>{props.submit.To}</div>
                <TextField
                    label='DateToStart'
                    name='DateToStart'
                    type='date'
                    value={props.values.travelData.DateToStart}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                ></TextField>
                <div>{props.submit.DateToStart}</div>
                <TextField
                    label='DateToEnd'
                    name='DateToEnd'
                    type='date'
                    value={props.values.travelData.DateToEnd}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                    errors={props.errors}
                ></TextField>
                <div>{props.submit.DateToEnd}</div>
                <TextField
                    label='Budget(approximate)'
                    name='Budget'
                    type='text'
                    value={props.values.travelData.Budget}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                    errors={props.errors}
                ></TextField>
                <div>{props.submit.Budget}</div>

                <SelectField
                    label='Trip-type'
                    name='Triptype'
                    type='text'
                    options={tripType}
                    value={props.values.travelData.Triptype}
                    handleChange={(e) => props.handleChange(e, "travelData")}
                    errors={props.errors}
                ></SelectField>
                <div>{props.submit.Triptype}</div>
            </>
            {/* )} */}
        </div>
    )
}
