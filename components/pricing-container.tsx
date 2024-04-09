"use client";

import React, { useState } from 'react'
import clsx from 'clsx';
import { motion } from 'framer-motion';
const plans = [
    {
        "name": "Basic",
        "active": false,
        "price": {
            "annually": "199.99",
            "monthly": "19.99",
        },
        "features": {
            "storage": "500 GB",
            "users": 2,
            "sendUp": "3 GB",
        }
    },
    {
        "name": "Professional",
        "active": true,
        "price": {
            "annually": "249.99",
            "monthly": "24.99",
        },
        "features": {
            "storage": "1 TB",
            "users": 5,
            "sendUp": "10 GB",
        }
    },
    {
        "name": "Master",
        "active": false,
        "price": {
            "annually": "399.99",
            "monthly": "39.99",
        },
        "features": {
            "storage": "2 TB",
            "users": 10,
            "sendUp": "20 GB",
        }
    },
];

export function PropDivider() {
    return (
      <div className="w-full h-[0.015rem] bg-LightGrayishBlue/50"
      ></div>
    )
  }
  
type PlanProps = (typeof plans)[number];

export function Plan({
	name,
	active,
	price,
	features,
}: PlanProps ) {

	let planClass = `flex flex-col justify-start items-center rounded-[0.65rem] px-[1.9rem] font-bold  ${
		(active) ? "h-[31.25rem] w-[21.875rem] bg-customGradientBottom py-[3.4rem] text-white" : "h-[28.4rem] w-[21.875rem] py-[1.9rem] bg-white text-"
	}`;


	return (
		<section className={planClass}>
			
			<h2 className="text-lg">{name}</h2>
			
			<h1 className={`flex items-center gap-[0.7rem] text-7xl -tracking-[0.03em] mt-[1.45rem] mb-[2.1rem] ${
				(active)? "text-white" : "text-DarkGrayishBlue"
			}`}>
				<span className="text-[2.5rem]">$</span>
				500
			</h1>
			
			<div className="flex flex-col items-center gap-[0.95rem] w-full text-[0.95rem]">
				<PropDivider />
				<h3>{features.storage} Storage</h3>
				<PropDivider />
				<h3>{features.users} Users Allowed</h3>
				<PropDivider />
				<h3>Send up to {features.sendUp}</h3>
				<PropDivider />
			</div>

			<button className={`h-[2.75rem] w-full text-xs tracking-[.17em] rounded-md mt-[1.95rem] uppercase border-[0.1rem] ${
				(active)? "active-btn" : "gradient-btn"
			}`}>
				Learn more
			</button>

		</section>
	)
}




export function Plans() {
  return (
    <motion.div 
      className="flex flex-col gap-8 mb-20 items-center pt-[4rem] lg:flex-row lg:gap-0 lg:mb-0 drop-shadow-purple"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          type: "tween",
          duration: 0.2
      }}
    >
        {
            plans.map((plan, index) => (
                <React.Fragment key={index}>
                    <Plan {...plan}/>
                </React.Fragment>
            ))
        }
    </motion.div>
  )
}
