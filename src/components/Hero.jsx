import Lemona from './Icons/Lemona'
import TurningIcon from './TurningIcon'

const Hero = () => {
  return (
    <section className="mt-16 grid grid-cols-2 gap-y-14 gap-x-[90px] px-[157px] font-poppins text-xl text-paragraph">
      <div>
        <div className="relative z-10">
          <h1 className="mb-5 text-6xl font-extrabold text-[#1C2536]">
            Nos Clients
          </h1>
          <div className="absolute -top-[8px] left-[300px] -z-[1]">
            <Lemona width={58} height={60} fillColor="#EBFA9F" />
          </div>
        </div>

        <p>
          Le point commun de nos clients ? Considérer le site Internet comme un
          véritable outil e-business en plus d’être un moyen de communication
          incontournable
        </p>
      </div>
      <p className="py-[30px]">
        ME, TPE ou grand compte, quel que soit votre projet, nous vous
        accompagnerons dans la démarche de mieux comprendre vos clients en
        ligne, pour mieux les attirer puis leur faire passer les messages
        souhaités ou acheter vos produits !
      </p>
      <div className="relative col-span-2 flex h-[420px] w-full items-end justify-end p-5">
        <img
          className="absolute top-0 left-0 h-full  w-full object-cover"
          src="/images/hero.png"
          alt="hero image"
        />
        <TurningIcon />
      </div>
    </section>
  )
}

export default Hero
