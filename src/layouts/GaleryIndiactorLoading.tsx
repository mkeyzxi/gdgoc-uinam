const GaleryIndicatorLoading = () => {
	return (
		<div className="flex gap-6 justify-center items-end pt-18">
			<div className="card-shimmer w-[100px] h-[150px] rounded-xl shadow-md rotate-[-8deg]"></div>
			<div className="card-shimmer w-[100px] h-[150px] rounded-xl shadow-md rotate-[-3deg]"></div>
			<div className="card-shimmer w-[100px] h-[150px] rounded-xl shadow-md rotate-[1deg]"></div>
			<div className="hidden md:block card-shimmer w-[100px] h-[150px] rounded-xl shadow-md rotate-[5deg]"></div>
			<div className="hidden md:block card-shimmer w-[100px] h-[150px] rounded-xl shadow-md rotate-[10deg]"></div>
		</div>
	)

}

export default GaleryIndicatorLoading;


