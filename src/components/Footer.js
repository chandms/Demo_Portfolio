import React from "react";
import {footer_content, address, email, phone } from "../data/data";


export default function Footer(){
    return (<div className="flex flex-col flex-wrap bg-blue-200 h-auto py-4 ">
        <h1 className=" m-auto flex justify-around mb-2 text-2xl font-mono text-bold">{footer_content}</h1>
        <h2 className=" m-auto flex justify-around text-sm font-serif">{address}</h2>
        <a href={email} className=" m-auto flex justify-around p-1 hover:bg-blue-400 rounded font-serif ">{email.split(":")[1]}</a>
        <h2 className=" m-auto flex justify-around font-serif ">{phone}</h2>
    </div>);
}