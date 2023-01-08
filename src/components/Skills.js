import React from "react";
import { skills } from "../data/data";

export default function Skills(){
    return (
        <section id="skills" className="bg-sky-900 h-auto flex flex-col flex-wrap">

                <div className="m-auto flex flex-col flex-wrap py-2">
                    <h1 className="font-mono text-white font-xl flex justify-around"> My Skills </h1>
                </div>

                <div className="grid grid-cols-2 flex justify-center text-slate font-serif">

                    {
                        skills.map((skill) => {
                            return (
                                <div key={skill} className="container px-5 py-10 mx-auto text-center lg:px-40"> 
                                    <div className="flex flex-row flex-wrap bg-sky-200 py-4">
                                        <img src={skill.img} alt="" className="w-16 m-auto flex justify-around"/>
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>

        </section>
    );
}