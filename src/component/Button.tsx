import React from 'react'

interface Props{
    children: string;
    color: string;
    onClick: () => void;
}

const Button = ({children,onClick,color}:Props) => {
  return (
    <button className={'py-2.5 px-5 mr-2 mb-2 text-sm text-white font-medium rounded-lg bg-'+color+"-700 hover:bg-"+color+"-200"}
        onClick={onClick}>
        {children}
    </button>
  )
}

export default Button