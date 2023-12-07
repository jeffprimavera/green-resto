import React from 'react';
import Link from 'next/link';
import { headerSocialMedia } from '@/components/header/items';
import { TbMapPin, TbBrandFacebookFilled, TbBrandTwitterFilled, TbBrandInstagram } from "react-icons/tb";

const icons = [
    TbBrandFacebookFilled,
    TbBrandTwitterFilled,
    TbBrandInstagram,
];

const topHeader = () => {
  return (
    <div className="py-2 bg-green-600">
        <div className="container mr-auto ml-auto">
            <div className="head__top__wrapper flex justify-between items-center text-sm pl-3 pr-3 sm:pl-0 sm:pr-0">
                <div className="md:text-left w-full">
                    <p>Free Delivery on all orders Over $20</p>
                </div>
                <div className='flex sm:w-full sm:justify-end'>
                    <div className="flex gap-3">
                        <div className="hidden lg:flex  gap-3">
                            <TbMapPin color="white" size='20' />
                            <p>01 3rd Street Brgy. San Rafael Lagonoy Cam. Sur</p>
                            <span className='hidden lg:flex'>|</span>
                        </div>
                        <div className="flex lg:flex gap-3">
                            { headerSocialMedia.map((item, idx) => {
                                    const Icon = icons[idx];
                                    return (
                                        <Link key={item.id} href={item.link} title={item.title}>
                                            <Icon size='20' />
                                        </Link>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default topHeader
