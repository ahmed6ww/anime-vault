import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero-opacity-10  xl:bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      
      
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/marvels-agents.png"
          alt="logo"
          width={90}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
        Delve into the Varied Worlds of  <span className=" text-blue-500"> Anime Sorcery</span> 
          
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/pngwing.com.png" alt="anime" fill className="object-contain xl:hidden" />
      </div>
    </header>
  );
}

export default Hero;
