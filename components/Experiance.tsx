'use client'
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'


const Experiance = () => {
    return (

        <div className='w-full pb-20'>

            <h1 className="heading capitalize">
                My Work {' '}<br />
                <span className='text-purple'>
                    Experience
                </span>
            </h1>


            <div className='w-full my-20 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button duration={Math.floor(Math.random() * 10000 + 5000)} key={card.id} className=' flex text-white dark:bg-slate-800/[0.5]'>
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <Image width={100} height={100} src={card.thumbnail} alt={card.title} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-normal'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experiance
