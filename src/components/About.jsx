import { Button, Link } from '@nextui-org/react'
import React from 'react'

const About = () => {
    return (
        <div className='p-4 flex  justify-center gap-8'>
            <div>
                <Link href='https://github.com/Amittallur' target='_blank' className='text-white'> <Button variant='shadow' color='success' className='text-white'>Github   </Button></Link>

            </div>
            <div>
                <Link href='https://www.linkedin.com/in/amittallur/' target='_blank' className='text-white'> <Button variant='shadow' color='primary' className='text-white'>LinkedIN  </Button></Link>

            </div>
            <div>
                <Link href='mailto:amittalluratom@gmail.com' target='_blank' className='text-white'> <Button variant='shadow' color='secondary' className='text-white'>Email </Button></Link>

            </div>
            
        </div>
    )
}

export default About