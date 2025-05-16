import React, { useEffect, useState } from 'react'
import { usersById } from '../axios/users/Users';
import { useParams } from 'react-router';

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

      console.log(userData)
  return (
    <div>
      
      

      
    </div>
  )
}
