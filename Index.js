import Link from "next/link"; import { motion } from "framer-motion";

export default function HomePage() { return ( <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white"> <motion.h1 className="text-5xl font-extrabold mb-6 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} > Engr. Zubair Younus </motion.h1> <motion.p className="text-lg text-gray-400 max-w-3xl text-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} > Civil Engineer with AI automation expertise, streamlining construction processes with technology. Explore my projects, skills, and certifications. </motion.p> <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"> <Link href="/projects"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">Projects</a></Link> <Link href="/certifications"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">Certifications</a></Link> <Link href="/ai-skills"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">AI Skills</a></Link> <Link href="/technical-skills"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">Technical Skills</a></Link> <Link href="/qualification"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">Qualification</a></Link> <Link href="/about"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">About</a></Link> <Link href="/contact"><a className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">Contact Info</a></Link> <a href="/resume.pdf" className="p-4 bg-green-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">Download Resume</a> </div> </div> ); }

export function Projects() { return <div className="p-6 text-white">Projects Page - Showcase major engineering and AI projects.</div>; }

export function Certifications() { return <div className="p-6 text-white">Certifications Page - Display professional certifications.</div>; }

export function AISkills() { return <div className="p-6 text-white">AI Skills Page - Highlight AI expertise and automation solutions.</div>; }

export function TechnicalSkills() { return <div className="p-6 text-white">Technical Skills Page - List engineering and software skills.</div>; }

export function Qualification() { return <div className="p-6 text-white">Qualification Page - Show educational background.</div>; }

export function About() { return <div className="p-6 text-white">About Page - Provide career summary and achievements.</div>; }

export function ContactInfo() { return <div className="p-6 text-white">Contact Info Page - Display contact details.</div>; }

