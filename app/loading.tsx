export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <main className="w-[100%] mt-[1px] overflow-hidden">
      <div className="w-[99%] h-[100vh] absolute bg-gradient-to-b from-transparent from-60% dark:to-black to-white z-[100] rounded-xl dark:shadow-[0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3),0px_0px_0px_rgba(0,0,0,0.3)] shadow-[0px_-10px_20px_rgba(0,0,0,0.3),10px_0px_20px_rgba(0,0,0,0.3),-10px_0px_20px_rgba(0,0,0,0.3)] flex justify-center items-center gap-4">
        <span className="text-2xl font-poppins font-medium">Just a moment</span>
        <div className="loader">
          <li className="ball"></li>
          <li className="ball"></li>
          <li className="ball"></li>
        </div>
      </div>
    </main>
  );
}
