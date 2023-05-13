/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export function InputWithLabel ({ type, value, setValue, name, label, subLabel } ) {
    function handleChangeValue (value) {
        setValue(value)
    }

    function resetValue () {
        setValue('')
    }

    return (
        <>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="border-b-2 border-gray-300 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={value}
                    onChange={(e) => {
                        handleChangeValue(e.target.value)
                    }}
                    placeholder={' '}
                    required
                />
                <label
                    htmlFor={name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
                <label className="text-xs">{subLabel}</label>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none"
                        onClick={resetValue}
                    >
                        <svg
                            className="h-7 w-7 mb-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

InputWithLabel.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    subLabel: PropTypes.string
}