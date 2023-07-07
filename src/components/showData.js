import React, { useState } from "react"
import TextField from "./TextField"
import FormData from "./Form"
export default function ShowData(props) {
    return (
        <>
            {props.index !== undefined ? (
                <>
                    <table>
                        <thead>
                            <tr id='heading-style'>Basic-Data</tr>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>PhoneNo</th>
                                <th>DateOfBirth</th>
                                <th>Gender</th>
                                <th>Reletionship-status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        props.data[props.index].basicData
                                            .FirstName
                                    }
                                </td>
                                <td>
                                    {props.data[props.index].basicData.LastName}
                                </td>
                                <td>
                                    {props.data[props.index].basicData.Email}
                                </td>
                                <td>
                                    {props.data[props.index].basicData.PhoneNo}
                                </td>
                                <td>
                                    {
                                        props.data[props.index].basicData
                                            .DateOfBirth
                                    }
                                </td>
                                <td>
                                    {props.data[props.index].basicData.gender}
                                </td>
                                <td>
                                    {props.data[props.index].basicData.reletion}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr id='heading-style'>Travel-Data</tr>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th>Start-Date</th>
                                <th>End-Date</th>
                                <th>Budget</th>
                                <th>Trip-type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {props.data[props.index].travelData.From}
                                </td>
                                <td>{props.data[props.index].travelData.To}</td>
                                <td>
                                    {
                                        props.data[props.index].travelData
                                            .DateToStart
                                    }
                                </td>
                                <td>
                                    {
                                        props.data[props.index].travelData
                                            .DateToEnd
                                    }
                                </td>
                                <td>
                                    {props.data[props.index].travelData.Budget}
                                </td>
                                <td>
                                    {
                                        props.data[props.index].travelData
                                            .Triptype
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr id='heading-style'>Query-Data</tr>
                            <tr>
                                <th>Travel</th>
                                <th>Class</th>
                                <th>Person</th>
                                <th>OtherService</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {props.data[props.index].queryData.Travel}
                                </td>
                                <td>
                                    {props.data[props.index].queryData.Class}
                                </td>
                                <td>
                                    {props.data[props.index].queryData.Person}
                                </td>
                                <td>
                                    {
                                        props.data[props.index].queryData
                                            .OtherService
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr id='heading-style'>Payment-Data</tr>
                            <tr>
                                <th>Payment-Method</th>
                                <th>Payment-Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        props.data[props.index].paymentData
                                            .Payment
                                    }
                                </td>
                                <td>
                                    {
                                        props.data[props.index].paymentData
                                            .PaymentDate
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr id='heading-style'>Reference-Data</tr>
                            <tr>
                                <th>Name</th>
                                <th>Phone-No</th>
                                <th>screenshot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data[props.index].referenceData.map(
                                (e, index) => (
                                    <tr>
                                        <td>{e.Name}</td>
                                        <td>{e.Phone}</td>
                                        <td>
                                            <img
                                                src={e.screenshot}
                                                height='50px'
                                                width='80px'
                                            ></img>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <table>
                    <thead>
                        <tr id='heading-style'>Basic-Data</tr>
                        <tr>
                            {/* <th>id</th> */}
                            <th onClick={() => props.handleSort("FirstName")}>
                                FirstName
                            </th>
                            <th onClick={() => props.handleSort("LastName")}>
                                LastName
                            </th>
                            <th onClick={() => props.handleSort("Email")}>
                                Email
                            </th>
                            <th onClick={() => props.handleSort("PhoneNo")}>
                                PhoneNo
                            </th>
                            <th onClick={() => props.handleSort("DateOfBirth")}>
                                DateOfBirth
                            </th>
                            <th>Gender</th>
                            <th>Reletionship-status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((e, index) => (
                            <tr>
                                {/* <td>{Number(Math.random * 10)}</td> */}
                                <td>{e.basicData.FirstName}</td>
                                <td>{e.basicData.LastName}</td>
                                <td>{e.basicData.Email}</td>
                                <td>{e.basicData.PhoneNo}</td>
                                <td>{e.basicData.DateOfBirth}</td>
                                <td>{e.basicData.gender}</td>
                                <td>{e.basicData.reletion}</td>
                                <td>
                                    <TextField
                                        name='view'
                                        type='button'
                                        value='View'
                                        handle={() => props.handleView(index)}
                                    ></TextField>

                                    <TextField
                                        name='edit'
                                        type='button'
                                        value='edit'
                                        handle={() => props.handleEdit(index)}
                                    ></TextField>

                                    <TextField
                                        name='delete'
                                        type='button'
                                        value='delete'
                                        handle={() => props.handleDelete(index)}
                                    ></TextField>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
