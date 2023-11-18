import React from 'react'

export default function AppButton({type= 'submit', text = '', backgroundColor = '', logo=''}: any) {
  return (
   
        <div>
            <button style={{backgroundColor}}  className={`rounded-lg  border border-transparent px-6 py-2 text-white   transition-colors hover:border-gray-300 hover:bg-red-800 hover:dark:border-neutral-700 `} type={type}>{logo }{text}</button>
        
        </div>
   
   
  )
}
