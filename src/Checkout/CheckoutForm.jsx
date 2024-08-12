import React from 'react'

const CheckoutForm = ({dataForm, saveData, saveOrder}) => {
  return (
    <div>
      <section className='flex items-center justify-around'>
        <form className='flex flex-col justify-center items-center mt-4 border-2 rounded-lg shadow-2xl gap-2 p-2 w-[50%]'>
          <div className='flex gap-2'>
            <label htmlFor="name">Nombre</label>
            <input type="text" name='name' id='name' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.name} onChange={saveData} />
          </div>
          <div className='flex gap-2'>
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name='lastName' id='lastName' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.lastName} onChange={saveData} />
          </div>
          <div className='flex gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.email} onChange={saveData} />
          </div>
          <div className='flex gap-2'>
            <label htmlFor="email2">Repetir Email</label>
            <input type="email" name='email2' id='email2' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.email2} onChange={saveData} />
          </div>
          <div className='flex gap-2'>
            <label htmlFor="phone">Telefono</label>
            <input type="text" name='phone' id='phone' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.phone} onChange={saveData} />
          </div>
          <div className='flex gap-8'>
            <label htmlFor="address">Direccion</label>
            <input type="text" name='address' id='address' className='border-gray-300 border-2 rounded-lg focus:outline-pink-500 focus:ring-transparent focus:border-0' value={dataForm.address} onChange={saveData} />
          </div>
            <button type='submit' className='m-3 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50' onClick={saveOrder}>Finalizar</button>
        </form>
      </section>
    </div>
  )
}

export default CheckoutForm