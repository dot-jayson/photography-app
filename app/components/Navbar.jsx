'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#FFFFFF')

    const toggleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#FFFFFF')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#FFFFFF')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
        <nav
            style={{ backgroundColor: `${color}` }}
            className={`fixed left-0 top-0 w-full ease-in duration-300 z-20`}
        >
            <div
                style={{ color: `${textColor}` }}
                className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1
                        className='font-bold text-4xl'>
                        Jayson
                    </h1>
                </Link>
                <ul className='hidden sm:flex gap-4'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div
                    onClick={toggleNav}
                    className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose className='cursor-pointer text-white' size={20} /> : <AiOutlineMenu className='cursor-pointer' size={20} />}
                </div>


            </div>
            {/* Mobile Menu */}
            <div className={`sm:hidden absolute top-0 ${nav ? 'left-0' : 'left-full'} right-0 bottom-0 flex justify-center items-center gap-4 w-full h-screen
                bg-black text-center ease-in duration-300`}>
                <ul className='flex flex-col gap-4 text-white'>
                    <li className=' text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className=' text-4xl hover:text-gray-500'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li className=' text-4xl hover:text-gray-500'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li className=' text-4xl hover:text-gray-500'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar