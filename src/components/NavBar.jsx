import React from 'react'
import Logo from '../assets/images/logo.svg'

export function NavBar () {
    return (
        <nav className="bg-blue-600 h-16 flex items-center p-2">
            <div className="container flex items-center left">
                <img alt="Sojourner Brother logo" src={Logo} />
                <h4 className="text-white ml-2 font-bold break-normal leading-4 w-20">
                  SOJOURNER BROTHER
                </h4>
            </div>
        </nav>
    )
}