"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero1 from '/public/images/1.jpeg';
import Hero2 from '/public/images/2.jpeg';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
    };

    return (
        <div id="custom-controls-gallery" className="relative w-full max-w-[1240px] m-auto pt-4 h-[80vh]" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <motion.div
                    className={`duration-500 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`}
                    data-carousel-item="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={Hero1} layout="fill" objectFit="cover" alt="gg" />
                </motion.div>
                <motion.div
                    className={`duration-500 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`}
                    data-carousel-item="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === 1 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={Hero2} layout="fill" objectFit="cover" alt="gg" />
                </motion.div>
            </div>
            <div className="flex justify-center items-center pt-4">
                <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
