import React, {useState} from "react";
import StepOne from "../../components/SignUp/StepOne";
import StepTwo from "../../components/SignUp/StepTwo";
import StepThree from "../../components/SignUp/StepThree";
import {useRouter} from "next/router";


export default function SignUp() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        dateOfBirth: new Date('2020-01-01'),
        gender: '',
    })

    const onContinue = (event) => {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            setCurrentStepIndex(prevState => ++prevState)
            console.log(formData)
        } else {
            alert("Passwords must match.")
        }

    }

    const steps = [
        //Step 1
        {
            title: "What kind of user?️",
            content: <StepOne
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
            />
        },
        // Step 2
        {
            title: "Create Account",
            content: <StepTwo
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStepIndex(0)}
            />
        },
        // Step 3
        {
            title: "Personal Info",
            content: <StepThree
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStepIndex(1)}
            />
        }
    ]

    const currentStep = steps[currentStepIndex]

    return <div className="h-screen flex justify-center items-center md:bg-gray-50">
        <div className="p-8 md:border border-gray-200 rounded-lg md:shadow-lg max-w-xl w-full text-left bg-white">
            <h1 className="text-4xl font-bold text-center text-gray-900">{currentStep.title}</h1>
            <div className="mt-8">
                {currentStep.content}
            </div>
        </div>
    </div>
}

