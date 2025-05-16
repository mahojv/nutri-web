import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getDiets } from '../axios/meatPlans/meatPlans';

export default function MeatPlans() {
  const [diet, setDiet] = useState([])

  useEffect(() => {
    getDiets()
      .then((rs) => setDiet(rs))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(diet)

  return (
    <div className='flex flex-col gap-3 '>
      <h1 className='text-4xl'> Planes alimenticios </h1>
      <div className='flex flex-col gap-3 mt-5 items-center md:flex-row '  >
        {/* <div className='flex gap-3 justify-center  w-full max-w-[500px]'>
                    <span className='flex shadow rounded-lg w-[80%] p-3 gap-2 items-center justify-center '>
                        <figure><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </figure>
                        <input className=' h-full w-full' type="text" placeholder='Buscar Paciente' />
                    </span>
                    <button className='bg-btnbgcolor text-white px-9 py-1 rounded-md'>search</button>
                </div> */}
        <button className='bg-btnbgcolor text-white px-9 py-1  h-10 md:h-12 border max-w-[500px] rounded-md flex gap-3 justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <Link to={"/New-Diet"} className=''> Crear nuevo Plan</Link>
        </button>
      </div>


      <div className="    flex gap-3 justify-center shadow-2xl rounded-md p-2.5 ">

        <table className=" text-left text-sm whitespace-nowrap">

          <thead className="uppercase tracking-wider border-b-2  bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-5">
                Nombre
              </th>
              <th scope="col" className="px-6 py-5">
                asignado a
              </th>
              <th scope="col" className="px-6 py-5">
                Administrar
              </th>

            </tr>
          </thead>


          <tbody>

            {
              diet.map(item => {
                return (
                  <tr key={item.id} className="border-b  hover:bg-neutral-100 break-all  ">
                    <td scope="row" className="px-6 py-5 whitespace-normal break-words ">
                      {item.name}
                    </td>
                    <td className="px-6 py-5">{item.user.firstname}</td>
                    <td className="px-6 py-5"><button className='bg-btnbgcolor text-white px-2 py-1 rounded-md text-[10px] cursor-pointer' > Administrar </button></td>

                  </tr>
                )
              })

            }









          </tbody>

        </table>

      </div>
    </div>
  )
}
