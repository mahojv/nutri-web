import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createUser, getRoles } from '../axios/users/Users';
import { useNavigate } from 'react-router';


export default function NewUserForm() {
    const navigate = useNavigate()
    // Lista de states
    const [roles, setRoles] = useState([])

    const { register, handleSubmit, watch } = useForm();

    const selectedRoleId = watch("role_id");
    
    function handleClose() {
      navigate(-1)          
    }


    async function handleUserCreate(requestData) {
        try {
            //   requestData.schools = [requestData.schools];

            const data = await createUser(requestData);
            if (data === 201) {
                // fetchData();
                alert("Usuario registrado con éxito");
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

    useEffect(() => {
        getRoles()
            .then((rol) => setRoles(rol))
            .catch((error) => console.error(error));
    }, []);




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

                {/* Display error message
        {errorMessage && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mt-4 mb-2 w-[90%] max-w-[450px]">
            {errorMessage}
          </div>
        )} */}

                <form
                    className="flex flex-wrap border gap-1 mt-4 w-[90%] max-w-[450px] justify-center bg-white shadow-lg p-6 rounded-md"
                    onSubmit={handleSubmit(handleUserCreate)}
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

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    />

                    <label htmlFor="roles_id">Rol</label>
                    <select
                        id="roles_id"
                        {...register("roles_id")}
                        required
                        className="border border-gray-400 px-4 mb-2 w-full h-10 rounded-md"
                    >
                        <option value="">Selecciona un rol</option>
                        {roles.map((rol) => (
                            <option key={rol.id} value={rol.id}>
                                {rol.name}
                            </option>
                        ))}
                    </select>

                    

                    <button
                        type="submit"
                        className="bg-blue-500 text-white mt-4 px-4 h-[40px] rounded-md hover:cursor-pointer"
                    >
                        Crear Usuario
                    </button>
                </form>
            </div>
        </div>
    );
}
