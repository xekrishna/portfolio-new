const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="flex justify-between items-center w-full px-4 text-5xl overflow-hidden lg:text-[8rem] font-poppins font-bold">
      <span className="">Mayank</span>
      <span>&copy;{currentYear}</span>
    </main>
  );
};

export default Copyright;
