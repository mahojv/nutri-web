import React from 'react'

export default function MeatCard({item}) {
    console.log(item)
    return (
        <div className='w-[70%] shadow-2xl rounded-2xl flex flex-col gap-3 p-5 '>
            <div className='flex justify-between  '>
                <span className='flex gap-2.5'>
                    <h3>Nombre:</h3>
                    <h4>{item.name}</h4>
                </span>
                <span className='flex gap-2.5'>
                    <h3>cal:</h3>
                    <h4>{item.calorias}</h4>
                </span>
            </div>
            <span className='border-t'>
                <h3>Ingredientes:</h3>
                <h4>{item.ingredientes}</h4>
            </span>
            <span  className='border-t'>
                <h3>Instrucciones:</h3>
                <h4>{item.instrucciones}</h4>
            </span>

        </div>
    )
}
