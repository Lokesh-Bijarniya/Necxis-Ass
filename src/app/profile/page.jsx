import React from 'react'

export default function page() {
  return (
    <div className='bg-black text-white'>

      <div className='bg-neutral-600 mb-12 border-b-2 border-white'>
        <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-60 w-60 rounded-full ml-64  relative top-24 '/>
        </div>
        {/* <hr className='mt-3 w-full border-2 border-gray-400 relative bottom-28 '/> */}
        <button className='border-2 ml-16 rounded-full p-2'>Edit Profile</button>
        <div className='mt-12 ml-8 p-12'>
        <h1 className='text-3xl font-semibold'>Lokesh Bijarniya</h1>
        <h2 className='text-lg font-extralight'>@Lokesh_Bijarniya_</h2>
        </div>

    </div>
  )
}

