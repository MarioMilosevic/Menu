import NavButton from './NavButton'
const Navigation = () => {
  return (
      <nav className="flex justify-center p-6 gap-4">
        <NavButton name={"All"} />
        <NavButton name={"Breakfast"} />
        <NavButton name={"Lunch"} />
        <NavButton name={"Shakes"} />
      </nav>
  )
}

export default Navigation
