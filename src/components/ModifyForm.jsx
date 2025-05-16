import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { modifyUsers } from '../axios/users/Users';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

export default function ModifyForm({ userData }) {
    const { id } = useParams()

    const { register, handleSubmit, watch, reset } = useForm();

    useEffect(() => {
        if (userData) {
            reset(userData); 
        }
    }, [userData, reset]);

    async function handleUserModify(requestData) {
        try {
            //   requestData.schools = [requestData.schools];
            console.log(requestData)
            const data = await modifyUsers(id, requestData);
            if (data === 200) {

                Swal.fire({
                    title: "Usuario Modificado con éxito!",
                    icon: "success",
                    draggable: true
                });
                navigate(-1)
            }
        } catch (error) {
            console.error("Error al registrar usuario", error);
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage(
                    "Ocurrió un error inesperado. Por favor, inténtalo de nuevo."
                );
            }
        }
    }


    return (
        <div>
            <div className="flex flex-col  justify-center items-center bg-white  py-5 ">


                <h2 className="font-semibold text-3xl">Datos de usuario</h2>

                {/* Display error message
        {errorMessage && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mt-4 mb-2 w-[90%] max-w-[450px]">
            {errorMessage}
          </div>
        )} */}

                <form
                    className="flex flex-wrap border gap-1 mt-4 w-[90%] max-w-[450px] justify-center bg-white shadow-lg p-6 rounded-md"
                    onSubmit={handleSubmit(handleUserModify)}
                >
                    <label htmlFor="firstname">Primer Nombre</label>
                    <input
                        type="text"
                        id="firstname"
                        {...register("firstname")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="middle_name">Segundo Nombre</label>
                    <input
                        type="text"
                        id="middle_name"
                        {...register("middle_name")}
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="lastname">Primer Apellido</label>
                    <input
                        type="text"
                        id="lastname"
                        {...register("lastname")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="second_lastname">Segundo Apellido</label>
                    <input
                        type="text"
                        id="second_lastname"
                        {...register("second_lastname")}
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />
                    <label htmlFor="phone">Telefono</label>
                    <input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <input type="hidden" {...register("status")} />




                    <button
                        type="submit"
                        className="bg-blue-500 text-white mt-4 px-4 h-[40px] rounded-md hover:cursor-pointer"
                    >
                        modificar datos
                    </button>
                </form>
            </div>
        </div>
    )
}
