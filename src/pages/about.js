import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/prof.png"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0);
        }
    })

}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Tia Wong | About Page</title>
                <meta name="description" content="any description" />
            </Head>
         <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text="About Me!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start 2xl:order-2 2xl:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>Biography</h2>
                    <p className='font-medium mb-4'>Hello! I&apos;m Tia, and I design lessons, resources, and training materials for adult learners, whether in academic or corporate environments. My most recent projects have revolved around ESL lessons and administrative training. I believe everyone should be able to access education, and although the learning process can be challenging at times, it should be approachable and students should feel supported. Using my experience in education, content design, and project management, I love helping others achieve their learning goals.   
                    </p>
                    <p className='font-medium'>During my teaching practicum, I developed and taught lesson plans, as well as monitored and facilitated class discussions both in small and large groups. After teaching the <Link
  href="/project-1"
  className="font-semibold text-primary hover:underline dark:text-primaryDark"
>
  ESL Job Interview Lesson
</Link>, students more readily participated in activities and gained more confidence in their L2 speaking skills. As a Programs Assistant for a university department, I enhanced and developed websites using GitHub and WordPress for faculty, staff, and students. I organized site information to minimize search time and increase ease of reading. While working at a law firm, I created resources such as a presentation and information guide for training current and future employees on client onboarding, supporting smoother transitions. 
                    </p> 
                    <p className='my-4 font-medium'>In my personal time, I enjoy playing multiplayer video games, creative writing, and indoor bouldering with friends. I also love language learning myself, and am currently learning Mandarin, French, and Cantonese.
                    </p> 
                    <p className='font-medium'>I am always seeking opportunities in learning experience design roles and curriculum development. If you&apos;re interested in learning more about my projects and what I can offer to support your vision, feel free to reach out to me!
                    </p>
                </div>

<div className='col-span-3 relative w-full 2xl:w-3/4 2xl:mx-auto h-max rounded-2xl border-2 border-solid order-dark 
bg-light p-8 dark:bg-dark dark:border-light 2xl:order-1 2xl:col-span-8'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />
        <Image src={profilePic} alt="TiaWong" className='w-full h-full rounded-2xl'/>
</div>

<div className='col-span-2 flex flex-col items-start justify-between 2xl:col-span-8 2xl:flex-row 2xl:items-center 2xl:order-3'>
        <div className='mr-10 flex flex-col items-start justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={45} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-primary/75 dark:text-primaryDark/75 xl:text-center md:text-lg sm:text-base xs:text-sm' >students assisted</h2>
        </div>
        <div className='mr-10 flex flex-col items-start justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={6} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-primary/75 dark:text-primaryDark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
        </div>
        <div className='mr-10 flex flex-col items-start justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={3} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-primary/75 dark:text-primaryDark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
        </div>
</div>

            </div>
            </Layout>
         </main>
        </>
    )
}

export default about