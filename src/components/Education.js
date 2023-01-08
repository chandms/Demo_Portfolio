import React from "react";
import { education } from "../data/data";

export default function Education(){
   return(
    <section id="education" className=" bg-pink-200 h-auto flex flex-col flex-wrap py-2">
        <div className="m-auto flex flex-col flex-wrap py-2">
            <h1 className="font-mono text-slate font-3xl flex justify-around font-bold" > Education </h1>
        </div>

        <div className="flex flex-col flex-wrap text-slate font-serif">

            {
                education.map((edu) => {
                    return (
                        <div key={edu.degree}>
                            <h1 className="text-2xl font-bold shadow-lg flex justify-around ">{edu.school}</h1>
                            <div className="text-sm font-bold shadow-lg text-green-900" >
                                <h1 className="flex justify-around">{edu.location}</h1>
                                <h1 className="flex justify-around">{edu.date}</h1>
                            </div>
                            <h1 className="flex justify-around">{edu.degree}</h1>
                            <h1 className="flex justify-around">{edu.major}</h1>
                            <h1 className="flex justify-around">{edu.GPA}</h1>
                        </div>
                    );
                })
            }
        </div>

    </section>
   );
}