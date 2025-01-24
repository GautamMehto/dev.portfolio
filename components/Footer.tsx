import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import { FloatingDock } from "./ui/FloatingDock";

const Footer = () => {

    return (
        <footer className='w-full h-auto pt-20 pb-10' id='footer'>
            <div className='w-full absolute left-0 bottom-0 h-fit'>
                <Image width={100} height={100} src="./footer-grid.svg" alt="grid" className=' w-full object-cover !h-[85vh] opacity-80' />
            </div>

            <div className='flex flex-col items-center'>
                <h1 className="heading capitalize">
                    <span className="text-purple">
                        Ready </span>to take your digital <br />
                    presence to the <span className="text-purple">next level?</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:1mehetogautam@gmail.com" >
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-row gap-5 md:gap-5 justify-between items-center">
                <p className="w-full md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Gautam Mehto
                </p>
                <div className="flex items-center justify-center h-auto w-full md:w-fit">
                    <FloatingDock
                        mobileClassName='translate-y-14'
                        items={socialMedia}
                    />
                </div>
            </div>

        </footer>
    )
}

export default Footer
