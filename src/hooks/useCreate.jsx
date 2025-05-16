import React, { useEffect, useState } from 'react'
import { getRoles, users } from '../axios/users/Users';
import { getMeals } from '../axios/meatPlans/meatPlans';

export default function useCreate() {

    const [roles, setRoles] = useState([])
    const [meal, setMeal] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        getRoles()
            .then((rol) => setRoles(rol))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        getMeals()
            .then((rol) => setMeal(rol))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        users()
            .then((rol) => setUserList(rol))
            .catch((error) => console.error(error));
    }, []);




  return [roles, meal, userList]
}
