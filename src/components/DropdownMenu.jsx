import React, { useState } from 'react'

export function DropdownMenu () {
    const [dropdownClicked, setDropdownClicked] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    function handleOptionChange (e) {
        setSelectedOption(e.target.value)
        setDropdownClicked(false)
    }

    function handleDropdownClick () {
        setDropdownClicked(true)
    }

    // hardcoding the worker type options
    const workers = ['Welder', 'Plumbing and pipe fitter', 'Excavator operator', 'Driver', 'Safety coordinator', 'Electrical wiring technician']

    return (
        <div className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="dropdown-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={handleDropdownClick}
                    >
                        {selectedOption ? selectedOption : 'Type of Worker'}
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 14.95a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 011.414-1.414L10 12.586l3.536-3.537a1 1 0 011.414 1.414l-4.243 4.243z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </span>
            </div>
            {dropdownClicked &&
            <div
                className="origin-top-start absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-menu"
            >
                <div className="py-1" role="none">
                    {workers.map((worker) => (
                        <button
                            key={worker}
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                            role="menuitem"
                            value={worker}
                            onClick={handleOptionChange}
                        >
                            {worker}
                        </button>
                    ))}
                </div>
            </div>}
        </div>
    )
}
