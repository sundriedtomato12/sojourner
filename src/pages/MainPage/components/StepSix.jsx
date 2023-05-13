import React, { useState } from 'react'
import { InputWithLabel } from '../../../common/components/InputWithLabel'

export function StepSix () {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [uen, setUen] = useState('')
    const [contactNum, setContactNum] = useState('')
    const [termsChecked, setTermsChecked] = useState(false)

    const handleTermsCheckboxChange = () => {
        setTermsChecked(!termsChecked)
    }

    return <>
        <InputWithLabel type="email" value={email} setValue={setEmail} name="company-email" label="Company Email" subLabel="Enter an email" />
        <InputWithLabel type="text" value={name} setValue={setName} name="company-name" label="Company Name" subLabel="Enter company name" />
        <InputWithLabel type="text" value={uen} setValue={setUen} name="companu-uen" label="Company UEN" subLabel="Enter UEN" />
        <InputWithLabel type="tel" value={contactNum} setValue={setContactNum} name="company-contact-number" label="Company Contact Number" subLabel="Enter a contact number" />
        <div className="flex items-start mb-4">
            <input id="terms-checkbox" type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-md" checked={termsChecked} onChange={handleTermsCheckboxChange} />
            <div className="ml-2">
                <label htmlFor="terms-checkbox" className="text-md font-medium text-gray-900 dark:text-gray-300">Terms, Services, & Privacy </label>
                <p className="mt-1 text-gray-500 font-normal">By using this website, you agree to our terms of service and privacy policy, which includes providing certain personal information that will be collected and used in accordance with the policy and safeguarded by appropriate security measures.</p>
            </div>
        </div>
    </>
}