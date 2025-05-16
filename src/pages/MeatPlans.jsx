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

  return (
    <div className='flex flex-col gap-3 '>
      <h1 className='text-4xl'> Planes alimenticios </h1>
      <div className='flex justify-center gap-3 mt-5 items-center md:flex-row '  >

        <button className='bg-btnbgcolor text-white px-9 py-1  text-[12px] h-10 md:h-12 border max-w-[500px] rounded-md flex gap-3 justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <Link to={"/New-Diet"} className=''> Crear nuevo Plan</Link>
        </button>
        <button className='bg-btnbgcolor text-white px-9 py-1 text-[12px]   h-10 md:h-12 border max-w-[500px] rounded-md flex gap-3 justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <Link to={"/Meals"} className=''> Lista de Comidas</Link>
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
