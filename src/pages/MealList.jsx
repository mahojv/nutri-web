import React, { useEffect, useState } from 'react'
import { deleteMeal, getMeals } from '../axios/meatPlans/meatPlans';
import { Link } from 'react-router';
import MeatCard from '../components/MeatCard';
import Swal from 'sweetalert2';

export default function MealList() {
    const [mealList, setMealList] = useState([])

    const fetchMeals = () => {
        getMeals()
            .then((rs) => setMealList(rs))
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchMeals(); 
    }, []);

    async function handleDelete(e) {
        try {
          
            const status = await deleteMeal(e.target.id);
            if (status === 204) {

                Swal.fire({
                    title: "Comida eliminada con exito",
                    icon: "success",
                    draggable: true
                });
                fetchMeals()

            }
        } catch (error) {
            console.error("Error al registrar dieta", error);
            if (
                error.response &&
                error.response.status &&
                error.response.status.message
            ) {
                setErrorMessage(error.response.status.message);
            } else {
                setErrorMessage(
                    "Ocurrió un error inesperado. Por favor, inténtalo de nuevo."
                );
            }
        }
    }

    return (
        <div className='flex flex-col gap-3 '>
            <h1 className='text-4xl'> Planes alimenticios </h1>
            <div className='flex justify-center gap-3 mt-5 items-center md:flex-row '  >

                <button className='bg-btnbgcolor text-white px-9 py-1  h-10 md:h-12 border max-w-[500px] rounded-md flex gap-3 justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <Link to={"/Meals/New-Meal"} className=''> Agregar Nueva Comida</Link>
                </button>

            </div>


            <div className="    flex flex-wrap gap-5 justify-center shadow-2xl rounded-md p-2.5 ">
                {mealList.map(item => {
                    return (
                        <div key={item.id} className=' flex flex-col  w-fit items-center  justify-center'>
                            <MeatCard
                                item={item}
                            />
                            <button id={item.id} onClick={handleDelete} className=' cursor-pointer w-[70%]  bg-red-400 rounded-md p-0.5 shadow-2xl'>
                                eliminar comida
                            </button>
                        </div>
                    )

                })}

            </div>
        </div>
    )
}
