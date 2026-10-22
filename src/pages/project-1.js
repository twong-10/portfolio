import Head from 'next/head'
import React, { useState } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import project1 from "../../public/images/projects/esl-profile.png"
import project1a from "../../public/images/projects/esl-profile-a.png"
import project1b from "../../public/images/projects/esl-profile-b.png"
import project1c from "../../public/images/projects/esl-profile-c.png"
import lessonplan1a from "../../public/images/projects/lessonplan1a.png"
import lessonplan1b from "../../public/images/projects/lessonplan1b.png"
import lessonplan1c from "../../public/images/projects/lessonplan1c.png"
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
                            Project Summary
                        </h2>

                        <p className='font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Role:</span> Teacher practicum, UBC English Language Institute (2025); case study written 2026
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Audience:</span> Adult Japanese exchange students (CEFR B1+)
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Challenge:</span> In my observations, these students struggled most with spontaneous speech. The ASPIRE program needed a lesson for its Working World theme, and most students were about to start job-hunting. The class length was 90-minutes, and the lesson needed to be completed within this time frame. 
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Project:</span> A scaffolded interview-roleplay lesson with lesson materials, a lesson plan, later revised after feedback from my observing professor.
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-sm'>
                               <span className="font-bold text-dark/75 dark:text-light/75">Approach:</span> Smith & Ragan, and ABCD objectives. Results are informal, and include reflections on what wasn&apos;t measured.
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
                                Context & Challenge
                            </h2>

                            <p className='font-medium text-dark dark:text-light md:text-sm'>
                               Built during my Teaching English as Second Language (TESL) Certificate Practicum, this lesson addresses Japanese exchange students&apos; spoken language skills in the realm of job interviews and the career search process. Since it was created, I have further developed upon it by using and making connections with the Smith & Ragan (2005) design model, as well as incorporating feedback from my professor after an observed lesson, resulting in the below iteration.
                            </p>

                             <p className='font-medium text-dark dark:text-light md:text-sm'>
                               This lesson plan was built specifically for students at the ELI&apos;s ASPIRE program after observing and teaching lessons as part of my TESL Practicum. The ASPIRE program included major topics, such as Human Rights and the Environment. This lesson was built to help fulfill the Working World topic. At the time of my observations, students struggled the most with spontaneous speech, so I wanted to develop a lesson that could cover both the topic and this skill in a way that students would find approachable yet engaging. The topic itself was also especially relevant, as most students were looking into part-time jobs and would soon apply for full-time employment.
                            </p>

                        </div>

                    </div>

                    <div className='flex flex-col w-full gap-16 mt-10 2xl:mt-2'>

                        <div className='flex flex-col items-start justify-start 2xl:order-2'>

                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Audience & Learner Analysis
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Level:</span> Intermediate level (CEFR B1+). This class was the 2nd highest level in the ASPIRE program.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Demographic:</span> All Japanese exchange students in the process of completing their undergraduate degree. Most were in 2nd or 3rd year.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Learning Focus of the Program:</span> Speaking practice in the major topics, though other skills such as reading, writing, and listening were worked on in other lessons as well.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Other Considerations:</span> Most students have already had part-time jobs in a convenience store or restaurant setting.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Length:</span> 1h 30min.</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Notes:</span> The students struggled to spontaneously speak out loud. Over the course of the past two weeks, they have slowly been becoming more able to speak longer unplanned responses out loud. Sometimes students speak very softly as well.</li>
                            </ul>

                        </div>

                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Approach & Rationale
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li> <span className="font-bold text-dark/75 dark:text-light/75">Learning Goal Statement:</span> Demonstrate spontaneous speech regarding the topic of job interviews</li>
                            </ul>

                             <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                In terms of the type of learning outcomes for this lesson, and when considering Gagné&apos;s Five Learning Outcomes (Gagné, 1985; Oh, n.d.-a), intellectual skills are the type that emerges most in this lesson, as students will need to build the relevant vocabulary in order to speak out loud organically. 
                            </p>

                              <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Given that the class is of CEFR B1+ level English, that is the language skill required for this lesson. 
                            </p>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                After determining the type of learning outcomes, I moved on to clarifying the Terminal and Enabling Learning Objectives, structured using the ABCD (Audience, Behaviour, Condition, Degree) format (Oh, n.d.-b). These are summarized more succinctly below using instructional design terminology, gathered from the original lesson plan as depicted. 
                            </p>

                             <p className='font-medium text-dark dark:text-light md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Terminal</span>
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>The student will respond in full sentences at a CEFR B1+ level to at least 4 job interview questions in a one-on-one interaction as delivered by a peer, with minimal errors and without using notes. 
                                </li>
                            </ul>

                            <p className='font-medium md:text-sm'>
                                <span className="font-bold text-dark/75 dark:text-light/75">Enabling</span>
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>The student will discuss 3 CEFR B1+ grammar and vocabulary level job-related questions in a small group discussion, with errors and notes allowed.</li>
                                <li>The student will create 3 CEFR B1+ grammar and vocabulary level job interview wh-style questions from a list of designated keywords in a small group, written with minimal errors.</li>
                            </ul>

                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Instructional Design Model
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Using the Smith & Ragan&apos;s design model for this project provides enough flexibility, while having enough structure for a single contained instance of a classroom environment (Smith and Ragan, 2005; Oh, n.d.-c; Oh, n.d.-d). 
                            </p>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Analysis</span>: Learning Context, Learners, Learning Goal Analysis</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Strategy</span>: Organizational (e.g., lesson structure, feedback), Delivery (e.g., media, tools, lecture, discussion, activity), Management (e.g., logistics and scheduling)</li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Evaluation</span>: Diagnostic (initially gauging areas that require more vocabulary support) and Formative (such as dropping in on interviews) </li>
                            </ul>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Instructional Strategy
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Constructivism (Ertmer and Newby, 2018)</span>: Instruction is oriented through conversations with peers and with myself as the instructor, using students&apos; personal background knowledge and experience in the workforce to help supplement the lesson. Students would sometimes ask for additional vocabulary they could use, or I would provide them with more appropriate synonyms for vocabulary they were already using. </li>
                                <li><span className="font-bold text-dark/75 dark:text-light/75">Zone of Proximal Development (Huang, n.d.; Vygotsky, 1978)</span>: As this lesson is constructivist in nature, the idea that the lesson itself pushes students just beyond their current stage is demonstrated through the use of increased spontaneous speaking and new job search related vocabulary.</li>
                            </ul>
                            <h2 className='mb-4 text-lg font-bold italic text-primary/75 dark:text-primaryDark/75'>
                                Assessment Design
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                The type of assessment design itself is a supply-response (Kalantzis and Cope, n.d.-b), where students freely come up with their own spontaneous responses to interview questions as opposed to selecting and preparing pre-written responses. 
                            </p>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                As for grading, due to the nature of the program, most assessments were pass-fail, which applies to this lesson as well. I informally used diagnostic and formative forms of assessment through the entire process (Kalantzis & Cope, n.d.-a). I primed the students for this particular lesson by having conversations about dream jobs and careers in the lesson beforehand to diagnose specific areas of weakness. Through this, I was able to find specific and important keywords for the lesson. Formative assessment occurred during the interview roleplay activity, where I monitored students&apos; progress, stepped in and provided additional commentary when necessary, posed follow up questions, and assisted with student questions to gauge where students were at. There wasn&apos;t a formal summative assessment due to the nature of the program, so students&apos; abilities to achieve the terminal learning objective were assessed informally through monitoring and the final class discussion.
                            </p>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start 2xl:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                The Solution
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Materials that were developed for this lesson, as well as the lesson plan, are all included on this page. These were all reviewed by my assigned teaching coach, as well as my professor who observed the lesson. This plan was given a field trial directly and only to the intended class due to the short nature of the program as a synchronous in-person delivery. To provide scaffolding, an initial warm-up discussion on interviews and an activity on creating wh-questions as a group were included. The interview activity was then followed by a wrap-up discussion that encouraged students to paraphrase in a spontaneous manner what they learned from their interviews. 
                            </p>
                        </div>
                    </div>

                     <div className="grid grid-cols-3 gap-8 mb-10 lg:grid-cols-1">

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={lessonplan1a}
                                alt="Lesson Plan 1"
                                className='w-full h-auto rounded'
                            />
                        </div>

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={lessonplan1b}
                                alt="Lesson Plan 2"
                                className='w-full h-auto rounded'
                            />
                        </div>

                        <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={lessonplan1c}
                                alt="Lesson Plan 3"
                                className='w-full h-auto rounded'
                            />
                        </div>

                    </div>

                    <div className='flex flex-col w-full gap-16 mt-2 2xl:mt-2'>
                        <div className='flex flex-col items-start justify-start 2xl:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Tradeoffs & Constraints on Design Decisions
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                Scope and timeline were two of the largest constraints during this process. The program itself was very short, and there was only a single lesson that would be evaluated by an observing teacher. This meant that the lesson needed to fit entirely within the regular classroom time, and could not span multiple lessons. The topic of the lesson itself also needed to fit within the guidelines as set out by the program. Since &apos;Working World&apos; was one of the major themes that the program needed to cover, the job interview lesson fit within that requirement. There was also a space limitation, since the classroom itself was only so large. This meant that although there was an attempt to eliminate distractions in the classroom, during the activity there was a lot of overlapping speaking from different groups.
                            </p>

                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Evaluation of Results and Outcomes
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                                At the very end of the lesson, I facilitated a wrap-up discussion on students&apos; takeaways. In terms of the results, they are a bit hard to quantify post-practicum due to the nature of the program, but students in general more readily raised their hands and spoke for longer when it came to speaking in class following this particular roleplaying activity. Students successfully spoke spontaneously out loud and demonstrated deeper thinking in their responses, pushing further into that higher zone of development (Huang, n.d.; Vygotsky, 1978). Overall, when considering student&apos;s reactions, in the final class discussion they enjoyed the roleplay activity and that it was good practice for their speaking skills. 
                            </p>

                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-16'>
                        <div className='flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                Reflection and Iterations
                            </h2>

                            <p className='font-medium mb-4 text-dark dark:text-light md:text-sm'>
                               After feedback given from my observing professor, teacher coach, and reflecting upon the teaching experience myself through the lens of instructional design models, there are some elements that I would change in a new iteration. One in particular is including more images and visuals. For example, including an image that depicts students as opposed to business people, to provide a more relatable experience. Another change I would make is to try other means of separating students to lower the amount of distractions, however, this change comes with its own upsides and downsides that would need to be tested. If this lesson were to be used again, having a more rigorous form of evaluation on the student experience and their takeaways would also be useful to more accurately gauge behaviour and results. I would look at measuring the number of hesitations, and length of speech, with a specified rubric. 
                            </p>
                            
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75'>
                                References
                            </h2>

                            <ul className="list-disc ml-6 font-medium mb-4 text-dark dark:text-light md:text-sm">
                                <li>Ertmer, P. A., & Newby, T. J. (2018). <span className="italic">Behaviorism, cognitivism, constructivism. In R. West (Ed.), Foundations of learning and instructional design technology</span> (1st ed.). EdTech Books. https://edtechbooks.org/lidtfoundations/behaviorism_cognitivism_constructivism</li>

                                <li>Gagné, R. M. (1985). <span className="italic">The conditions of learning and theory of instruction</span> (4th ed.). Holt, Rinehart and Winston.</li>

                                <li>Smith, P. L., & Ragan, T. J. (2005). <span className="italic">Instructional design</span> (3rd ed.). Wiley.</li>

                                <li>Huang, W. (n.d.). <span className="italic">Learning theories for instructional design, part II</span> [Video]. In <span className="italic">Instructional design foundations and applications</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/instructional-design-foundations-applications</li>

                                <li>Kalantzis, M., & Cope, B. (n.d.-a). <span className="italic">Alternative concepts and practices of assessment</span> [Video]. In <span className="italic">Assessment for learning</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/assessmentforlearning</li>

                                <li>Kalantzis, M., & Cope, B. (n.d.-b). <span className="italic">Supply response assessments</span> [Video]. In <span className="italic">Assessment for learning</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/assessmentforlearning</li>

                                <li>Oh, E. (n.d.-a). <span className="italic">Analyzing the learning task: Part I: Learning goals and outcomes</span> [Video]. In <span className="italic">Instructional design foundations and applications</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/instructional-design-foundations-applications</li>

                                <li>Oh, E. (n.d.-b). <span className="italic">Analyzing the learning task: Part III: Writing learning objectives</span> [Video]. In <span className="italic">Instructional design foundations and applications</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/instructional-design-foundations-applications</li>

                                <li>Oh, E. (n.d.-c). <span className="italic">Instructional design models: Part I</span> [Video]. In <span className="italic">Instructional design foundations and applications</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/instructional-design-foundations-applications</li>

                                <li>Oh, E. (n.d.-d). <span className="italic">Instructional design models: Part II</span> [Video]. In <span className="italic">Instructional design foundations and applications</span>. Coursera; University of Illinois Urbana-Champaign. https://www.coursera.org/learn/instructional-design-foundations-applications</li>

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