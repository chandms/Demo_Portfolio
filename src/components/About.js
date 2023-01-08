import React from "react";
import { SocialIcon } from 'react-social-icons';
import { about_title, about_desc } from "../data/data";

export default function About(){
    return (
        <section id="about" className="bg-pink-200 h-auto flex flex-col flex-wrap py-2" >
             <div className="m-auto flex flex-col flex-wrap py-2">
                    <img src="./images/profile.jpeg" alt="profile" className="w-32 m-auto flex justify-around py-2"/>
                    <h1 className="font-mono text-slate font-xl flex justify-around"> {about_title} </h1>
                    <p className="m-auto flex ustify-around text-slate font-serif"> {about_desc} </p>
                    <br></br>
                    <div className="flex justify-center">
                        <SocialIcon url="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg mr-5"  />
                        <SocialIcon url="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg mr-5"/>
                        <SocialIcon url="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg mr-5"/>
                    </div>
            </div>
        </section>
    );
}