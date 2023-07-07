// const submit = {}

export function basicDataValidate(values, submit) {
    if (!values.FirstName || values.FirstName.length <= 4) {
        submit.FirstName = "FirstName is Not Proper"
    }
    if (values.LastName === "" || values.LastName.length <= 4) {
        submit.LastName = "LastName is Not Proper"
    }
    if (values.Email === "" || !values.Email.includes("@")) {
        submit.Email = "Email is Not Proper"
    }
    let phone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    if (
        values.PhoneNo === "" ||
        !values.PhoneNo.match(phone) ||
        values.PhoneNo.length > 10
    ) {
        submit.PhoneNo = "PhoneNo is Not Proper"
    }
    if (values.DateOfBirth === "") {
        submit.DateOfBirth = "DateOfBirth is Required"
    }
    if (values.gender === "") {
        submit.gender = "Gender is Required"
    }
    if (values.reletion === "") {
        submit.reletion = "reletion is Required"
    }
}
export function travelDataValidate(values, submit) {
    if (values.From === "") {
        submit.From = "starting location is Required"
    }
    if (values.To === "") {
        submit.To = "ending location is Required"
    }
    if (values.DateToStart === "") {
        submit.DateToStart = "Starting Date is Required"
    }
    const endDate = new Date(values.DateToEnd)
    const startDate = new Date(values["DateToStart"])
    if (values.DateToEnd === "" || endDate < startDate) {
        submit.DateToEnd = "End Date is Not Proper"
    }
    if (values.Budget === "") {
        submit.Budget = "Budget is Required"
    }
    if (values.Triptype === "") {
        submit.Triptype = "Triptype is Required"
    }
}
export function queryDataValidate(values, submit) {
    if (values.Travel === "") {
        const errorMsg = "Select travelling medium"
        submit.Travel = errorMsg
    }
    if (values.Class === "" || values.Class === "Select") {
        const errorMsg = "Select travelling class"
        submit.Class = errorMsg
    }
    if (values.Person === "" || values.Person < 1) {
        const errorMsg = "Select atleast one person"
        submit.Person = errorMsg
    }
    if (values.OtherService === "") {
        const errorMsg = "OtherService is required"
        submit.OtherService = errorMsg
    }
}
export function paymentDataValidate(values, submit) {
    if (values.Payment === "" || values.Payment === "Select") {
        const errorMsg = "Select Payment method"
        submit.Payment = errorMsg
    }
    if (values.PaymentDate === "") {
        const errorMsg = "Select Payment date"
        submit.PaymentDate = errorMsg
    }
}

export const validateValue = async (
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
) => {
    if (submitFlag === true) {
        switch (name) {
            case "FirstName":
                if (submit.FirstName) {
                    delete submit.FirstName
                } else if (value.length <= 4 && value.length >= 1) {
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
                if (value === "") {
                    submit.FirstName = "FirstName is Not Proper"
                    setSubmit(submit)
                }
                break
            case "LastName":
                if (submit.LastName) {
                    delete submit.LastName
                } else if (value.length <= 4 && value.length >= 1) {
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
                if (value === "") {
                    submit.LastName = "LastName is Not Proper"
                    setSubmit(submit)
                }
                break
            case "Email":
                let mail =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                if (submit.Email) {
                    delete submit.Email
                } else if (value && !value.match(mail)) {
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
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Email === "Email is not valid") {
                            item.Email = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                if (value === "") {
                    submit.Email = "Email is required"
                    setSubmit(submit)
                }
                break
            case "PhoneNo":
                let phone =
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i

                if (submit.PhoneNo) {
                    delete submit.PhoneNo
                } else if (value && !value.match(phone)) {
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
                if (value === "") {
                    submit.PhoneNo = "PhoneNo is Not Proper"
                    setSubmit(submit)
                }
                break
            case "DateOfBirth":
                const selected = new Date(value)
                const maxDate = new Date()
                if (submit.DateOfBirth) {
                    delete submit.DateOfBirth
                } else if (selected > maxDate) {
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
            case "gender":
                if (submit.gender) {
                    delete submit.gender
                }
                break
            case "reletion":
                if (submit.reletion) {
                    delete submit.reletion
                } else if (value === "Select") {
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
        }
    }
    if (submitFlag === true) {
        switch (name) {
            case "From":
                if (submit.From) {
                    delete submit.From
                } else if (value === "Select") {
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
                if (submit.To) {
                    delete submit.To
                } else if (value === "Select") {
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
            case "DateToStart":
                if (submit.DateToStart) {
                    delete submit.DateToStart
                }
                break
            case "DateToEnd":
                const endDate = new Date(value)
                const startDate = new Date(values.travelData["DateToStart"])
                if (submit.DateToEnd) {
                    delete submit.DateToEnd
                } else if (endDate < startDate) {
                    // delete submit.DateToEnd
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

                if (submit.Budget) {
                    delete submit.Budget
                } else if (value && !value.match(mobile)) {
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
                } else if (value === "") {
                    submit.Budget = "Budget is required"
                    setSubmit(submit)
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
                if (submit.Triptype) {
                    delete submit.Triptype
                }
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
        }
    }

    if (submitFlag === true) {
        switch (name) {
            case "Travel":
                if (submit.Travel) {
                    delete submit.Travel
                }
                break
            case "Class":
                if (submit.Class) {
                    delete submit.Class
                }
                break
            case "Person":
                if (submit.Person) {
                    delete submit.Person
                } else if (value > 20) {
                    const errorMsg = "Select atmost 20 people"

                    {
                        errors.find((errors) => {
                            return errors.Person == errorMsg
                        })
                            ? setError(errors)
                            : setError((errors) => [
                                  ...errors,
                                  { Person: errorMsg },
                              ])
                    }
                } else {
                    let newObj = errors.map((item) => {
                        if (item.Person === "Select atmost 20 people") {
                            item.Person = ""
                        }
                        return item
                    })
                    setError(newObj)
                }
                break
            case "OtherService":
                if (submit.OtherService) {
                    delete submit.OtherService
                }
                break
        }
    }
    if (submitFlag === true) {
        switch (name) {
            case "Payment":
                if (submit.Payment) {
                    delete submit.Payment
                }
                break
            case "PaymentDate":
                if (submit.PaymentDate) {
                    delete submit.PaymentDate
                }
                break
        }
    }
    if (submitFlag === true) {
        switch (name) {
            case "Name":
                if (referenceError[index].Name === "Name is required") {
                    delete referenceError[index].Name
                } else if (value && value.length <= 8) {
                    let error = [...referenceError]
                    const errorMsg = "Name atleast have 8 letters"
                    error[index].Name = errorMsg
                    setReferenceError(error)
                } else {
                    let error = [...referenceError]
                    const errorMsg = ""
                    error[index].Name = errorMsg
                    setReferenceError(error)
                    // delete referenceError[index].Name
                }
                if (value === "") {
                    let error = [...referenceError]
                    const errorMsg = "Name is required"
                    error[index].Name = errorMsg
                    setReferenceError(error)
                }
                console.log(referenceError)
                break
            case "WhatsApp":
            case "Instagram":
            case "LinkedIn":
                console.log(
                    referenceError[index].WhatsApp,
                    referenceError[index].Instagram,
                    referenceError[index].LinkedIn
                )
                if (
                    referenceError[index].WhatsApp ||
                    referenceError[index].Instagram ||
                    referenceError[index].LinkedIn
                ) {
                    // delete referenceError[index].WhatsApp
                    // delete referenceError[index].Instagram
                    // delete referenceError[index].LinkedIn
                    let error = [...referenceError]
                    const errorMsg = ""
                    error[index].WhatsApp = errorMsg
                    error[index].Instagram = errorMsg
                    error[index].LinkedIn = errorMsg
                    setReferenceError(error)
                }
                break
            case "Phone":
                let phone =
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
                if (referenceError[index].Phone === "Phone is required") {
                    delete referenceError[index].Phone
                } else if (value && !value.match(phone)) {
                    let error = [...referenceError]
                    const errorMsg = "Phone no is not contained characters"
                    error[index].Phone = errorMsg
                    setReferenceError(error)
                } else if (value.length > 10) {
                    let error = [...referenceError]
                    const errorMsg = "Phone no is not valid"
                    error[index].Phone = errorMsg
                    setReferenceError(error)
                } else {
                    let error = [...referenceError]
                    const errorMsg = ""
                    error[index].Phone = errorMsg
                    setReferenceError(error)
                    // delete referenceError[index].Phone
                }
                if (value === "") {
                    let error = [...referenceError]
                    const errorMsg = "Phone no is required"
                    error[index].Phone = errorMsg
                    setReferenceError(error)
                }
                break
            case "screenshot":
                if (referenceError[index].screenshot) {
                    console.log("error")
                    let error = [...referenceError]
                    const errorMsg = ""
                    error[index].screenshot = errorMsg
                    setReferenceError(error)
                } else if (!files[0].name.match(/\.(jpg|png|jpeg|gif)$/)) {
                    let error = [...referenceError]
                    const errorMsg = "Select image in jpg,png,jpeg and gif mode"
                    error[index].screenshot = errorMsg
                    setReferenceError(error)
                } else if (files[0].size > 5000000) {
                    let error = [...referenceError]
                    const errorMsg = "Image size should be less than 5mb"
                    error[index].screenshot = errorMsg
                    setReferenceError(error)
                } else {
                    // delete referenceError[index].screenshot
                    let error = [...referenceError]
                    const errorMsg = ""
                    error[index].screenshot = errorMsg
                    setReferenceError(error)
                }
            default:
                break
        }
    }
}
