import React from 'react'
import Link from 'next/link'

function Nav() {
    return (
        <div className="w=full h-20 flex justify-between items-center px-10 bg-gray-100 md:flex hidden">
            <div>Logo</div>
            <div className="flex items-center gap-6">
                <Link href="/about">about</Link>
                <h2>contact</h2>
                <h2>FaQ</h2></div>
            <div><button className="bg-black text-white px-2 py-1 rounded"> Login </button></div>
        </div>
    )
}

export default Nav