'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="w-full flex flex-col justify-center items-center px-6 text-center">

            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-4"
            >
                waddup
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-gray-300 mb-8 text-lg"
            >
                I build cool apps. I lift heavy things. And I’m not afraid of 3D.
            </motion.p>

            <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <a href="https://github.com/owenyeo" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <FaGithub size={32} />
                </a>
                <a href="https://linkedin.com/in/owen-yeo-a0b45a254/" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <FaLinkedin size={32} />
                </a>
            </motion.div>

            <motion.div
                className="w-4 h-4 mt-12 rounded-full bg-blue-500 shadow-lg animate-pulse"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-purple-800/50 via-fuchsia-700/30 to-black border border-purple-600/30 rounded-xl p-6 shadow-lg overflow-hidden"
        >
            <Image
                src="/dawg.jpg" // Put your image in public/
                alt="AI Innovation"
                width={500}
                height={300}
                className="rounded-md object-cover w-full h-auto"
            />
            <div className="mt-6 text-left">
                <p className="text-sm text-fuchsia-300">Welcoming the new age</p>
                <h3 className="text-xl font-bold text-white">
                Passionate about innovating with GenAI
                </h3>
            </div>
            </motion.div>

            {/* Right Card */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col justify-between bg-gradient-to-tr from-black via-purple-900/20 to-purple-800/40 border border-purple-600/30 rounded-xl p-6 shadow-lg"
        >
            <h3 className="text-white text-2xl font-semibold mb-4">
                A Singaporean student<br />seeking global impact
            </h3>
            <Image
                src="/globe.svg" // or a simple SVG glow effect
                alt="Globe"
                width={200}
                height={200}
                className="mx-auto mt-4 opacity-80"
            />
        </motion.div>
        </div>
    </section>
    )
} 