import React from 'react'
import { Radio } from './Radio'


export function StepThree () {
    const options = ['Less than 3 years (cannot qualify for Man Year Entitlement waiver', 'More than 3 years (can qualify for Man Year Entitlement waiver)', 'No preference']
    return (<>
        <Radio options={options} />
    </>)
}