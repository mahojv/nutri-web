import React, { useEffect, useState } from 'react'
import MeatCard from './MeatCard'
import { useParams } from 'react-router'
import { getDiets } from '../axios/meatPlans/meatPlans'

export default function DietContainer() {
    const { id } = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {
        getDiets()
            .then((rs) => setMeal(rs))
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const filterDiets = meal.filter(item => item.user.id === Number(id));
    const todasLasComidas = filterDiets.flatMap(dieta => dieta.comida || []);
    return (
        <div className='w-full  flex flex-col items-center gap-4 '>
            {todasLasComidas.length > 0 ?
                (
                    todasLasComidas.map(item => {
                        return (
                            <MeatCard
                                item={item}

                            />
                        )
                    })

                )
                :
                <p>Sin comidas asignadas</p>
            }
        </div>
    )
}
