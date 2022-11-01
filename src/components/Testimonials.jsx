import { useEffect, useRef, useState } from 'react'
import ArrowCircle from './Icons/ArrowCircle'
import Lemona from './Icons/Lemona'

const testimonialsElements = [
  {
    id: 1,
    image: 'user-1.png',
    text: `Nous avons été accompagné par l'agence Lemon Interactive dans notre refonte de navigation : Un beau projet, des ateliers de qualité, des tests utilisateur parfaitement menés et surtout une très belle coopération entre nos équipes !`,
    name: 'Marion SANGIOVANNI',
    subname: 'Conversion manager, Decathlon Pro',
  },
  {
    id: 2,
    image: 'user-2.png',
    text: `Equipe très compétente et réactive. Lemon gère parfaitement la maintenance informatique de notre site internet Prestashop, trouve des solutions à nos problèmes. Un vrai plus pour notre site marchand!`,
    name: 'Hélène Vercaemst',
    subname: 'Responsable e-commerce, La Maison du Chocolat',
  },
  {
    id: 3,
    image: 'user-3.png',
    text: `Lemon Interactive a su nous accompagner dans la refonte de notre site internet. Nous avons pu bénéficier de leur expertise dans le domaine du e-commerce et de leur réactivité. Nous sommes très satisfaits du résultat.`,
    name: 'Aymane Birouk',
    subname: 'Développeur full stack',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const { image, text, name, subname } = testimonialsElements[current]
  const textAnimation = useRef(null)
  const imageAnimation = useRef(null)
  const [arrowLeft, setArrowLeft] = useState('#1C2536')
  const [arrowRight, setArrowRight] = useState('#1C2536')
  const isFirst = current === 0
  const isLast = current === testimonialsElements.length - 1

  const nextTestimonial = () => {
    if (current < testimonialsElements.length - 1) {
      setCurrent(current + 1)
    }
  }
  const prevTestimonial = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  useEffect(() => {
    if (isFirst) {
      setArrowLeft('#1C2536')
    } else {
      setArrowLeft('#EBFA9F')
    }
    if (isLast) {
      setArrowRight('#1C2536')
    } else {
      setArrowRight('#EBFA9F')
    }

    textAnimation.current.classList.add('animate-fade-in')
    imageAnimation.current.classList.add('animate-slide-left')
    setTimeout(() => {
      textAnimation.current.classList.remove('animate-fade-in')
      imageAnimation.current.classList.remove('animate-slide-left')
    }, 1000)
  }, [current])

  return (
    <section>
      <div className="mt-20 flex w-full flex-col items-center font-poppins">
        <h2 className="text-paragraph">TÉMOIGNAGES</h2>
        <h1 className="mb-[58px] text-[40px] font-bold text-title">
          Ce que les gens disent sur nous
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center px-[157px]">
        <div className="flex h-[418px] w-full flex-row bg-[#1C2536]">
          <div className="ml-[74px] font-poppins text-white">
            <div className="mt-[89px] h-[150px] w-[587px] text-[20px] font-normal leading-[30px] tracking-[0.2px]">
              <div className="relative">
                <div className="absolute -top-[40px] -left-[20px]">
                  <svg
                    width="160"
                    height="140"
                    viewBox="0 0 160 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.06"
                      d="M145 70H120V50C120 39.0625 128.75 30 140 30H142.5C146.562 30 150 26.875 150 22.5V7.5C150 3.4375 146.562 0 142.5 0H140C112.188 0 90 22.5 90 50V125C90 133.438 96.5625 140 105 140H145C153.125 140 160 133.438 160 125V85C160 76.875 153.125 70 145 70ZM55 70H30V50C30 39.0625 38.75 30 50 30H52.5C56.5625 30 60 26.875 60 22.5V7.5C60 3.4375 56.5625 0 52.5 0H50C22.1875 0 0 22.5 0 50V125C0 133.438 6.5625 140 15 140H55C63.125 140 70 133.438 70 125V85C70 76.875 63.125 70 55 70Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div ref={textAnimation}>“{text}”</div>
            </div>
            <div className="mt-[35px] h-[54px] w-[448px] text-[18px]">
              “{name} - <span className="font-bold">{subname}</span>”
            </div>
            <div className="mt-10 flex gap-x-3">
              {testimonialsElements.map((testimonial) => (
                <Lemona
                  key={testimonial.id}
                  fillColor="#EBFA9F"
                  active={testimonial.id === current + 1}
                  width="15"
                  height="16"
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              ref={imageAnimation}
              className="absolute left-[36px] top-[80px] h-[411px] w-[399px]"
            >
              <img src={`/images/${image}`} alt="user-1" />
            </div>
          </div>
        </div>
        <div className="my-[15px] flex flex-row gap-4 self-start">
          <div>
            <button
              onClick={prevTestimonial}
              className={`rounded-full border-[3px] border-[#1C2536] px-[17px] py-[18px] transition duration-300 ease-in-out ${
                isLast || !isFirst
                  ? 'bg-[#1C2536] hover:scale-105'
                  : 'cursor-not-allowed'
              }`}
            >
              <ArrowCircle fillColor={arrowLeft} />
            </button>
          </div>
          <div>
            <button
              onClick={nextTestimonial}
              className={`rotate-180 rounded-full border-[3px] border-[#1C2536] px-[17px] py-[18px] transition duration-300 ease-in-out ${
                isFirst || !isLast
                  ? 'bg-[#1C2536] hover:scale-105'
                  : 'cursor-not-allowed'
              }`}
            >
              <ArrowCircle fillColor={arrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
