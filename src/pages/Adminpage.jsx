import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adminpage() {

    const goHome = useNavigate()

  return (
    <div>
        <button onClick={()=>goHome('/')} className='btn btn-danger m-5' >ir a home</button>
      
    </div>
  )
}
