import Contact from "./Contact";

const About = () => {
  return (
    <main className="w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] dark:from-[#282828] dark:to-[#101010] from-[#EFEFEF] to-[#C6C6C6] p-5 justify-center items-center h-max min-h-[100vh] rounded-xl flex flex-col dark:shadow-[0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3)] shadow-[0px_-10px_20px_rgba(0,0,0,0.3),10px_0px_20px_rgba(0,0,0,0.3),-10px_0px_20px_rgba(0,0,0,0.3)] pb-36">
      <div className="flex flex-col gap-5 lg:max-w-[65%] mt-20 lg:mt-40 ">
        <div className="flex items-center gap-4 px-2">
          <div className="h-3 w-3 dark:bg-white bg-black rounded-full dark:shadow-[0_0_10px_7px_#FFFFFF30] shadow-[0_0_10px_7px_#00000030]" />
          <span className="uppercase font-instrument dark:text-white/70 text-sm">
            about me
          </span>
        </div>
        <span className="text-4xl lg:text-6xl tracking-tight font-inter">
          I explore boundaries constantly seeking novelty in the world of
          innovative{" "}
          <i className="font-rozha font-medium bg-clip-text text-transparent bg-gradient-to-b dark:from-white from-black from-50% dark:to-black to-white">
            {" "}
            design & technology
          </i>
        </span>
        <br />
      </div>
      <div className="lg:max-w-[65%]">
        <span className="font-poppins font-extralight dark:text-white/50 text-black/70 text-balance">
          Mayank Bisht is a developer and engineer with cuurently pursuing his
          Data Science & Programming degree from Indian Institute of Technology,
          Madras. <br />
          <br />
          His passion for technology and design is driven by a relentless
          curiosity to explore and innovate. His expertise spans a robust
          foundation in development and engineering (software architecture,
          coding, system design) alongside a keen eye for UI/UX (user-centered
          design, interactive interfaces, usability). <br />
          <br />
          At his core, he is a problem-solver constantly experimenting with new
          technologies, a tech enthusiast diving into the latest programming
          languages, and an aspiring designer exploring the intersection of
          functionality and aesthetics. In his downtime, he&apos;s either coding
          up a new project, analyzing the latest tech trends, or diving into a
          new skill like data science or AI. <br />
          <br />
          Forever curious — forever pushing the boundaries of what&apos;s
          possible in tech and design.
        </span>
      </div>
      <Contact />
    </main>
  );
};

export default About;
