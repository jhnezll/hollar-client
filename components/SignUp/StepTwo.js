import React, {useState} from "react";
import Steps from "./Steps";
import TextInput from "../forms/TextInput";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import {Button, createMuiTheme, MuiThemeProvider, TextField} from "@material-ui/core";

export default function StepTwo({currentStep, onContinue, onBack, formData, setFormData}) {
    const {error, setError} = useState("")

    // function signUp(event) {
    //     if (event.target.password.value === event.target["confirm-password"].value) {
    //         fb.auth().createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
    //             .then(onContinue())
    //     } else {
    //         setError("Passwords must match.")
    //     }
    // }

    const theme = createMuiTheme({
        palette: {
            primary: {
                500: '#8B5CF6',

            }
        },
        typography: {
            button: {
                textTransform: 'none',
                flex: 'none'
            }
        }
    })

    return (
        <MuiThemeProvider theme={theme}>
            <form onSubmit={onContinue}>
                <div className="space-y-4" autoComplete="off">

                    {/*Email*/}
                    <TextField className="w-full" label="Email" id="email" variant="outlined" onChange={event => setFormData({
                        ...formData,
                        email: event.target.value
                    })} value={formData.email} required type="email"/>

                    {/*Password*/}
                    <TextField className="w-full" label="Password" id="password" variant="outlined" onChange={event => setFormData({
                        ...formData,
                        password: event.target.value
                    })} value={formData.password} required type="password"/>

                    <TextField className="w-full" label="Confirm Password" id="confirm-password" variant="outlined" onChange={event => setFormData({
                        ...formData,
                        confirmPassword: event.target.value
                    })} value={formData.confirmPassword} error={error} required type="password"/>

                    <div>
                        <h3 className="text-black inline-flex text-sm text-gray-600">By continuing, you agree to<h3 className="px-1 text-purple-500">Hollar's Terms and Conditions</h3></h3></div>
                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        {/*<button type="button" onClick={onBack}*/}
                        {/*        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">*/}
                        {/*    Back*/}
                        {/*</button>*/}
                        {/*<button type="submit"*/}
                        {/*        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium*/}
                        {/*rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none*/}
                        {/*focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">*/}
                        {/*    Continue*/}
                        {/*</button>*/}
                        <Button onClick={onBack}>Back</Button>
                        <Button type="submit" variant="contained" color="primary" disableElevation>Next</Button>
                    </div>
                </div>
            </form>
        </MuiThemeProvider>
    )
}