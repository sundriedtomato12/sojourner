import React, { useState } from 'react'
import { InputWithLabel } from '../../../common/components/InputWithLabel'

export function StepTwo () {
    const [value, setValue] = useState('')
    return <>
        <form>
            <InputWithLabel type='number' value={value} setValue={setValue} name='number-of-workers' label='Number of Workers' subLabel='Enter number of workers' />
        </form>
    </>
}