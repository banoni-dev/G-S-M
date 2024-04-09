"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { it } from 'node:test'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <nav className='w-full backdrop-blur-lg h-[70px] m-auto flex justify-between item-center border-b border-[rgba(255,255,255,0.01)] z-40 fixed'>
     <div className='w-[70vw] m-auto flex justify-between items-center'>
         <div className="left flex items-center">
            LOGO
        </div>
        <div className="flex items-center right">
          <ul className='flex justify-center items-center'>
              {navigation.map((item, itemIdx) => (
                <li><Link
                    key={itemIdx}
                    href={item.href}
                    className={classNames(
                        item.current ? 'text-blue' : 'text-gray-500',
                        'px-8 py-5 text-l font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Link></li>
            ))}
            </ul> 
            <ModeToggle />
        </div>
      </div> 
    </nav>
  )
}
