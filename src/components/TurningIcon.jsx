import DiagonalArrow from './Icons/DiagonalArrow'

function TurningIcon() {
  return (
    <div className="relative flex cursor-pointer items-center justify-center transition-all hover:scale-110">
      <div className="z-30 flex h-[168px] w-[168px] animate-spin-slow items-center justify-center rounded-full bg-[#1C2536] bg-[url('/images/contactus.png')] bg-cover bg-bottom duration-1000 "></div>
      <span className="absolute z-40">
        <DiagonalArrow />
      </span>
    </div>
  )
}

export default TurningIcon
