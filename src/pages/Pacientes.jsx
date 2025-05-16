import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import { users } from '../axios/users/Users';
import { obtainDate } from '../hooks/useDates';

export default function Pacientes() {

    const [uData, setUData] = useState([])
    const [inputFilter, setInputFilter] = useState("")
    const [search,setSearch] = useState("")

    useEffect(() => {
        users()
            .then((rs) => setUData(rs))
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(uData)

    const filteredData = uData.filter(item => {
        if (!search) return true; // si no hay filtro, devuelve todos
        return item.firstname.toLowerCase().includes(search.toLowerCase());
    });

    function handleInput(e) {
        setInputFilter(e.target.value);
    }

    function handleSearch() {
        setSearch(inputFilter)
        
    }





    return (
        <div className='flex flex-col gap-3 '>
            <h1 className='text-4xl'> Pacientes </h1>
            <div className='flex flex-col gap-3 mt-5 items-center md:flex-row '  >
                <div className='flex gap-3 justify-center  w-full max-w-[500px]'>
                    <span className='flex shadow rounded-lg w-[80%] p-3 gap-2 items-center justify-center '>
                        <figure><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </figure>
                        <input className=' h-full w-full' type="text" onChange={handleInput} placeholder='Buscar Paciente' />
                    </span>
                    <button className='bg-btnbgcolor text-white px-9 py-1 rounded-md' onClick={handleSearch}>search</button>
                </div>
                <button className='bg-btnbgcolor text-white px-9 py-1  h-10 md:h-12 border max-w-[500px] rounded-md flex gap-3 justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <Link to={"/New-User"} className=''> Nuevo Paciente</Link>
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
                                Próxima Visita
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Administrar
                            </th>

                        </tr>
                    </thead>


                    <tbody>



                        {
                            filteredData.map((item => {

                                const dt = obtainDate(item.nxtvisit)

                                return (
                                    <tr key={item.id} className="border-b  hover:bg-neutral-100 break-all  ">
                                        <td scope="row" className="px-6 py-5 whitespace-normal break-words ">
                                            {item.firstname} {item.middle_name} {item.lastname} {item.second_lastname}
                                        </td>
                                        <td className="px-6 py-5">{dt}</td>
                                        <td className="px-6 py-5"><Link className='bg-btnbgcolor text-white px-2 py-1 rounded-md text-[10px] cursor-pointer' to={`/Patience/${item.id}`} > Administrar </Link></td>

                                    </tr>
                                )

                            }))
                        }



                    </tbody>

                </table>

            </div>
        </div>
    )
}

