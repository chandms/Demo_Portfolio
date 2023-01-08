import React from "react";

export default function Navbar(){
    return (
        <nav className="flex flex-row flex-wrap h-auto py-2 bg-pink-200 place-content-evenly md:sticky lg:sticky top-0 z-10">
             <div><a href="#about" className="font-mono font-bold underline hover:bg-blue-400 rounded p-1 sm:p-0.5">About</a></div>
            <div><a href="#experience" className="font-mono font-bold underline hover:bg-blue-400 rounded p-1 sm:p-0.5">Experience</a></div>
            <div><a href="#education" className="font-mono font-bold underline hover:bg-blue-400 rounded p-1 sm:p-0.5">Education</a></div>
            <div><a href="#skills" className="font-mono font-bold underline hover:bg-blue-400 rounded p-1 sm:p-0.5">Skills</a></div>
            <div><a href="./example_cv.pdf" className="font-mono font-bold underline hover:bg-blue-400 rounded p-1 sm:p-0.5">Resume</a></div>
        </nav>
    )
}