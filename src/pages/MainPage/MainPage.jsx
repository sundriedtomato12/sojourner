import React, { useState } from 'react'
import { NavBar } from '../../common/components/NavBar'
import { StepOne } from './components/StepOne'
import { StepTwo } from './components/StepTwo'
import { StepThree } from './components/StepThree'
import { StepFour } from './components/StepFour'
import { StepFive } from './components/StepFive'
import { StepSix } from './components/StepSix'
import { StepSeven } from './components/StepSeven'

export function MainPage () {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [{
        num: 1,
        question: 'What type of worker are you looking for?',
        description: 'Onboard with us and start looking for workers to hire',
        component: <StepOne setCurrentStep={setCurrentStep} />
    },
    {
        num: 2,
        question: 'How many workers are you looking to hire?',
        description: '',
        component: <StepTwo setCurrentStep={setCurrentStep} />
    },
    {
        num: 3,
        question: 'How many years of experience do you prefer in the workers?',
        description: '',
        component: <StepThree setCurrentStep={setCurrentStep} />
    },
    {
        num: 4,
        question: 'What type of worker are you looking for?',
        description: '',
        component: <StepFour setCurrentStep={setCurrentStep} />
    },
    {
        num: 5,
        question: 'What basic salary are you willing to offer?',
        description: '',
        component: <StepFive setCurrentStep={setCurrentStep} />
    },
    {
        num: 6,
        question: 'Company Details',
        description: '',
        component: <StepSix setCurrentStep={setCurrentStep} />
    },
    {
        num: 7,
        question: 'Thank you for onboarding with us',
        description: 'Before continuing, we need to verify your email address. Please check your inbox for a confirmation link.',
        component: <StepSeven setCurrentStep={setCurrentStep} />
    }
    ]

    function handleClickNext () {
        setCurrentStep(currentStep + 1)
    }

    function handleClickPrevious () {
        setCurrentStep(currentStep - 1)
    }

    const progressBarClassName = currentStep === 7 ? 'bg-blue-600 h-2.5 rounded-full' : 'bg-blue-600 h-2.5 rounded-l-lg'

    return (
        <div className="flex flex-col w-full h-screen">
            <NavBar />
            <div className="flex-grow p-10 flex flex-col justify-between">
                <div>
                    <p className="text-gray-500 mb-2">Step {currentStep} of {steps.length}</p>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full">
                        <div className={progressBarClassName} style={{ width: `${Math.ceil(currentStep/steps.length * 100)}%` }}></div>
                    </div>
                    <div className="w-[32rem]">
                        {steps[currentStep - 1].question && <p className="my-4 text-2xl font-bold">{steps[currentStep - 1].question}</p>}
                        {steps[currentStep - 1].description && <p className="mb-4 text-lg">{steps[currentStep - 1].description}</p>}
                        {steps[currentStep - 1].component}
                    </div>
                </div>
                <div className="flex justify-end">
                    {currentStep !== 1 && <button className="text-sm mr-4 hover:underline text-blue-600 font-bold" onClick={handleClickPrevious}>Previous</button>}
                    <button className="bg-blue-600 hover:bg-blue-700 font-bold text-white text-sm px-4 py-2  border rounded-full" onClick={handleClickNext}>
                  Next
                    </button>
                </div>
            </div>
        </div>
    )
}