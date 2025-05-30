'use client'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="text-white py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                About Me
                </motion.h2>
                <div className="flex flex-col md:flex-row md:items-start gap-10">
                    <motion.div
                        className="md:w-1/2 text-lg text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="leading-relaxed mb-4">
                        I'm Owen — a CS student at NUS who thrives on building real stuff with real impact. From
                        coding recommender systems to deploying 3D visual playgrounds, I bring intensity to both
                        code and the gym. I’m always learning, always lifting.
                        </p>
                        <p className="leading-relaxed">
                        When I’m not shipping side projects, I’m exploring trails, watching people’s lives unfold
                        on long walks, or quietly leveling up in the background.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}