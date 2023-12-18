import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
const Session = () => {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/home')
  }
  const handleLab = ()=>{
    navigate('/lab')
  }
  return (
    <div className='h-screen bg-black text-white'>
        <div className='flex justify-center gap-4 items-center h-screen'>

       <Button onClick={handleClick} className=' bg-white text-black font-bold w-20 rounded-lg hover:bg-white'>
            Home
       </Button>
       <Button onClick={handleLab} className=' bg-white text-black font-bold w-20 hover:bg-white'>
            Lab
       </Button>

        </div>
    </div>
  )
}

export default Session
