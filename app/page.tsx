import Hero from "@/components/Hero";
import { Suspense } from "react";
import Loading from "./loading";
import Copyright from "@/components/Copyright";
import Project from "@/components/Project";

const Home = () => {
  return (
    <main className="dark:bg-[#151515] bg-[#faf9f6] flex flex-col lg:gap-2 justify-center items-center lg:p-2">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Project />
        <Copyright />
      </Suspense>
    </main>
  );
};

export default Home;
