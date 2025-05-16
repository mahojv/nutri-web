import React from 'react'
import { useNavigate } from 'react-router'
import { login } from '../axios/auth/auth';

export default function Login() {
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault()
        try {
            const formdata = new FormData(e.target);
            const requestData = Object.fromEntries(formdata.entries())

            const data = await login(requestData)

            if (data.status === 'ok') {
                navigate('/');
            } else {
                            console.log(error)
            }
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <>

            <div className='bg-white w-full h-screen flex flex-col justify-center items-center '>
                <figure className='w-[200px] '><img src="https://cdn.beacons.ai/user_content/XhjsbFrm2vdbpccyiFsaE6MXjJA3/referenced_images/f5f52d28-3d9b-4143-ad16-1d0260cc05cc__website__522e5092-c9a5-44cd-9de2-3e721c040d86__header__logo__23ce3481-2059-4eb2-b5ad-e2ca3cf58e6f.jpg?t=1736033571888" alt="" /></figure>
                <div className='  border border-[#00ebc7] px-[50px] py-[30px] rounded-2xl bg-gray-200 mt-8'>
                    <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email:</label>
                            <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium ">Contraseña: </label>
                            <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu contraseña" required />
                        </div>
                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesión</button>
                    </form>
                </div>

            </div>

        </>
    )
}
