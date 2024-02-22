import NavButton from "./NavButton";
type NavigationProps = {
  filterArray: (category: string) => void; // Assuming filterArray is a function that takes a string argument
};

const Navigation = ({ filterArray, current}) => {
  const filterButtons = [
    {
      id:6565,
      category:"All",
    }, 
    ...current
  ]
  return (
    <nav className="flex justify-center p-6 gap-4">
      <NavButton name={"All"} filterArray={filterArray}/>
      <NavButton name={"Breakfast"} filterArray={filterArray} />
      <NavButton name={"Lunch"} filterArray={filterArray} />
      <NavButton name={"Shakes"} filterArray={filterArray} />
    </nav>
  );
};

export default Navigation;


