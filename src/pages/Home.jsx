import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col gap-5 items-center   justify-center'>
      <div className='w-full flex flex-col gap-3 pt-[30px] '>
        <h1 className='text-4xl ' >Dashboard</h1>
        <h2 className='mt-[10px]'>Bienvenida, janet </h2>
      </div>
      <div role='main' className='mt-[20px] flex flex-col md:flex-row     gap-8 w-[90%] items-center justify-center' >
        <div role='container1' className='w-full max-w-[500px] shadow-2xl rounded-2xl flex flex-wrap gap-5 justify-center items-center p-3 '>
          <div className=' w-[45%] max-w-[200px] h-[100px] flex flex-col items-center justify-around'>
            <h3>Pacientes</h3>
            <h4>24</h4>
          </div>
          <div className=' w-[45%] max-w-[200px] h-[100px] flex flex-col items-center justify-around' role='card2'>
            <h3>Esta semana</h3>
            <h4>3</h4>
          </div>
          <div className=' w-[45%] max-w-[200px] h-[100px] flex flex-col items-center justify-around' role='card3'>
            <h3>Asignados este mes</h3>
            <h4>15</h4>
          </div>
          <div className=' w-[45%] max-w-[200px] h-[100px] flex flex-col items-center justify-around' role='card4'>
            <h3>Notas</h3>
            <h4 className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis!</h4>
          </div>


        </div>
        <div role='container2' className=' w-full max-w-[500px]  shadow-2xl  rounded-2xl p-5'>
          <h3 className='text-2xl mb-5'>Proximas asignaciones</h3>
          <div className=' flex  justify-between'>
            <h2 className='text-[16px]'>Manuel Cardenas</h2>
            <h2 className='text-[15px] font-light'>Hoy</h2>
          </div>
          <div className=' flex  justify-between'>
            <h2>Javier Madrigal</h2>
            <h2>Hoy</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
