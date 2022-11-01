import Logo from '../Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <section className="mt-[86px]">
      <div className="h-[720px] bg-[url('/images/bg.png')] font-poppins">
        <div className="flex items-center justify-between px-[182px] py-20">
          <div className="w-[50ch]">
            <h1 className="text-4xl font-bold leading-[60px] tracking-[0.2px] text-white">
              Développez une{' '}
              <span className="text-[#EBFA9F]">
                performance digitale durable
              </span>
            </h1>
          </div>
          <div className="flex gap-x-8 text-[20px] font-medium leading-[32px]">
            <div>
              <button className="bg-[#EBFA9F] px-10 py-[18px] transition duration-300 ease-in-out hover:scale-110 hover:bg-white">
                Contactez-nous
              </button>
            </div>
            <div>
              <button className="border border-transparent bg-white px-10 py-[18px] transition duration-500 ease-in-out hover:border-[#EBFA9F] hover:bg-transparent hover:text-[#EBFA9F]">
                Rejoingez-nous
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[182px] py-2">
          <div className="flex flex-1 flex-col gap-y-3">
            <div>
              <Logo />
            </div>
            <div className="w-[20ch] text-[16px] leading-[28px] text-white">
              Construire un site web moderne et créatif avec Lemon Interactive
            </div>
            <div className="flex items-center gap-x-6">
              <SocialMedia />
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-2 text-[18px] font-semibold text-white">
              A propos
            </div>
            <ul className="text-[#959EAD]">
              {[
                'Agence SEA',
                'Création Site Web',
                'Agence UX',
                'Agence SEO',
                'Formations web',
              ].map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href="#"
                    className="transition duration-200 ease-in-out hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-y-8 text-white">
            <div className="flex flex-col gap-y-2 border-l-8 border-[#EBFA9F] px-4">
              <span>Agence Lille</span>
              <span>+33 44 55 44 33</span>
              <span>Paris 13, Rue lemon, France</span>
            </div>
            <div className="flex flex-col gap-y-2 border-l-8 border-[#EBFA9F] px-4">
              <span>Agence Lille</span>
              <span>+33 44 55 44 33</span>
              <span>Paris 13, Rue lemon, France</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-y-4">
            <div className="text-center text-[16px] text-white">
              Lemon Interactive votre partenaire e-business Partner
            </div>
            <div>
              <img
                src="/images/google-partner.png"
                alt="Google partner"
                height={160}
                width={160}
              />
            </div>
            <div className="text-[16px] font-semibold text-[#EBFA9F]">
              Agence Google Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
