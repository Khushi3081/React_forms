import * as yup from "yup"

const personalDetailValidate = yup.object().shape({
    FirstName: yup
        .string()
        .required("FirstName is required"),
    LastName: yup
        .string("")
        .required("FirstName is required"),
    // email,
    // phoneNo,
    // dateOfBirth,
    // address,
    // pincode,
    // gender,
})
const educationDetailValidate = yup.object().shape({
    // firstName,
    // lastName,
    // email,
    // phoneNo,
    // dateOfBirth,
    // address,
    // pincode,
    // gender,
})
export { personalDetailValidate, educationDetailValidate }
