import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import study from '../assets/img/group study.gif';

const Banner = () => {
	const quotes = [
		// " 'Individually, we are one drop. Together, we are an ocean.' - Ryunosuke Satoro", 
	// "Coming together is a beginning. Keeping together is progress. Working together is success. - Henry Ford",
	"' None of us is as smart as all of us. ' - Ken Blanchard ",
	// "Talent wins games, but teamwork and intelligence win championships.' - Michael Jordan"

];
  return (
    <div>
      <section className="bg-[#F1F6F9]">
        <div className="container flex flex-col justify-between lg:gap-10 py-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 lg:h-96  text-center rounded-sm gap-3 lg:text-left">
            <h1 className="text-3xl font-bold leadi sm:text-5xl">
              EDU
              <span className="text-[#14274E]">MATE</span>
            </h1>
			
            <p className=" text-base text-gray-500 text-justify sm:mt-5">
			Best platform to find your study mates , learn together.Coming together is a beginning. Keeping together is progress. Working together is success.
            </p>
			<div className="mb-3 text-base text-gray-500  ">
			<Typewriter
            words={quotes}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
       
          />
			</div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="bg-[#14274E] hover:bg-[#3f4e69] px-8 py-3 active:bg-blue-900 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center   text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <img
              src={study}
			//   "https://cdn.dribbble.com/users/6696029/screenshots/15187188/media/554833e162874fab364047f6495aaa4f.gif"
              alt="Studying boy"
              className="object-contain h-72 sm:h-80 lg:h-full xl:h-full "
            />
            {/* <img src="https://i.ibb.co/K2Mz8Fv/Pngtree-modern-flat-design-concept-of-5332889-1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-full xl:h-full " /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
