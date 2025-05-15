import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import { profile } from '../../axios/auth/auth';


export default function AuthLayout() {

  const [data, setData] = useState("")

  useEffect(() => {
    profile()
      .then((rs) => setData(rs))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data)

  return (
    <div className='relative md:static w-full h-screen'>
      <div>
        <nav className='w-[80%] md:w-full h-20 md:h-fit  border absolute md:static bottom-8 left-1/2 -translate-x-1/2 md:translate-0 md:rounded-none rounded-2xl shadow-2xl bg-[#111820] text-white md:flex md:justify-between md:items-center md:py-2.5 md:px-5 '>

          <div>
            <figure className='w-[80px] bg-amber-50 hidden md:block' ><img src="https://cdn.beacons.ai/user_content/XhjsbFrm2vdbpccyiFsaE6MXjJA3/referenced_images/f5f52d28-3d9b-4143-ad16-1d0260cc05cc__website__522e5092-c9a5-44cd-9de2-3e721c040d86__header__logo__23ce3481-2059-4eb2-b5ad-e2ca3cf58e6f.jpg?t=1736033571888" alt="" /></figure>
          </div>
          <div className=' md:w-[400px] w-full px-1.5 flex gap-0 justify-around items-center h-full  '>

            <Link className=' w-[25%] border-r px-1 text-center h-full items-center flex flex-col justify-center ' to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

              <p>
                Home
              </p> </Link>
            <Link className=' w-[25%] border-r px-1 text-center h-full items-center flex flex-col justify-center' to="/Patience">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <p>
                Pacientes
              </p>
            </Link>
            <Link className=' w-[25%] border-r px-1 text-center text-[10px] h-full items-center flex flex-col justify-center' to="/meal-plans">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
              </svg>
              <p>Planes Alimenticios</p>
            </Link>
            <Link className=' w-[25%]  text-center text-[10px] px-1 h-full items-center flex flex-col justify-center' to="/exercise">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
              <p>Planes de Ejercicio</p>
            </Link>
          </div>

        </nav>
      </div>

      <main className='px-[20px] py-[10px] bg-[#fdfdfe] h-screen' >
        <Outlet />
      </main>

    </div>
  )
}
