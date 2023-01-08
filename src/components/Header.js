import React from "react";
import { name} from "../data/data";


export default function Header(){
    return (<div className="flex flex-col flex-wrap bg-blue-200 h-auto py-4  ">
        <h1 className=" m-auto flex justify-around mb-2 text-2xl font-mono ">{name}</h1>
    </div>);
}