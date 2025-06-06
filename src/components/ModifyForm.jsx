import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { modifyUsers } from '../axios/users/Users';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function ModifyForm({ userData }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, control } = useForm();
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (userData) {
            reset(userData);
            if (userData.nxtvisit) {
                setStartDate(new Date(userData.nxtvisit));
            }
        }
    }, [userData, reset]);

    async function handleUserModify(requestData) {
        try {
            if (startDate) {
                requestData.nxtvisit = startDate.toISOString();
            }
            const data = await modifyUsers(id, requestData);
            if (data === 200) {
                Swal.fire({
                    title: "Usuario Modificado con éxito!",
                    icon: "success",
                    draggable: true
                });
                navigate(-1);
            }
        } catch (error) {
            console.error("Error al modificar usuario", error);
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
                    <div className='flex flex-col items-center w-full'>

                        <label htmlFor="nxtvisit">Próxima Visita</label>
                        <Controller
                            control={control}
                            name="nxtvisit"
                            defaultValue={startDate}
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="Selecciona fecha"
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        field.onChange(date);
                                    }}
                                    dateFormat="dd/MM/yyyy"
                                    className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                                />
                            )}
                        />
                    </div>




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
