import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;

}

const Alert = ({children}:Props) => {
  return (
    <div className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50  dark:text-blue-700'>
        {children}
    </div>
  )
}

export default Alert