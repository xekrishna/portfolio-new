import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="dark:bg-[#151515] bg-white flex flex-col gap-2 justify-center items-center p-2">
      <Hero/>
      <Contact/>
    </main>
  )
}

export default Home;