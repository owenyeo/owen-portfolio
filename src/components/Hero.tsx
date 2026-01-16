import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffects'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.10] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    A Next.JS + React + Three.JS webpage
                </h2>

                <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Imagine Our Future."
                />

                <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
                    Hi! I&apos;m Owen, a Singaporean student seeking to bridge human imagination and technology
                    to improve our lived experiences. 
                </p>
                <a href="#about">
                    <MagicButton 
                    title="See my work"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
                <div className="flex gap-4 mt-6">
                    <a
                        href="https://github.com/owenyeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm 
                                backdrop-blur-md hover:bg-white/10 transition"
                    >
                        <FaGithub className="text-lg" />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/owen-yeo-a0b45a254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm 
                                backdrop-blur-md hover:bg-white/10 transition"
                    >
                        <FaLinkedin className="text-lg text-blue-400" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero