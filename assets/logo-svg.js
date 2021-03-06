import React from 'react'

const Logo = ({fill, width, height, stroke}) => {
    return (
        <svg width={width || "56"} height={height || "59"} viewBox="0 0 56 59" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="31" r="27" stroke={fill || "#F9F9F9"} strokeWidth={stroke || "2"}/>
            <circle cx="28" cy="4" r="4" fill={fill || "#F9F9F9"}/>
            <path d="M27 55V29L12 23L27 55Z" fill={fill || "#F9F9F9"}/>
            <path d="M29 55V29L44 23L29 55Z" fill={fill || "#F9F9F9"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M44 21L28 9L12 21H44ZM12 21L28 27L44 21H12Z"
                  fill={fill || "#F9F9F9"}/>
        </svg>
    )
}

export default Logo