

const Banner = () => {
    return (
        <div>
            <section className="bg-[#F1F6F9]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leadi sm:text-5xl">EDU
				<span className="text-[#14274E]">MATE</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Meet the
				<span className="text-[#14274E]"> telated </span> Team Mate 
				<br className="hidden md:inline lg:hidden"/> and grow together.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-base font-semibold rounded bg-[#14274E] text-gray-50">Get Started</a>
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a> */}
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/K2Mz8Fv/Pngtree-modern-flat-design-concept-of-5332889-1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;