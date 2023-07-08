import React, { useState } from "react"
import ShowData from "../components/showData"
import "../assets/css/ListStyle.css"
import TextField from "../components/TextField"
import FormData from "../components/Form"
function List() {
    const userInfo = JSON.parse(localStorage.getItem("inform"))
    const [userData, setUserData] = useState(userInfo)
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(3)
    const [sort, setSort] = useState({ order: "ASC" })
    const [index, setIndex] = useState()
    const [formData, setFormData] = useState(false)
    const [editIndex, setEditIndex] = useState()
    const offset = (currentPage - 1) * perPage
    let totalPage = Math.ceil(userData.length / perPage)
    let record = Number(perPage) + Number(offset)
    let data = userData.slice(offset, record)
    const [referenceError, setReferenceError] = useState({
        Name: "",
        Phone: "",
        WhatsApp: "",
        Instagram: "",
        LinkedIn: "",
        screenshot: "",
    })
    function page(e) {
        let noOfRecord = e.target.value
        setPerPage(noOfRecord)
    }
    const pageNumber = []
    for (let i = 0; i < totalPage; i++) {
        pageNumber.push(i)
    }
    function changePage(number) {
        setCurrentPage(number)
    }
    const searchData = (e) => {
        if (e.target.value === "") {
            return setUserData(userInfo)
        } else {
            const result = userData.filter(
                (ele) =>
                    ele.basicData.FirstName.includes(e.target.value) ||
                    ele.basicData.Email.includes(e.target.value)
            )
            setUserData(result)
        }
    }
    function handleSort(colName) {
        setSort({ order: "DESC" })
        if (colName === "DateOfBirth") {
            if (sort.order == "ASC") {
                userData.sort(
                    (a, b) =>
                        new Date(
                            ...a.basicData.DateOfBirth.split("-").reverse()
                        ) -
                        new Date(
                            ...b.basicData.DateOfBirth.split("-").reverse()
                        )
                )
            } else {
                userData.sort(
                    (a, b) =>
                        new Date(
                            ...b.basicData.DateOfBirth.split("-").reverse()
                        ) -
                        new Date(
                            ...a.basicData.DateOfBirth.split("-").reverse()
                        )
                )
            }
        }
        if (colName === "PhoneNo") {
            userData.sort((a, b) => {
                if (sort.order == "ASC") {
                    return a.basicData.PhoneNo - b.basicData.PhoneNo
                } else {
                    return b.basicData.PhoneNo - a.basicData.PhoneNo
                }
            })
        } else {
            userData.sort((a, b) => {
                if (sort.order == "ASC") {
                    return a.basicData.colName < b.basicData.colName ? 1 : -1
                } else {
                    return a.basicData.colName > b.basicData.colName ? 1 : -1
                }
            })
        }
    }
    function handleView(index) {
        setIndex(index)
    }
    function handleEdit(index) {
        setEditIndex(index)
        setFormData(true)
        // navigate("/")
    }
    function handleDelete(index) {
        const newData = [...userData]
        newData.splice(index, 1)
        setUserData(newData)
        localStorage.setItem("information", JSON.stringify(newData))
    }

    return (
        <>
            {formData === true ? (
                <FormData prefillData={data[editIndex]}></FormData>
            ) : (
                <>
                    <div
                        style={{
                            width: "20%",
                            marginLeft: "1rem",
                        }}
                    >
                        <TextField
                            name='search'
                            type='text'
                            placeholder='Search here...'
                            handleChange={searchData}
                        ></TextField>
                    </div>
                    <ShowData
                        index={index}
                        data={data}
                        handleSort={handleSort}
                        handleView={handleView}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    ></ShowData>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <div style={{ width: "10%" }}>
                            <select name='page' id='page' onChange={page}>
                                <option value='0'>Record per page</option>
                                <option value='3'>3</option>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                            </select>
                        </div>
                        <div className='pagination'>
                            {pageNumber.map((no) => (
                                <button
                                    onClick={() => changePage(no + 1)}
                                    className={
                                        currentPage === no + 1
                                            ? "active"
                                            : "page-item"
                                    }
                                >
                                    {no + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default List
