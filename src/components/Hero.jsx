import { Image } from '@nextui-org/react';
import React from 'react';
import profile from '../assets/amit.jpeg';

const Hero = () => {
    return (
        <div className='p-4 flex flex-col justify-center'>
            <div>
                <h1 className='text-3xl font-bold text-center'>
                    Amit Tallur
                </h1>
            </div>
            <div className='mt-4 flex justify-center'>
                <Image
                    isBlurred
                    src={profile}
                    alt='Amit Tallur'
                    width={150}
                    height={150}
                    className='rounded-full mx-auto' />
            </div>
            <div className='mt-4'>
                <p className='text-center'>Frontend Developer<br />  Quick learner and a Problem solver with a knack for
                    creativity</p>
            </div>
        </div>
    )
}

export default Hero