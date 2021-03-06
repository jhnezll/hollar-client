import TextInput from "../forms/TextInput";
import SelectInput from "../forms/SelectInput";
import Steps from "./Steps";
import React, {useState} from "react";
import {Button, MenuItem, MuiThemeProvider, Select, TextField} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import { format } from 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

const StepThree = ({currentStep, onContinue, onBack, formData, setFormData}) => {

    const genders = ['', 'Male', 'Female', 'Other']

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dateOfBirth: date,
        })
    };

    return(
        <MuiThemeProvider theme={Theme}>
            <form onSubmit={onContinue}>
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
                    {/*<div className="mt-4">*/}
                    {/*    <MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                    {/*        /!*<TextInput label="Age" id="age" onChange={event => setFormData({*!/*/}
                    {/*        /!*    ...formData,*!/*/}
                    {/*        /!*    age: event.target.value*!/*/}
                    {/*        /!*})} value={formData.age} required type="number"/>*!/*/}

                    {/*        <KeyboardDatePicker*/}
                    {/*            className="w-full"*/}
                    {/*            variant="outline"*/}
                    {/*            format="MM/dd/yyyy"*/}
                    {/*            margin="normal"*/}
                    {/*            id="date-picker"*/}
                    {/*            label="Date of Birth"*/}
                    {/*            value={formData.dateOfBirth}*/}
                    {/*            onChange={handleDateChange}*/}
                    {/*            KeyboardButtonProps={{*/}
                    {/*                'aria-label': 'change date',*/}
                    {/*            }}*/}
                    {/*            inputVariant="outlined"/>*/}
                    {/*    </MuiPickersUtilsProvider>*/}
                    {/*</div>*/}

                    {/*Gender*/}
                    {/*<div className="mt-4">*/}
                    {/*    /!*<SelectInput values={genders} label="Gender" id="gender" value={formData.gender}*!/*/}
                    {/*    /!*             onChange={event => setFormData({*!/*/}
                    {/*    /!*                 ...formData,*!/*/}
                    {/*    /!*                 gender: event.target.value*!/*/}
                    {/*    /!*             })} required/>*!/*/}

                    {/*    <Select*/}
                    {/*        className="w-full"*/}
                    {/*        labelId="select-label"*/}
                    {/*        id="select"*/}
                    {/*        value={formData.gender}*/}
                    {/*        onChange={event => setFormData({*/}
                    {/*            ...formData,*/}
                    {/*            gender: event.target.value*/}
                    {/*        })}*/}
                    {/*        variant="outlined">*/}
                    {/*        <MenuItem value="Male">Male</MenuItem>*/}
                    {/*        <MenuItem value="Female">Female</MenuItem>*/}
                    {/*        <MenuItem value="Other">Other</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</div>*/}
                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        <Button onClick={onBack}>Back</Button>
                        <Button type="submit" variant="contained" color="primary" disableElevation>Create Account</Button>
                    </div>
                </div>
            </form>
        </MuiThemeProvider>
    )
}

export default StepThree