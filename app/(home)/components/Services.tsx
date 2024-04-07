"use client";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import React from 'react'
import Link from "next/link";
import Image from "next/image";


export default function Services() {
  return (
    <div className='flex m-auto w-[80vw] justify-center flex-col mt-[200px]'>
        <div className="title">
            <h1 className='text-center text-[3rem]'>Our Services</h1>
        </div>
        <div className="cards flex justify-around items-start">

<CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          IMEI Services
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
           - iBypass LPro Bypass [ Mac Tool ] Official Distributor ⚜️Hover over this card to unleash the power of CSS perspective
        </CardItem>
      </CardBody>
    </CardContainer>
<CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Server Services
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          - UnlockTool Activation
        </CardItem>
      </CardBody>
    </CardContainer>

        </div>
    </div>
  )
}
