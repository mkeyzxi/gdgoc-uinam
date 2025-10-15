const IndicatorLoadingStack = () => {
	return (
		<div className="relative w-[250px] h-[360px] flex items-center justify-center">
			<div className="absolute stack-card w-[240px] h-[340px] rounded-xl shadow-md bg-gradient-to-r from-green-500 via-green-500 to-green-500 animate-gradient blur-[1px]"></div>
			<div className="absolute stack-card w-[245px] h-[345px] rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 animate-gradient blur-[0.5px]"></div>
			<div className="relative z-10 w-[250px] h-[360px] rounded-xl shadow-xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 animate-gradient flex flex-col items-center justify-center">
				<div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
			</div>
		</div>
	)

}

export default IndicatorLoadingStack;


