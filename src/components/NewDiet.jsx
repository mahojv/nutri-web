import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useCreate from '../hooks/useCreate';
import Select from 'react-select';
import { createDiet } from '../axios/meatPlans/meatPlans';
import Swal from 'sweetalert2';


export default function NewDiet() {
    const navigate = useNavigate()
    // Lista de states
    const { register, handleSubmit, watch } = useForm();
    const [roles, meal, userList] = useCreate()

    function handleClose() {
        navigate(-1)
    }
    async function handleUserCreate(requestData) {
        try {
            requestData.comidas = seleccionadas.map(item => item.value);
            // console.log(requestData)
            const data = await createDiet(requestData);
            if (data === 201) {

                Swal.fire({
                    title: "Dieta creada con éxito!",
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
    const opciones = meal.map(r => ({ value: r.id, label: r.name }));
    const [seleccionadas, setSeleccionadas] = useState([]);
    const handleChange = (selecciones) => {
        setSeleccionadas(selecciones);
    };

    return (
        <div>
            <div className="flex flex-col border justify-center items-center bg-white w-full h-full py-5 relative">
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

                <h2 className="font-semibold text-3xl">Nuevo Usuario</h2>

                <form
                    className="flex flex-wrap border gap-1 mt-4 w-[90%] max-w-[450px] justify-center bg-white shadow-lg p-6 rounded-md"
                    onSubmit={handleSubmit(handleUserCreate)}
                >
                    <label htmlFor="name">Nombre de dieta</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="users_id">Asignar A</label>
                    <select
                        id="users_id"
                        {...register("users_id")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    >
                        <option value="">Selecciona un paciente</option>
                        {userList.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.firstname} {user.lastname}
                            </option>
                        ))}
                    </select>

                    <div>
                        <label htmlFor="comidas" className="block mb-2 font-bold">Selecciona los platillos:</label>
                        <Select
                            id="comidas"

                            isMulti
                            options={opciones}
                            onChange={handleChange}
                            placeholder="Elige uno o varios platillos..."
                        />

                        <div className="mt-4">
                            <h3 className="font-semibold">Platillos seleccionados:</h3>
                            <ul className="list-disc pl-5">
                                {seleccionadas.map((item) => (
                                    <li key={item.value}>{item.label}</li>
                                ))}
                            </ul>
                        </div>
                    </div>





                    <button
                        type="submit"
                        className="bg-blue-500 text-white mt-4 px-4 h-[40px] rounded-md hover:cursor-pointer"
                    >
                        Crear Plan Alimenticio
                    </button>
                </form>
            </div>
        </div>
    );
}
