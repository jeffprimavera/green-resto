import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import LogoTop from './assets/logo-white.png'

const Logo = () => {
  return (
    <div className=''>
        <Link href="/">
            <Image 
            priority
            className='w-24 sm:w-32 pl-1 lg:pl-0' 
            src={LogoTop} alt="Logo" 
            />
        </Link>
    </div>
  )
}

export default Logo
