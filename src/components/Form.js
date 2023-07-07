import "../assets/css/App.css"
import First from "../pages/First"
import Second from "../pages/Second"
import Third from "../pages/Third"
import Fourth from "../pages/Fourth"
import Thanked from "./Thanked"
import { useEffect, useState } from "react"
import TextField from "./TextField"
import {
    basicDataValidate,
    paymentDataValidate,
    queryDataValidate,
    travelDataValidate,
    validateValue,
} from "../validations/validFunction"
import Reference from "../pages/referenceData"
import { useNavigate } from "react-router-dom"

function FormData() {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [values, setValue] = useState({
        basicData: {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNo: "",
            DateOfBirth: "",
            gender: "",
            reletion: "",
        },
        travelData: {
            From: "",
            To: "",
            DateToStart: "",
            DateToEnd: "",
            Budget: "",
            Triptype: "",
        },
        queryData: { Travel: "", Class: "", Person: "", OtherService: "" },
        paymentData: { Payment: "", PaymentDate: "" },
        referenceData: [
            {
                id: 0,
                Name: "",
                Phone: "",
                WhatsApp: "",
                Instagram: "",
                LinkedIn: "",
                screenshot: "",
            },
        ],
    })
    const [errors, setError] = useState([])
    const [submit, setSubmit] = useState([])
    const [submitFlag, setSubmitFlag] = useState(false)
    const [finalSubmitFlag, setFinalSubmitFlag] = useState(false)
    const [flag, setFlag] = useState(false)
    const [referenceError, setReferenceError] = useState([
        {
            Name: "",
            Phone: "",
            WhatsApp: "",
            Instagram: "",
            LinkedIn: "",
            screenshot: "",
        },
    ])

    const handleAddField = () => {
        let val = { ...values }
        let err = [...referenceError]

        values.referenceData.push({
            id: Math.random() * 10,
            Name: "",
            Phone: "",
            WhatsApp: "",
            Instagram: "",
            LinkedIn: "",
            screenshot: "",
        })
        setValue(val)
        err.push({
            Name: "",
            Phone: "",
            WhatsApp: "",
            Instagram: "",
            LinkedIn: "",
            screenshot: "",
        })
        setReferenceError(err)
    }
    const handleRemove = (index) => {
        const id = values.referenceData[index].id
        let val = { ...values }
        const data = val.referenceData.findIndex((obj) => obj.id === id)
        val.referenceData.splice(data, 1)
        setValue(val)
    }
    const handlePrevious = () => {
        setPage(page - 1)
    }
    useEffect(
        () => {
            if (Object.keys(submit).length === 0 && submitFlag === true) {
                setPage(page + 1)
                setSubmitFlag(false)
            }
        },
        [submit],
        [referenceError]
    )
    const handleNext = (e) => {
        e.preventDefault()
        const submit = {}
        switch (page) {
            case 1:
                basicDataValidate(values.basicData, submit)
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 2:
                travelDataValidate(values.travelData, submit)
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 3:
                queryDataValidate(values.queryData, submit)
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 4:
                paymentDataValidate(values.paymentData, submit)
                setSubmit(submit)
                setSubmitFlag(true)
                break
            default:
                break
        }
    }
    const handleChange = (e, step, index) => {
        const { name, value, files } = e.target
        validateValue(
            e,
            name,
            value,
            index,
            files,
            submitFlag,
            submit,
            errors,
            setError,
            setSubmit,
            values,
            referenceError,
            setReferenceError
        )
        let val = { ...values }
        if (step === "referenceData") {
            if (name.includes("screenshot")) {
                var file = files[0]
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function () {
                    val[step][index][name] = reader.result
                }
            } else {
                val[step][index][name] = value
            }
        } else {
            val[step][name] = value
        }
        setValue(val)
    }

    const validationFinal = (e) => {
        e.preventDefault()
        let error = [...referenceError]
        values?.referenceData.forEach((ele, index) => {
            Object?.keys(ele).forEach((obj) => {
                if (ele[obj] === "") {
                    if (
                        obj === "WhatsApp" ||
                        obj === "Instagram" ||
                        obj === "LinkedIn"
                    ) {
                        error[index][obj] = "Social media is requried"
                    } else {
                        error[index][obj] = `${obj} is requried`
                    }
                }
            })
            setReferenceError(error)
        })

        setFinalSubmitFlag(true)
    }

    if (
        referenceError[0].Name === "" &&
        referenceError[0].Phone === "" &&
        referenceError[0].WhatsApp === "" &&
        referenceError[0].Instagram === "" &&
        referenceError[0].LinkedIn === "" &&
        referenceError[0].screenshot === "" &&
        finalSubmitFlag === true
    ) {
        setFlag(true)
        setFinalSubmitFlag(false)
    }
    if (flag === true && finalSubmitFlag === true) {
        const info = JSON.parse(localStorage.getItem("data") || "[]")
        let data = [...info]

        data.push(values)

        localStorage.setItem("data", JSON.stringify(data))
        navigate("/list")
    }

    return (
        <>
            <form onSubmit={validationFinal}>
                <div className='App'>
                    <h1>Welcome to the page!!!!</h1>
                    {page === 1 && (
                        <First
                            handlePrevious={handlePrevious}
                            handleChange={handleChange}
                            errors={errors}
                            values={values}
                            submit={submit}
                        />
                    )}
                    {page === 2 && (
                        <Second
                            handlePrevious={handlePrevious}
                            handleChange={handleChange}
                            errors={errors}
                            values={values}
                            submit={submit}
                        />
                    )}
                    {page === 3 && (
                        <Third
                            handlePrevious={handlePrevious}
                            handleChange={handleChange}
                            errors={errors}
                            values={values}
                            submit={submit}
                        />
                    )}
                    {page === 4 && (
                        <Fourth
                            handlePrevious={handlePrevious}
                            handleChange={handleChange}
                            values={values}
                            submit={submit}
                        />
                    )}
                    {page === 5 && (
                        <>
                            <Reference
                                handlePrevious={handlePrevious}
                                handleChange={handleChange}
                                handleAddField={(e) => handleAddField(e)}
                                handleRemove={handleRemove}
                                referenceError={referenceError}
                                errors={errors}
                                values={values}
                                submit={submit}
                            />
                        </>
                    )}
                    {page === 6 && <Thanked />}

                    {page === 1 ? (
                        <>
                            <TextField
                                label='Next'
                                name='Next'
                                type='button'
                                handle={handleNext}
                            ></TextField>
                        </>
                    ) : (
                        <div>
                            {page === 5 ? (
                                <>
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
                                            handle={handlePrevious}
                                        ></TextField>
                                        <TextField
                                            label='Submit'
                                            name='Submit'
                                            type='submit'
                                            handle={handleNext}
                                        ></TextField>
                                    </div>
                                </>
                            ) : (
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
                                        handle={handlePrevious}
                                    ></TextField>
                                    <TextField
                                        label='Next'
                                        name='Next'
                                        type='button'
                                        handle={handleNext}
                                    ></TextField>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </form>
        </>
    )
}
export default FormData
