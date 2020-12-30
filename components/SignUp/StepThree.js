import TextInput from "../forms/TextInput";
import SelectInput from "../forms/SelectInput";
import Steps from "./Steps";
import React, {useState} from "react";
import {Button, MenuItem, MuiThemeProvider, Select, TextField} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";

const StepThree = ({currentStep, onContinue, onBack, formData, setFormData}) => {

    const genders = ['', 'Male', 'Female', 'Other']

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dateOfBirth: date
        })
    };

    function quickFix() {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <MuiThemeProvider theme={Theme}>
            <form onSubmit={quickFix}>
                <div className="">

                    <div className="flex justify-between space-x-2">
                        {/*First Name*/}
                        <TextField className="w-full" variant="outlined" label="First Name" id="first-name" onChange={event => setFormData({
                            ...formData,
                            firstName: event.target.value
                        })} value={formData.firstName} required type="text"/>
                        <TextField className="w-full" variant="outlined" label="Last Name" id="last-name" onChange={event => setFormData({
                            ...formData,
                            lastName: event.target.value
                        })} value={formData.lastName} required type="text"/>
                    </div>

                    {/*Age*/}
                    <div className="mt-4">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {/*<TextInput label="Age" id="age" onChange={event => setFormData({*/}
                            {/*    ...formData,*/}
                            {/*    age: event.target.value*/}
                            {/*})} value={formData.age} required type="number"/>*/}

                            <KeyboardDatePicker
                                className="w-full"
                                disableToolbar
                                variant="outline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={formData.dateOfBirth}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                inputVariant="outlined"/>
                        </MuiPickersUtilsProvider>


                    </div>

                    {/*Gender*/}
                    <div className="mt-4">
                        {/*<SelectInput values={genders} label="Gender" id="gender" value={formData.gender}*/}
                        {/*             onChange={event => setFormData({*/}
                        {/*                 ...formData,*/}
                        {/*                 gender: event.target.value*/}
                        {/*             })} required/>*/}

                        <Select
                            className="w-full"
                            labelId="select-label"
                            id="select"
                            value={formData.gender}
                            onChange={event => setFormData({
                                ...formData,
                                gender: event.target.value
                            })}
                            variant="outlined">
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </div>
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

export default StepThree