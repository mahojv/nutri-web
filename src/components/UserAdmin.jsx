import React, { useEffect, useState } from 'react'
import { usersById } from '../axios/users/Users';
import { useParams } from 'react-router';
import ModifyForm from './ModifyForm';
import DietContainer from './DietContainer';

export default function UserAdmin() {

    const { id } = useParams()

    const [ userData, setUserData]= useState([])

    useEffect(() => {
        usersById(id)
          .then((rs) => setUserData(rs))
          .catch((error) => {
            console.error(error);
          });
      }, []);


  return (
    <div className='flex flex-col items-center' >
        <div className='w-[90%]'>

      <ModifyForm 
      userData={userData}/>
      </div>

      <DietContainer/>

      


    </div>
  )
}
