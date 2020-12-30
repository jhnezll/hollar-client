import Steps from "./Steps";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress, MuiThemeProvider} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import fb from "../../util/firebase-config";
import SessionContext from "../../util/SessionContext";

const StepFinal = ({currentStep, onContinue, onBack, formData, setFormData}) => {
    const {userProfile} = useContext(SessionContext)

    useEffect(() => {
        fb.firestore().collection("users-customers").doc(userProfile.uid).set({
            name: "john"
        })
    }, []);

    return(
        <MuiThemeProvider theme={Theme}>
            <div className="flex justify-center items-center -mt-8">
                <div className="text-center space-y-4">
                    <CircularProgress/>
                    <h1>{formData.firstName}, we're setting up your account!</h1>
                    {userProfile.uid}
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default StepFinal