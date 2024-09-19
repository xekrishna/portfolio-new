import { socialData } from "@/data/socials";

const Contact = () => {
  return (
    <main className="w-full lg:w-[65%] h-max">
      <div className="flex flex-col gap-5 mt-40 ">
        <div className="flex items-center gap-4 px-2">
          <div className="h-3 w-3 dark:bg-white bg-black rounded-full dark:shadow-[0_0_10px_7px_#FFFFFF30] shadow-[0_0_10px_7px_#00000030]" />
          <span className="uppercase font-instrument dark:text-white/70 text-sm">
            Contact
          </span>
        </div>
        <ul className="w-full flex flex-col space-y-8">
          {socialData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row justify-between"
            >
              <div className="font-poppins text-xl lg:text-3xl dark:hover:text-[#A3DAFB] hover:text-[#FF5B2C] transition-all duration-500">
                {item.title === "Document" ? (
                  <a href="./assets/Resume.docx" download>
                    {item.desc}
                  </a>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.desc}
                  </a>
                )}
              </div>
              <span className="font-instrument font-thin text-xs">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Contact;
