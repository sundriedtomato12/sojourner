import React from 'react'
import { Radio } from './Radio'

export function StepFour () {
    const options = ['Basic skill (SEC, SEC(K), SEC(K) higher skill certificates)', 'Higher skill (CoreTrade, Multi-skill certificates with 4 years’ experience)', 'No preference']

    return (<>
        <Radio options={options} />
    </>)
}