"use client"
import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'


const NewProject = () => {
    return (

        <div className='py-20 w-full' id='projects'>

            <h1 className="heading capitalize">
                a small Section of {' '}<br />
                <span className='text-purple'>
                    recent projects
                </span>
            </h1>


            <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 mt-10 gap-y-8 bg-transparent'>
                {projects.map((item) => (

                    <CardContainer className="inter-var bg-[#13162D]" key={item.id}>
                        <CardBody className=" relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
                            >
                                {item.des}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <Image
                                    src={item.img}
                                    height="1000"
                                    width="1000"
                                    className="h-60 mt-10 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    translateX={-40}
                                    as="button"
                                    className="px-4 py-2 flex items-center justify-center rounded-xl text-xs font-normal dark:text-white"
                                >
                                    {item.iconLists.map((item, index) => (
                                        <div key={index} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            <Image src={item} alt={item} width={100} height={100} className='p-2' />
                                        </div>
                                    ))}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    translateX={40}
                                    as="button"
                                    className="px-4 py-2 flex items-center justify-center rounded-xl dark:text-purple text-white text-[15px] font-bold"
                                >
                                    <a href={item.link} className='flex items-center justify-center gap-2'>
                                        Check Live <FaGithub />
                                    </a>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default NewProject
