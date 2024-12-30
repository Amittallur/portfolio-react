import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'

const Work = () => {
    return (
        <div className='flex justify-around w-full flex-wrap '>
            <div className='p-8 flex justify-center'>
                <Card isBlurred className='w-full md:w-1/2 p-4 bg-gradient-to-r from-zinc-900 to-zinc-800'>
                    <CardHeader className='text-2xl font-bold flex justify-center'>Software Engineer</CardHeader>
                    <CardBody>
                        <div>
                            <h3 className='text-xl font-bold flex justify-center'>@Sedona Management Solutions</h3>

                        </div>
                    </CardBody>
                    <CardFooter>
                        <p>

                            As a Frontend Developer, I specialize in crafting user-friendly interfaces using React. My leranings has honed my problem-solving skills and deepened my understanding of computer science.

                            Driven by a passion for modern web development, I bring creativity and adaptability to frontend projects, ensuring seamless, engaging user experiences.
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <div className='p-8 flex justify-center'>
                <Card isBlurred className='w-full md:w-1/2 p-4 bg-gradient-to-r from-zinc-900 to-zinc-800'>
                    <CardHeader className='text-2xl font-bold flex justify-center'>Frontend Developer </CardHeader>
                    <CardBody>
                        <div>
                            <h3 className='text-xl font-bold flex justify-center'>@Applied Materials</h3>

                        </div>
                    </CardBody>
                    <CardFooter>
                        <p>
                            At Applied Materials, I transitioned to the automation team, rapidly adopting Next.js and introducing Material UI, Formik, and Yup for efficient UI development. I independently developed 6+ front-end projects, taking full ownership of all front-end tasks and ensuring effective version control with Git.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Work