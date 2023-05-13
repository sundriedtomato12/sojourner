/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export function Radio ({ options }) {
    const [checked, setChecked] = useState(options[0])

    function handleChangeOption (value) {
        setChecked(value)
    }

    return (
        <form>
            {options.map((option) => (
                <div type={checked === option ? 'checked' : ''} key={option} className="my-3 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 checked:bg-blue-200">
                    <input checked={checked === option ? true : false} type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => { handleChangeOption(option) }} />
                    <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
                </div>
            ))}
        </form>
    )
}

Radio.propTypes = {
    options: PropTypes.array
}