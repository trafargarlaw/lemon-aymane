import PortfolioCard from './PortfolioCard'

const portfolioElements = [
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Ressources humaines',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: "L'immobilier",
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'London, UK',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'London, UK',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Venice, Italy',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Venice, Italy',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Venice, Italy',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Venice, Italy',
    subtitle: 'Travelling into the popular river in Italy',
  },
  {
    image:
      'https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg',
    title: 'Venice, Italy',
    subtitle: 'Travelling into the popular river in Italy',
  },
]

const Portfolio = () => {
  return (
    <section className="font-poppins">
      <div className="mt-20 flex w-full flex-col items-center font-poppins">
        <h2 className="text-paragraph">POURQUOI NOUS CHOISIR</h2>
        <h1 className="mb-[58px] text-[40px] font-bold text-title">
          Un portefeuille client diversifié
        </h1>
      </div>
      <div className="parent relative mb-12 flex overflow-x-hidden">
        <div className="hover:paused parent-hover:paused flex animate-marquee gap-[30px] whitespace-nowrap ">
          {portfolioElements.map((element) => (
            <PortfolioCard
              key={element.title}
              image={element.image}
              title={element.title}
              subtitle={element.subtitle}
            />
          ))}
        </div>
        <div className="parent-hover:paused absolute top-0 ml-[30px] flex animate-marquee2 gap-[30px] whitespace-nowrap ">
          {portfolioElements.map((element) => (
            <PortfolioCard
              key={element.title}
              image={element.image}
              title={element.title}
              subtitle={element.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="parent relative flex overflow-x-hidden">
        <div className="parent-hover:paused flex  animate-marquee-reverse gap-[30px] whitespace-nowrap ">
          {portfolioElements.map((element) => (
            <PortfolioCard
              key={element.title}
              image={element.image}
              title={element.title}
              subtitle={element.subtitle}
            />
          ))}
        </div>
        <div className="parent-hover:paused absolute  top-0 ml-[30px] flex animate-marquee2-reverse gap-[30px] whitespace-nowrap ">
          {portfolioElements.map((element) => (
            <PortfolioCard
              key={element.title}
              image={element.image}
              title={element.title}
              subtitle={element.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
