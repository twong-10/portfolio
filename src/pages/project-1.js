import Head from 'next/head'
import React, { useState } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import project1 from "../../public/images/projects/esl-profile.png"
import project1a from "../../public/images/projects/esl-profile-a.png"
import project1b from "../../public/images/projects/esl-profile-b.png"
import project1c from "../../public/images/projects/esl-profile-c.png"
import Image from 'next/image'

const Project1 = () => {
const [showAnalysis, setShowAnalysis] = useState(false);
    return (
        <>
            <Head>
                <title>Tia Wong | ESL Project Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>

                    <AnimatedText
                        text="Practicum Project: ESL Lesson for CEFR B1+ Learners"
                        className='mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:mb-8'
                    />

                    <div className="grid grid-cols-3 gap-8 mb-10 lg:grid-cols-1">

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={project1a}
                                alt="Project Preview 1"
                                className='w-full h-auto rounded'
                            />
                        </div>

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={project1b}
                                alt="Project Preview 2"
                                className='w-full h-auto rounded'
                            />
                        </div>

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={project1c}
                                alt="Project Preview 3"
                                className='w-full h-auto rounded'
                            />
                        </div>

                    </div>

                    <div className="w-full mb-10">

                        <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                            Context & Challenge
                        </h2>

                        <p className='font-medium text-dark dark:text-light md:text-sm'>
                                Built during my Teaching English as Second Language Practicum, this lesson challenges Japanese exchange students&apos; spoken language skills in the realm of job interviews and the career search process. Since it was created, I have further developed upon it by using and making connections with instructional design models, as well as incorporating feedback from my professor after an observed lesson, resulting in the below iteration.
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-sm'>
                                This lesson plan was built specifically for students at the English Language Institute ASPIRE program at ELI after observing and teaching lessons as part of my TESL Practicum. The ASPIRE program included major topics that each lesson would revolve around, such as Human Rights and the Environment. This lesson in particular was built to help fulfill the Working World topic. At the time of my observations, students struggled the most with willingness to speak out loud, so I wanted to develop a lesson that could cover both the topic and this skill in a way that students would find approachable yet engaging. The topic itself was also especially relevant, as most students were looking into part-time jobs and would soon apply for full-time employment.
                            </p>

                    </div>

                    <div className='w-full flex justify-center mb-10'>
                    <button
                        onClick={() => setShowAnalysis(!showAnalysis)}
                        className='rounded-lg border-2 border-solid border-dark dark:border-light px-6 py-3 font-semibold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark dark:text-light transition-all'
                        >
                        {showAnalysis ? 'Hide Full Analysis' : 'View Full Analysis'}
                    </button>
                    </div>

                    {
    showAnalysis && (
        <>
                    <div className='flex flex-col w-full gap-16 mt-10 2xl:mt-2'>

                        <div className='flex flex-col items-start justify-start 2xl:order-2'>

                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Audience & Learner Analysis
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Level:</span> Intermediate level (CEFR B1+). This class was the 2nd highest level in the ASPIRE program.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Demographic:</span> All Japanese students in the process of completing their undergraduate degree. Most were in 2nd or 3rd year.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Learning Focus of the Program:</span> Speaking practice in the major topics, though other skills such as reading, writing, and listening were worked on in other lessons as well.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Other Considerations:</span> Most students have already had part-time jobs in a convenience store or restaurant setting.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Length:</span> 1h 30min.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Notes:</span> The students tended to be reluctant to speak out loud in front of others when a general question was asked towards the whole class. Over the course of the past two weeks, they have slowly been becoming more confident in responding with the whole class listening. Sometimes students speak very softly as well. </li>
                            </ul>

                        </div>

                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Approach & Rationale
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li> <span className="font-bold text-dark/75 dark:text-light/75">Learning Goal Statement:</span> Demonstrate spontaneous speech confidently in front of others</li>
                            </ul>

                             <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                In terms of the type of learning outcomes, they would be under the cognitive domain <span className="underline">(Bloom&apos;s Taxonomy)</span> and intellectual skills, with some cognitive strategies as outlined in <span className="underline">Gagne&apos;s Five Learning Outcomes</span>.
                            </p>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                A prerequisite analysis determines that the necessary CEFR B1 level English language skills is necessary, as well as a priming discussion regarding career and jobs relevant to the students&apos; goals and background experience. 
                            </p>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                <span className="underline">Terminal and Enabling Learning Objectives</span>, structured using the <span className="underline">ABCD (Audience, Behaviour, Condition, Degree)</span> format is shown below.
                            </p>

                             <p className='font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Terminal</span>
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>To respond clearly in full, spontaneous, spoken sentences at a CEFR B1+ level to job interview questions as delivered by a peer. 
                                </li>
                            </ul>

                            <p className='font-medium md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Enabling</span>
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>To respond in full written sentences at a CEFR B1+ level to preplanned job interview questions.</li>
                                <li>To individually create CEFR B1+ level job interview questions using designated keywords at a CEFR B1+ level.</li>
                                <li>To read out loud CEFR B1+ level job interview questions to the class and peers. </li>
                            </ul>

                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Instructional Design Model
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Using the <span className="underline">Smith & Ragan</span> design model for this project provides enough flexibility in comparison to other models such as <span className="underline">Dick, Carey & Carey</span>, while having enough structure for a single contained instance of a classroom environment. Using this model also fits with <span className="underline">ADDIE</span>. 
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Analysis</span>: Learning Context, Learners, Learning Task/Goal Analysis</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Strategy</span>: Organizational Strats (e.g., lesson structure, feedback), Delivery Strats (e.g., media, tools, lecture, discussion, activity), Management Strats (e.g., logistics and scheduling)</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Evaluation</span>: Formative (such as dropping in on interviews) and Summative (the collective discussion at the end of the lesson)</li>
                            </ul>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Instructional Strategy
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Constructivism</span>: Instruction is oriented through conversations with peers and the instructor, using personal background knowledge to help supplement the lesson.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Andragogy</span>: When working with adult learners, the purpose must be expressed to the students, which in this case was to help prepare them for the job search process and practice verbal English skills. Self-concept was included through allowing students the freedom to choose and create which interview questions they would ask, and freedom in how they would respond. This is also relied on their personal experiences as they pulled from those for their speaking points, with the readiness to learn, motivation, and orientation for learning being that these skills would be directly applicable to their near future.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Vygotsky & Zone of Proximal Development</span>: As this is constructivist in nature, the idea that the lesson itself pushes students just beyond their current stage is demonstrated through the use of increased speaking.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Cognitive Load Management</span>: The three categories are managed as followed. Instrinsic load and the difficulty of the topic is supported through scaffolding, providing ample discussions about job interviews and part-time experiences, as well as providing important keywords. As for extraneous loads, distractions from other interviews were minimized by spreading groups of two apart from each other in the classroom. In terms of the germane load, examples were also used in order to facilitate constructive effort.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Motivational Design through E3</span>: E3 applies the most strongly here, as it is for scenario situations and immersive interactive experiences, which is what the roleplay element of this lesson provides.</li>
                            </ul>
                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Assessment Design
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                The type of assessment design itself is a supply-response, where students freely come up with their own spontaneous responses to interview questions as opposed to selecting pre-written responses. To grade these assessments, although this was mostly done informally due to the nature of the program, both following a set of criteron as set out by the program and self (which is reflected on by the students themselves) were used. Diagnostic, formative, and summative forms of assessment were used through the entire process, first beginning with the warm-up discussion as it provides ample opportunity for the instructor to diagnose specific areas of weakness. For example, specific keywords based on what students don't know but would be helpful could be brought in. Formative assessment occurs during the interview roleplay, where as the instructors monitors students&apos; progress, they can step in and provide additional commentary, further questions, and provide assistance to gauge where students are at. The summative portion of the assessment occurs at the very end of the lesson, when the instructor facilitates a wrap-up discussion where they can see on a larger scale what students&apos; takeaways were. 
                            </p>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                It also possible to incorporate <span className="underline">Kirkpatrick&apos;s Four Levels</span> in this design planning process. In terms of the Results and Behaviour portions, they are a bit hard to determine post-practicum due to the nature of the proram, but students in general appeared more confident and more readily raised their hands when it came to speaking in class following this particular roleplaying activity. As for the Learning portion, students successfully spoke outloud and demonstrated deeper thinking in their responses, taking risks by talking about areas they might not have previously and pushing further into that higher <span className="underline">zone of development</span>. Overall, when considering the Reaction portion, students reported in the final class discussion that they enjoyed the roleplay activity and that it was good practice for their speaking skills. 
                            </p>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start 2xl:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                The Solution
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Materials that were developed for this lesson, as well as the lesson plan, are all included on this page. These were all reviewed by the assigned teaching coach, as well as the observing teacher during the lesson. This plan was given a field trial directly to the intended class due to the short nature of the program as a synchronous in person delivery. 
                            </p>

                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Tradeoffs & Constraints on Design Decisions
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Scope and timeline were two of the largest constraints during this process. The program itself was very short, and there was only a single lesson that would be evaluated by an observing teacher. This meant that the lesson needed to fit entirely within the regular classroom time, and could not span multiple lessons. The topic of the lesson itself also needed to fit within the guidelines as set out by the program. Since Working World was one of the major themes that the program needed to cover, the job interview lesson fit within that requirement. There was also a space limitation, since the classroom itself is only so large. This meant that although there was an attempt to eliminate distractions in the classroom, during the activity there was a lot of overlapping speaking from different groups.
                            </p>

                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Evaluation of Results and Outcomes
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                The evaluation genre as set out by <span className="underline">Greene</span> falls under a limited version of <span className="underline">learning-and-use</span>, whereby the lesson itself could have provided the teacher coach with potential material and lessons to reuse for later programs, but this isn&apos;t necessarily guaranteed. Earlier, Kirkpatrick&apos;s four levels were already discussed. As such, although it was difficult to gain data on results and behaviour, it was possible to measure learning and students&apos; reaction to the lesson. 
                            </p>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Reflection and Iterations
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                After feedback given from the observing teacher, teacher coach, and reflecting upon the teaching experience, there are some necessary elements that could be changed. One in particular is more use of images and visuals, one of which including that of students as opposed to business people, to provide a more relatable experience for students. Another is to try other means of separating students to lower the amount of distractions, though this comes with its own upsides and downsides. If this lesson were to be employed again, having a more rigorous form of evaluation on the student experience and their takeaways would also be useful to gauge behaviour and results. 
                            </p>
                            
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                References
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>Bloom, B. S. (Ed.). (1956). <span className="italic">Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain.</span> David McKay.</li>
                                <li>Branch, R. M. (2009). <span className="italic">Instructional design: The ADDIE approach.</span> Springer.</li>
                                <li>Dick, W., Carey, L., & Carey, J. O. (2015). <span className="italic">The systematic design of instruction</span> (8th ed.). Pearson.</li>
                                <li>Gagné, R. M. (1985). <span className="italic">The conditions of learning and theory of instruction</span> (4th ed.). Holt, Rinehart and Winston.</li>
                                <li>Greene, J. C. (2007). <span className="italic">Mixed methods in social inquiry.</span> Jossey-Bass.</li>
                                <li>Kirkpatrick, D. L., & Kirkpatrick, J. D. (2006). <span className="italic">Evaluating training programs: The four levels</span> (3rd ed.). Berrett-Koehler.</li>
                                <li>Heinich, R., Molenda, M., Russell, J. D., & Smaldino, S. E. (1999). <span className="italic">Instructional media and technologies for learning</span> (6th ed.). Merrill.</li>
                                <li>Mager, R. F. (1997). <span className="italic">Preparing instructional objectives</span> (3rd ed.). CEP Press.</li>
                                <li>Smith, P. L., & Ragan, T. J. (2005). <span className="italic">Instructional design</span> (3rd ed.). Wiley.</li>
                                <li>Vygotsky, L. S. (1978). <span className="italic">Mind in society: The development of higher psychological processes.</span> Harvard University Press.</li>
                                
                            </ul>

                        </div>
                    </div>

                        </>
    )
}
                </Layout>
            </main>

        </>
    )
}

export default Project1