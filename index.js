// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Example icons
import { CircularProgressbar } from 'react-circular-progressbar'; // For skill charts
import 'react-circular-progressbar/dist/styles.css'; // Import styles

const HomePage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 500); // Delay for loading effect
    },);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeInOut" },
    };

    const skills = [
        { name: 'Transmission Tower Analysis', level: 90 },
        { name: 'Planning & Scheduling', level: 85 },
        { name: 'Estimation & Construction', level: 80 },
        //... more skills
    ];

    const projects = [
        {
            title: 'Project Title 1',
            description: 'Short description of the project.',
            image: '/project1.jpg', // Path to your image
        },
        //... more projects
    ];

    return (
        <div className="dark:bg-gray-900 dark:text-gray-300 min-h-screen">
            <Head>
                <title>Zubair Younus - Portfolio</title>
            </Head>

            <header className="py-10 px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-4xl font-bold mb-2"
                >
                    Zubair Younus
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                    className="text-lg"
                >
                    Civil Engineer
                </motion.p>
            </header>

            <main className="container mx-auto px-6 md:px-12 lg:px-24 py-10">
                {/* About Section */}
                <section className="mb-16" id="about">
                    <motion.h2 variants={fadeIn} initial="initial" animate="animate" className="text-3xl font-bold mb-6">About Me</motion.h2>
                    <motion.div variants={fadeIn} initial="initial" animate="animate" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p>Write something about yourself, your skills, and experience.</p>
                        </div>
                        {/* Timeline */}
                        <div>
                        </div>
                    </motion.div>
                </section>


                {/* Skills Section */}
                <section className="mb-16" id={fadeIn} initial="initial" animate="animate" className="text-3xl font-bold mb-6">Skills</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                initial="initial"
                                animate="animate"
                                className="bg-gray-800 rounded-lg p-6 glassmorphism" // Glassmorphism class
                            >
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <CircularProgressbar value={skill.level} text={`${skill.level}%`} />
                            </motion.div>
                        ))}
                    </div>

                </section>

                {/* Projects Section */}
                <section className="mb-16" id="projects">
                    <motion.h2 variants={fadeIn} initial="initial" animate="animate" className="text-3xl font-bold mb-6">Projects</motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div variants={fadeIn} initial="initial" animate="animate" key={index} className="bg-gray-800 rounded-lg overflow-hidden glassmorphism">
                                <Image src={project.image} alt={project.title} width={500} height={300} objectFit="cover" className="project-image" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </section>


                {/* Contact Section */}
                <section className="mb-16" id="contact">
                    <motion.h2 variants={fadeIn} initial="initial" animate="animate" className="text-3xl font-bold mb-6">Contact</motion.h2>

                    <motion.div variants={fadeIn} initial="initial" animate="animate">
                    <div className="flex justify-center space-x-6">
                    <a href="mailto:zubairyounus186@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-3xl text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-gray-400 hover:text-white" />
                    </a>
                </div>


                    </motion.div>

                </section>



            </main>
            <footer className="py-4 text-center">
                    <p>&copy; 2023 Zubair Younus</p>
                </footer>
        </div>
    );
};

export default HomePage;


