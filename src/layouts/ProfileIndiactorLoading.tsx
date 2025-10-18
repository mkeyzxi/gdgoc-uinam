export default function ProfileIndiactorLoading() {

	return (

		<div
			className="
      w-full max-w-[210px] sm:max-w-[200px] md:max-w-[380px]
      bg-white shadow-md rounded-2xl p-4 sm:p-5 lg:p-6
      flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left
    "
		>

			<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-full skeleton flex-shrink-0"></div>


			<div className="flex flex-col items-center lg:items-start w-full min-w-0">

				<div className="h-4 w-32 sm:w-40 md:w-44 rounded-md skeleton mb-2"></div>

				<div className="h-3 w-24 sm:w-28 rounded-md skeleton"></div>


				<div className="flex gap-2 sm:gap-3 mt-3 flex-wrap justify-center lg:justify-start">
					<div className="w-6 h-6 rounded-sm skeleton"></div>
					<div className="w-6 h-6 rounded-sm skeleton"></div>
					<div className="w-6 h-6 rounded-sm skeleton"></div>
				</div>
			</div>
		</div>
	)
}