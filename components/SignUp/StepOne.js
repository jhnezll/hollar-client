import React, {useState} from "react";
import Steps from "./Steps";
import {Button, createMuiTheme, FormControlLabel, MuiThemeProvider, Radio, RadioGroup} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";

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

export default function StepOne({currentStep, onContinue, formData, setFormData}) {
    return (
        <div>
            <form onSubmit={onContinue}>

                <MuiThemeProvider theme={theme}>
                    <div className="space-y-2">
                        <Button variant="outlined" color="primary" className="md:h-24 p-2 border-2 rounded-xl w-full">
                            <h3 className>I am a <b>customer</b> and I plan to receive benefits.</h3>
                        </Button>


                        <Button variant="outlined" color="primary" className="md:h-24 p-2 border-2 rounded-xl w-full">
                            <h3 className>I am a <b>business owner</b> and I plan to provide benefits.</h3>
                        </Button>
                    </div>
                </MuiThemeProvider>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        {/*<button type="submit"*/}
                        {/*        className="main-button">*/}
                        {/*    Continue*/}
                        {/*</button>*/}
                    </div>
                </div>
            </form>
        </div>
    )
}