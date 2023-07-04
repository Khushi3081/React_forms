import "./assets/css/App.css"
import First from "./pages/First"
import Second from "./pages/Second"
import Third from "./pages/Third"
import Fourth from "./pages/Fourth"
import Fifth from "./pages/Fifth"
import Thanked from "./components/Thanked"
import { useEffect, useState } from "react"
import TextField from "./components/TextField"
function App() {
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
                Name0: "",
                Phone0: "",
                WhatsApp0: "",
                Instagram0: "",
                LinkedIn0: "",
                screenshot0: "",
            },
        ],
    })
    const [errors, setError] = useState([])
    const [submit, setSubmit] = useState({})
    const [submitFlag, setSubmitFlag] = useState(false)

    const handleAdd = (index) => {
        let val = { ...values }
        setValue(
            val,
            values.referenceData.push({
                [`Name${index}`]: "",
                [`Phone${index}`]: "",
                [`WhatsApp${index}`]: "",
                [`Instagram${index}`]: "",
                [`LinkedIn${index}`]: "",
                [`screenshot${index}`]: "",
            })
        )
    }

    const handleRemove = (index) => {
        let val = { ...values }
        val.referenceData.splice(index, 1)
        setValue(val)
    }
    const handlePrevious = () => {
        setPage(page - 1)
    }
    useEffect(() => {
        if (Object.keys(submit).length === 0 && submitFlag === true) {
            setPage(page + 1)
        }
    }, [submit])

    const handleNext = (e) => {
        e.preventDefault()
        const submit = {}
        switch (page) {
            case 1:
                submit = {}
                if (values.basicData.FirstName === "") {
                    submit.FirstName = "FirstName is Required"
                }
                if (values.basicData.LastName === "") {
                    submit.LastName = "LastName is Required"
                }
                if (values.basicData.Email === "") {
                    submit.Email = "Email is Required"
                }
                if (values.basicData.PhoneNo === "") {
                    submit.PhoneNo = "PhoneNo is Required"
                }
                if (values.basicData.DateOfBirth === "") {
                    submit.name = "DateOfBirth is Required"
                }
                if (values.basicData.gender === "") {
                    submit.gender = "Gender is Required"
                }
                if (values.basicData.reletion === "") {
                    submit.reletion = "reletion is Required"
                }
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 2:
                submit = {}

                if (values.travelData.From === "") {
                    submit.From = "starting location is Required"
                }
                if (values.travelData.To === "") {
                    submit.To = "ending location is Required"
                }
                if (values.travelData.DateToStart === "") {
                    submit.DateToStart = "Starting Date is Required"
                }
                if (values.travelData.DateToEnd === "") {
                    submit.DateToEnd = "End Date is Required"
                }
                if (values.travelData.Budget === "") {
                    submit.Budget = "Budget is Required"
                }
                if (values.travelData.Triptype === "") {
                    submit.Triptype = "Triptype is Required"
                }
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 3:
                submit = {}

                if (values.queryData.Travel === "") {
                    const errorMsg = "Select travelling medium"
                    submit.Travel = errorMsg
                }
                if (values.queryData.Class === "") {
                    const errorMsg = "Select travelling class"
                    submit.Class = errorMsg
                }
                if (
                    values.queryData.Person === "" ||
                    values.queryData.Person < 1
                ) {
                    const errorMsg = "Select atleast one person"
                    submit.Person = errorMsg
                }
                if (values.queryData.OtherService === "") {
                    const errorMsg = "OtherService is required"
                    submit.OtherService = errorMsg
                }
                setSubmit(submit)
                setSubmitFlag(true)
                break
            case 4:
                const submit = {}
                if (
                    values.paymentData.Payment === "" ||
                    values.paymentData.Payment === "Select"
                ) {
                    const errorMsg = "Select Payment method"
                    submit.Payment = errorMsg
                }
                if (values.paymentData.PaymentDate === "") {
                    const errorMsg = "Select Payment date"
                    submit.PaymentDate = errorMsg
                }
                setSubmit(submit)
                setSubmitFlag(true)
                break
            default:
                break
        }
    }
    const handleChange = (e, step, index) => {
        const { name, value, files } = e.target
        validateValue(e, name, value, index, files)
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
        // step === "referenceData"
        //     ? setValue(() => {
        //           return {
        //               ...values,
        //               [step]: [
        //                   ...values[step],
        //                   {
        //                       ...info,
        //                       [name]: value,
        //                   },
        //               ],
        //           }
        //       })
        //     : setValue(() => {
        //           return {
        //               ...values,
        //               [step]: {
        //                   ...values[step],
        //                   [name]: value,
        //               },
        //           }
        //       })
    }

    const validateValue = async (e, name, value, index, files) => {
        switch (name) {
            case "FirstName":
                if (value.length <= 4) {
                    const errorMsg = "FirstName atleast have 5 letters"
                    {
                        errors.find((errors) => {
                            return errors.FirstName == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { FirstName: errorMsg },
                              ])
                    }
                    return false
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.FirstName ===
                            "FirstName atleast have 5 letters"
                        ) {
                            item.FirstName = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "LastName":
                if (value.length <= 4) {
                    const errorMsg = "LastName atleast have 5 letters"
                    {
                        errors.find((errors) => {
                            return errors.LastName == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { LastName: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.LastName === "LastName atleast have 5 letters"
                        ) {
                            item.LastName = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "Email":
                let mail =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                if (!value.match(mail)) {
                    const errorMsg = "Email is not valid"
                    {
                        errors.find((errors) => {
                            return errors.Email == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Email: errorMsg },
                              ])
                    }
                } else if (!value || value.match(mail)) {
                    let newObj = errors.map((item) => {
                        if (item.Email === "Email is not valid") {
                            item.Email = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "PhoneNo":
                let phone =
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i

                if (!value.match(phone)) {
                    const errorMsg = "Phone no is not contained characters"
                    {
                        errors.find((errors) => {
                            return errors.PhoneNo == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { PhoneNo: errorMsg },
                              ])
                    }
                } else if (value.length > 10) {
                    const errorMsg = "Phone no is not valid"
                    {
                        errors.find((errors) => {
                            return errors.PhoneNo == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { PhoneNo: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.PhoneNo === "Phone no is not valid" ||
                            item.PhoneNo ===
                                "Phone no is not contained characters"
                        ) {
                            item.PhoneNo = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "DateOfBirth":
                const selected = new Date(value)
                const maxDate = new Date()
                if (selected > maxDate) {
                    const errorMsg = "Date must be less then current date"
                    {
                        errors.find((errors) => {
                            return errors.DateOfBirth == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { DateOfBirth: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.DateOfBirth ===
                            "Date must be less then current date"
                        ) {
                            item.DateOfBirth = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "reletion":
                if (value === "Select") {
                    const errorMsg = "Select reletionship status"
                    {
                        errors.find((errors) => {
                            return errors.reletion == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { reletion: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.reletion === "Select reletionship status") {
                            item.reletion = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case "From":
                if (value === "Select") {
                    const errorMsg = "Select Starting location"
                    {
                        errors.find((errors) => {
                            return errors.From == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { From: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.From === "Select Starting location") {
                            item.From = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case "To":
                if (value === "Select") {
                    const errorMsg = "Select destination location"
                    {
                        errors.find((errors) => {
                            return errors.To == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { To: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.To === "Select destination location") {
                            item.To = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case "DateToEnd":
                const endDate = new Date(value)
                const startDate = new Date(values.travelData["DateToStart"])
                if (endDate < startDate) {
                    const errorMsg = "Select Proper date for ending date"
                    {
                        errors.find((errors) => {
                            return errors.DateToEnd == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { DateToEnd: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.DateToEnd ===
                            "Select Proper date for ending date"
                        ) {
                            item.DateToEnd = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case "Budget":
                let mobile =
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i

                if (!value.match(mobile)) {
                    const errorMsg = "Budget is not contained characters"
                    {
                        errors.find((errors) => {
                            return errors.Budget == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Budget: errorMsg },
                              ])
                    }
                } else if (value.length > 6) {
                    const errorMsg = "Budget is not valid"
                    {
                        errors.find((errors) => {
                            return errors.Budget == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Budget: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item.Budget ===
                                "Budget is not contained characters" ||
                            item.Budget === "Budget is not valid"
                        ) {
                            item.Budget = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "Triptype":
                if (value === "Select") {
                    const errorMsg = "Select proper trip-type"
                    {
                        errors.find((errors) => {
                            return errors.Triptype == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Triptype: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Triptype === "Select proper trip-type") {
                            item.Triptype = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case `Name${index}`:
                if (value.length <= 8) {
                    const errorMsg = "Name atleast have 8 letters"
                    {
                        errors.find((errors) => {
                            return errors[`Name${index}`] === errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { [`Name${index}`]: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item[`Name${index}`] ===
                            "Name atleast have 8 letters"
                        ) {
                            item[`Name${index}`] = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case `Known${index}`:
                if (value === "Select") {
                    const errorMsg = "Select known through"
                    {
                        errors.find((errors) => {
                            return errors[`Known${index}`] == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { [`Known${index}`]: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item[`Known${index}`] === "Select known through") {
                            item[`Known${index}`] = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case `screenshot${index}`:
                if (!files[0].name.match(/\.(jpg|png|jpeg|gif)$/)) {
                    const errorMsg = "Select valid image"
                    setError((errors) => [...errors, { screenshot: errorMsg }])
                } else if (files[0].size > 5000000) {
                    const errorMsg = "Image size should be less than 5mb"
                    setError((errors) => [
                        ...errors,
                        { [`Known${index}`]: errorMsg },
                    ])
                } else {
                    let newObj = errors.map((item) => {
                        if (
                            item[`screenshot${index}`] ===
                            "Image size should be less than 5mb"
                        ) {
                            item[`screenshot${index}`] = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
            default:
                break
        }
    }

    const validation = (e) => {
        e.preventDefault()
        const submit = {}
        values.referenceData.map((c, index) => {
            if (c[`Name${index}`] === "") {
                submit[`Name${index}`] = "Name is Required"
            }
            if (c[`Phone${index}`] === "") {
                submit[`Phone${index}`] = "Phone no. is Required"
            }
            if (
                !c[`WhatsApp${index}`] === "" ||
                !c[`Instagram${index}`] === "" ||
                !c[`LinkedIn${index}`] === ""
            ) {
                submit[`Instagram${index}`] = "Known through is Required"
            }
            if (c[`screenshot${index}`] === "") {
                submit[`screenshot${index}`] = "Screenshot is required"
            }
            setSubmit(submit)
        })
        if (Object.keys(submit).length === 0) {
            const info = JSON.parse(localStorage.getItem("data") || "[]")
            let data = [...info]

            data.push(values)

            localStorage.setItem("data", JSON.stringify(data))
        }
    }
    return (
        <>
            <form onSubmit={validation}>
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
                            <Fifth
                                handlePrevious={handlePrevious}
                                handleChange={handleChange}
                                handleAdd={(e) => handleAdd(e)}
                                handleRemove={handleRemove}
                                errors={errors}
                                values={values}
                                submit={submit}
                            />
                        </>
                    )}
                    {page === 6 && <Thanked />}
                    {page === 5 ? (
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
            </form>
        </>
    )
}

export default App
