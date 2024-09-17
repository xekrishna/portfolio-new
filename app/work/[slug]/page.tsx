'use client'

import BackButton from "@/components/ui/back-button";
import { projectData } from "@/data/projects";
import { useEffect } from "react";



export default function Page( { params }: { params: { slug: string } }) {

 
  useEffect(() => {
    const project = projectData.find(p => p.slug === params.slug);
    const title = document.title;
    if (project) {
      const name = project.name;
      document.title = `${title} — ${name}`;
    }

    return () => {
      document.title = title
    }
  }); 

    return (
      <>
        {projectData.map((item,index) => {
          if(params.slug === item.slug) {
            return(
              <div className="h-max w-full flex justify-between px-5 py-10" key={index}>
                <BackButton classname="fixed mt-10 dark:text-white flex justify-center items-center gap-3 font-poppins hover:dark:bg-navMain px-5 py-3 rounded-full transition-all duration-500 " />
                <div className="w-full mt-12">
                  <div key={index} className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-center justify-center gap-5">
                     <h1 className="text-6xl font-inter font-semibold">{item.name}</h1>
                     <span className="font-poppins text-white/70">{item.type} — <span>{item.date}</span> </span>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        })}
      </>
    )
  }