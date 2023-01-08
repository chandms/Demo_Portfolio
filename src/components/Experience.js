import React from "react";
import { experiences } from "../data/data";
import Collapsible from 'react-collapsible';


export default function Experience(){
    return (
            <section id="experience" className="bg-sky-900 h-auto flex flex-col flex-wrap">

                <div className="m-auto flex flex-col flex-wrap py-2">
                    <h1 className="font-mono text-white font-xl flex justify-around"> Software Engineering and Research Experience </h1>
                    <p className="m-auto flex ustify-around text-white font-serif">Following are my past experiences </p>
                </div>
            

                <div className="flex flex-col flex-wrap text-slate font-serif">
                    {
                    experiences.map((exp) => {
                        return (
                            <div key={exp.title} className="container px-5 py-10 mx-auto text-center lg:px-40"> 
                            <div className="flex flex-col flex-wrap bg-sky-200 py-6">
                                <a href={exp.link} target="_blank" rel="noopener noreferrer"><img src={exp.img} alt="" className="w-32 border-0 py-2 px-6 hover:bg-yellow-600 rounded text-lg m-auto flex justify-around"/></a>
                                <h1 className="m-auto flex justify-around">{exp.title}</h1>
                                <p className="m-auto flex justify-around"> {exp.company} </p>
                                <p className="m-auto flex justify-around"> {exp.place}</p>
                                <p className="m-auto flex justify-around">{exp.time}</p>
                                <br></br>
                                <Collapsible trigger={<img src="./images/expand.jpeg" alt="EXPAND" className="w-24 border-0 py-2 px-6 mx-auto text-center hover:bg-yellow-600 rounded" />}>
                                    <br></br>
                                    <p className="m-auto flex justify-around">{exp.goal}</p>
                                    <br></br>
                                    <p className="m-auto flex justify-around">{exp.contribution}</p>
                                </Collapsible>
                                
                            </div>
                            <br></br>
                            </div>
                            
                        );
                    })

                    }

                </div>

            </section>
    );
}