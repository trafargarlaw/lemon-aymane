import Logo from './Logo'

const elements = [
  {
    id: 1,
    name: 'Expertises',
    link: '#',
  },
  {
    id: 2,
    name: "L'agence",
    link: '#',
  },
  {
    id: 3,
    name: 'Engagements',
    link: '#',
  },
  {
    id: 4,
    name: 'Actualités',
    link: '#',
  },
  {
    id: 5,
    name: 'Rejoignez-nous',
    link: '#',
  },
]

const List = () => {
  return (
    <ul className="flex items-center gap-10">
      {elements.map((element) => (
        <li key={element.id}>
          <a
            className="border-b-2 border-transparent py-2 transition duration-500 ease-in-out hover:border-[#1C2536]"
            href={element.link}
          >
            {element.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-[157px] font-semibold text-title">
      <Logo />
      <List />
      <button className="border bg-[#1C2536] px-6 py-3 text-[#EBFAA1] transition duration-500 ease-in-out hover:border-[#1C2536] hover:bg-transparent hover:text-[#1C2536]">
        Contactez-nous
      </button>
    </div>
  )
}

export default NavBar
