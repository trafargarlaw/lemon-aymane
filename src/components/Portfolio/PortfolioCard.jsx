const PortfolioCard = ({ title, subtitle, image }) => {
  return (
    <div className="direction-ltr group relative flex h-[320px] min-w-[540px] items-end bg-red-400 text-white ">
      <img
        className="absolute top-0 left-0 h-full w-full"
        src={image}
        alt={title}
      />

      <span className="absolute top-0 left-0 h-full w-full bg-[#1C2536] mix-blend-color group-hover:opacity-0"></span>
      <div className="z-50 flex w-full justify-between bg-gradient-to-t from-black to-transparent px-[30px] py-10">
        <div className="flex flex-col gap-[5px]">
          <span className="text-4xl font-bold leading-[54px] text-[#EBFA9F]">
            {title}
          </span>
          <p>{subtitle}</p>
        </div>
        <div className="self-end">
          <button className="bg-white px-6 py-3 font-bold text-[#2A4F4A]">
            see offers
          </button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
