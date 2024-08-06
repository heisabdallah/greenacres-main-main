import React from 'react'

const Button_CTA_Bordered = ({label}) => {
  return (
    <div>
         <button className='h-20 w-40 b border border-green-900 font-bold text-green-900'>{label}</button>
    </div>
  )
}

export default Button_CTA_Bordered;