import React, { useState } from "react"
import PersonalDetail from "./PersonalDetail"
import EducationDetail from "./EducationDetail"
import ExperienceDetail from "./ExperienceDetail"
import PreferenceDetail from "./PreferenceDetail"
import { useForm, useFieldArray } from "react-hook-form"
import TextField from "./TextField"
import { yupResolver } from "@hookform/resolvers/yup"
import "../assets/css/TextField.css"
import * as yup from "yup"

function Form() {
    const [page, setPage] = useState(1)
    const [values, setValues] = useState({
        PersonalDetail: {
            FirstName: "",
            LastName: "",
            email: "",
            phoneNo: "",
            dateOfBirth: "",
            address: "",
            pinCode: "",
            gender: "",
        },
        EducationDetail: [
            {
                course: "",
                duration: "",
                percentage: "",
            },
        ],
        ExperienceDetail: [
            {
                companyName: "",
                expYear: "",
                jobDuration: "",
                salary: "",
            },
        ],
        PreferenceDetail: {
            location: "",
            expectedSalary: "",
            preferedTechnology: "",
        },
    })
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const now = new Date()
    const setBirthDate = new Date(
        now - (1000 * 60 * 60 * 24 * 365 * 18 - 1000 * 60 * 60 * 24 * 4)
    )
    const location = [
        "Ahemdabad",
        "Bhavnnagar",
        "Delhi",
        "Gandhinagar",
        "Rajkot",
        "surat",
        "Pune",
        "Mumbai",
    ]
    const educationSchema = {
        course: yup.string().required("Course Name is required"),
        duration: yup.string().required("Course Duration is required"),
        percentage: yup
            .number()
            .typeError("Percentage must be in number")
            .min(35, "Percentage is between 35 to 99")
            .max(99, "Percentage is between 35 to 99")
            .required("Percentage is required"),
    }
    const experienceSchema = {
        companyName: yup.string().required("Company name is required"),
        expYear: yup.string().required("Experience-year is required"),
        jobDuration: yup.string().required("Job duration is required"),
        salary: yup
            .number()
            .typeError("Salary must be in number")
            .required("Salary is required"),
    }
    const validationSchema = [
        yup.object().shape({
            FirstName: yup
                .string()
                .required("FirstName is required")
                .matches(
                    /^[a-zA-Z ]*$/,
                    "FirstName is not contained numeric values"
                ),
            LastName: yup
                .string()
                .required("LastName is required")
                .matches(
                    /^[a-zA-Z ]*$/,
                    "LastName is not contained numeric values"
                ),
            email: yup
                .string()
                .required("Email is Required")
                .email("Email is invalid"),
            phoneNo: yup
                .string()
                .required("Phone number is required")
                .matches(phoneRegExp, "Phone number is not valid")
                .min(10)
                .max(10),
            dateOfBirth: yup
                .date()
                .typeError("Date must be in type date")
                .required("Date of Birth is required")
                .max(setBirthDate, "Your age atleast 18 years"),
            address: yup.string().required("Address is required"),
            pinCode: yup
                .number()
                .typeError("Pincode must be in number")
                .required("pincode is required")
                .min(100000, "Pincode must be 6 digit")
                .max(999999, "Pincode must be 6 digit"),
            // .test(
            //     "len",
            //     "Must be exactly 5 characters",
            //     (val) => val.length === 5
            // )

            gender: yup.string().required(),
        }),
        yup.object().shape({
            EducationDetail: yup
                .array()
                .of(yup.object().shape(educationSchema))
                .required("Must have fields"),
        }),
        yup.object().shape({
            ExperienceDetail: yup
                .array()
                .of(yup.object().shape(experienceSchema))
                .required(),
        }),
        yup.object().shape({
            location: yup
                .string()
                .required("Please select a Location")
                .oneOf(location, "Select location from dropdown"),
            expectedSalary: yup
                .number()
                .typeError("Salary must be in number")
                .required("Salary is required"),
            tech: yup
                .array()
                .typeError("Select atleast one technology")
                .min(1)
                .of(yup.string().required())
                .required("Select atleast one technology"),
        }),
    ]
    const method = useForm({
        resolver: yupResolver(validationSchema[page - 1]),
        defaultValues: {
            EducationDetail: [
                {
                    course: "",
                    duration: "",
                    percentage: "",
                },
            ],
            ExperienceDetail: [
                {
                    companyName: "",
                    expYear: "",
                    jobDuration: "",
                    salary: "",
                },
            ],
        },
    })
    console.log(method.formState.errors)
    const set = (data) => {
        const PreferenceDetail = {
            location: data.location,
            expectedSalary: data.expectedSalary,
            preferedTechnology: data.tech,
        }
        let val = { ...values }
        switch (page) {
            case 1:
                val["PersonalDetail"] = data
                break
            case 2:
                val["EducationDetail"] = data["EducationDetail"]
                break
            case 3:
                val["ExperienceDetail"] = data["ExperienceDetail"]
                break
            case 4:
                val["PreferenceDetail"] = PreferenceDetail
                break
            default:
                break
        }
        setValues(val)
        if (page < 4) {
            setPage(page + 1)
        }
        if (Object.values(PreferenceDetail).includes(undefined) === false) {
            if (localStorage.getItem("reacthook")) {
                const retriveData = JSON.parse(
                    localStorage.getItem("reacthook")
                )
                if (retriveData?.length) {
                    let lastIdIndex = retriveData.length - 1
                    let lastId = retriveData[lastIdIndex].PersonalDetail.id
                    values.PersonalDetail["id"] = lastId + 1
                    retriveData.push(values)
                    localStorage.setItem(
                        "reacthook",
                        JSON.stringify(retriveData)
                    )
                }
            } else {
                const info = []
                values.PersonalDetail["id"] = 1
                info.push(values)
                localStorage.setItem("reacthook", JSON.stringify(info))
            }
        }
    }
    return (
        <form onSubmit={method.handleSubmit(set)} method='POST'>
            <div>
                {page === 1 && <PersonalDetail {...method} />}
                {page === 2 && <EducationDetail {...method} />}
                {page === 3 && <ExperienceDetail {...method} />}
                {page === 4 && <PreferenceDetail {...method} />}
            </div>
            <div>
                {page === 1 ? (
                    <>
                        <TextField
                            label='Next'
                            name='Next'
                            type='submit'
                            // handle={handleNext}
                        ></TextField>
                    </>
                ) : (
                    <div>
                        {page === 4 ? (
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
                                    ></TextField>
                                    <TextField
                                        label='Submit'
                                        name='Submit'
                                        type='submit'
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
                                ></TextField>
                                <TextField
                                    label='Next'
                                    name='Next'
                                    type='submit'
                                    // handle={handleNext}
                                ></TextField>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </form>
    )
}

export default Form
