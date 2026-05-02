import React from 'react'

const Spinner = () => {
  return (
    <svg className="mr-3 -ml-1 w-12 h-12 md:w-16 md:h-16 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#10B77F" strokeWidth="4"></circle>
        <path className="opacity-75" fill="#10b77f" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}

export default Spinner;