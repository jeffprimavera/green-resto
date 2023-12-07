'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import HamburgerMenu from './hamburgermenu';
import { Button } from '../Button';
import { BsPhone, BsPlusLg } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react'

interface NavigationProps {
  toggleMenu: () => void; // Accept toggleMenu prop
}

export default function NavigationMenu({ toggleMenu }: NavigationProps) {

  return (

      <div className='bg-green-900 py-2'>
        <div className="container mr-auto ml-auto flex justify-between items-center">
            <div className='flex pl-2 pr-2 sm:pl-0 sm:pr-0 justify-between items-center w-full'>

              <Logo />
              
              <ul className="hidden lg:inline-flex gap-5">
                  <li><Link href='/'>Home</Link></li>
                  <li><Link href='/about'>About Us</Link></li>
                  <li>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center text-sm font-medium">
                          Our Menus
                          <BsPlusLg
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href='/about'
                                  className={`${
                                    active ? 'bg-green-800 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <p>Grilled Chicken</p>
                                  ) : (
                                    <p>Fast Food Menu</p>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href=''
                                  className={`${
                                    active ? 'bg-green-800 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <p>Breakfast Mood</p>
                                  ) : (
                                    <p>Fast Food Menu</p>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href=''
                                  className={`${
                                    active ? 'bg-green-800 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <p>Drinking Prospect</p>
                                  ) : (
                                    <p>Fast Food Menu</p>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href=''
                                  className={`${
                                    active ? 'bg-green-800 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <p>Pizza Time</p>
                                  ) : (
                                    <p>Fast Food Menu</p>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href=''
                                  className={`${
                                    active ? 'bg-green-800 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <p>Fast Food Menu</p>
                                  ) : (
                                    <p>Fast Food Menu</p>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  <li><Link href='/blogs'>Blogs</Link></li>
                  <li><Link href='/contact'>Contact Us</Link></li>
              </ul>

              <div className='hidden lg:inline-flex gap-4'>
                <div className='flex justify-start items-center gap-3'>
                  <BsPhone size={24} /> |
                  <div>+63970 123 4567</div>
                </div>
                <div>
                  <Button>Book a Table</Button>
                </div>
              </div>

            </div>

            <HamburgerMenu toggleMenu={toggleMenu} />

        </div>
      </div>
    
  )
}
