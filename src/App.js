import { Route, Routes } from "react-router-dom"
import "./assets/css/App.css"
import First from "./components/First"
import Second from "./components/Second"
import Third from "./components/Third"
import Fourth from "./components/Fourth"
import Fifth from "./components/Fifth"
import Thanked from "./components/Thanked"
import { useState } from "react"
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
                Name: "",
                Phone: "",
                WhatsApp: "",
                Instagram: "",
                LinkedIn: "",
                screenshot: "",
            },
        ],
    })
    const handleAdd = () => {
        console.log("Caalll")
        let val = { ...values }
        setValue(
            val,
            values.referenceData.push({
                Name: "",
                Phone: "",
                WhatsApp: "",
                Instagram: "",
                LinkedIn: "",
                screenshot: "",
            })
        )
    }
    const handleRemove = (index) => {
        console.log(index, "index")
        let val = { ...values }
        val.referenceData.splice(index, 1)
        setValue(val)
    }
    const [errors, setError] = useState([])

    function handleActivePage(page) {
        setPage(page)
    }
    const handlePrevious = () => {
        setPage(page - 1)
    }
    const handleChange = (e, step, index) => {
        const { name, value, files } = e.target

        validateValue(e, name, value, files)

        let val = { ...values }
        if (step === "referenceData") {
            val[step][index][name] = value
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

    const validateValue = async (e, name, value, files) => {
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
                const startDate = new Date(values["DateToStart"])
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
            case "Name":
                if (value.length <= 8) {
                    const errorMsg = "Name atleast have 8 letters"
                    {
                        errors.find((errors) => {
                            return errors.Name == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Name: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Name === "Name atleast have 8 letters") {
                            item.Name = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break

            case "Known":
                if (value === "Select") {
                    const errorMsg = "Select known through"
                    {
                        errors.find((errors) => {
                            return errors.Known == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Known: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Known === "Select known through") {
                            item.Known = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "screenshot":
                if (!files[0].name.match(/\.(jpg|png|jpeg|gif)$/)) {
                    const errorMsg = "Select valid image"
                    setError((errors) => [...errors, { screenshot: errorMsg }])
                } else if (files[0].size > 5000000) {
                    const errorMsg = "Image size should be less than 5mb"
                    setError((errors) => [...errors, { screenshot: errorMsg }])
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Known === "Select known through") {
                            item.Known = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
            default:
                break
        }
    }
    return (
        <>
            {console.log(values)}
            <div className='App'>
                <h1>Welcome to the page!!!!</h1>
                {page === 1 && (
                    <First
                        handleActivePage={handleActivePage}
                        handlePrevious={handlePrevious}
                        handleChange={handleChange}
                        errors={errors}
                        values={values}
                    />
                )}
                {page === 2 && (
                    <Second
                        handleActivePage={handleActivePage}
                        handlePrevious={handlePrevious}
                        handleChange={handleChange}
                        errors={errors}
                        values={values}
                    />
                )}
                {page === 3 && (
                    <Third
                        handleActivePage={handleActivePage}
                        handlePrevious={handlePrevious}
                        handleChange={handleChange}
                        values={values}
                    />
                )}
                {page === 4 && (
                    <Fourth
                        handleActivePage={handleActivePage}
                        handlePrevious={handlePrevious}
                        handleChange={handleChange}
                        values={values}
                    />
                )}
                {page === 5 && (
                    <>
                        <Fifth
                            handleActivePage={handleActivePage}
                            handlePrevious={handlePrevious}
                            handleChange={handleChange}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                            errors={errors}
                            values={values}
                        />
                    </>
                )}
                {page === 6 && <Thanked handleActivePage={handleActivePage} />}
            </div>
        </>
    )
}

export default App
