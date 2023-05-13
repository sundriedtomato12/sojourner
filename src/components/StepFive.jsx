import React from 'react'
import { Radio } from './Radio'

export function StepFive () {
    const options = ['Less than $20/ day', '$21 - 25/ day', '$26 - $30/ day', '$31 - $35/ day', 'More than $35/ day']
    
    return (<>
        <Radio options={options} />
    </>)
}