'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Feedback = () => {
    return (

        <div className='pb-20 w-full' id='testimonials'>

            <h1 className="heading capitalize">
                Kind words from {' '}<br />
                <span className='text-purple'>
                    clients
                </span>
            </h1>

            <div className='flex flex-col items-center mt-10'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>

            <div className="flex flex-wrap items-baseline justify-center gap-4 md:gap-16 mt-10 sm:mt-20">
                {companies.map((company) => (
                    <React.Fragment key={company.id}>
                        <div className="flex flex-col justify-center items-center md:max-w-60 max-w-32 gap-2">
                            <Image
                                src={company.img}
                                alt={company.name}
                                width={100}
                                height={100}
                                className="md:w-10 w-10 rounded-xl"
                            />
                            <p className="md:w-24 w-20 text-center">
                                {company.name}
                            </p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Feedback
