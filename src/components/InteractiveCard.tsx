'use client'

import React from "react"

export default function InteractiveCard({children} : {children: React.ReactNode}) {

  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type == 'mouseover') {
      event.currentTarget.classList.remove('shadow-lg')
      event.currentTarget.classList.add('shadow-2xl')
    }
    else {
      event.currentTarget.classList.remove('shadow-2xl')
      event.currentTarget.classList.add('shadow-lg')
    }
  }

  return (
    <div className='w-full h-[300px] rounded-lg shadow-lg bg-pink-200' onMouseOver={(e)=>onCardMouseAction(e)} onMouseOut={(e)=>onCardMouseAction(e)}>
        {children}
    </div>
  )
}