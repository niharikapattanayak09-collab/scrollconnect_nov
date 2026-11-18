import React from 'react'
import Image from 'next/image'
import Nav from '@/components/Nav'

function page() {
  return (
    <div className="p-10">
      <Nav />
      <div className="p-10 md:flex-row flex-col flex w-full h-screen">
        <div className="p-10 w-1/2 flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-bold">Welcome to SIGCE</h1>
          <p>
            Welcome to the Data Science!
          </p>
          <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
        </div>
        <div className="p-10 md:w-1/2 w-full">
          <Image className="p-10" src="/login-bro.png" alt="niharika" width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default page