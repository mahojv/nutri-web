import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import {  createMeal } from '../axios/meatPlans/meatPlans';

export default function NewMeal() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch } = useForm();
    function handleClose() {
        navigate(-1)
    }
      async function handleMealCreate(requestData) {
            try {

                const data = await createMeal(requestData);
                if (data === 201) {
    
                    Swal.fire({
                        title: "Comida creada con éxito!",
                        icon: "success",
                        draggable: true
                    });
                    navigate(-1)
                }
            } catch (error) {
                console.error("Error al registrar dieta", error);
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
            <div className="flex flex-col shadow-2xl rounded-2xl justify-center items-center bg-white w-full h-full py-5 relative">
                <div className="absolute top-2 right-4">
                    <figure
                        className="size-6 cursor-pointer"
                        onClick={handleClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </figure>
                </div>

                <h2 className="font-semibold text-3xl">Nueva comida</h2>

                <form
                    className="flex flex-wrap border gap-1 mt-4 w-[90%] max-w-[450px] justify-center bg-white shadow-lg p-6 rounded-md"
                onSubmit={handleSubmit(handleMealCreate)}
                >
                    <label htmlFor="name">Nombre de comida</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />
                    <label htmlFor="calorias">calorias</label>
                    <input
                        type="text"
                        id="calorias"
                        {...register("calorias")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />
                    <label htmlFor="ingredientes">ingredientes</label>
                    <input
                        type="text"
                        id="ingredientes"
                        {...register("ingredientes")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />
                    <label htmlFor="instrucciones">Instrucciones</label>
                    <input
                        type="text"
                        id="instrucciones"
                        {...register("instrucciones")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />








                    <button
                        type="submit"
                        className="bg-blue-500 text-white mt-4 px-4 h-[40px] rounded-md hover:cursor-pointer"
                    >
                        Crear Nueva Comida
                    </button>
                </form>
            </div>
        </div>
    );
}
