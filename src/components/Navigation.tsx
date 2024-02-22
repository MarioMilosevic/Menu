import NavButton from "./NavButton";
type NavigationProps = {
  filterArray: (category: string) => void; 
  current: any[];
  setCurrent: (value : any[]) => void;
};

const Navigation = ({ current, filterArray ,setCurrent }) => {
  // const filterButtons = [
  //   {
  //     id: 6565,
  //     category: "All",
  //   },
  //   ...current,
  // ];
  return (
    <nav className="flex justify-center p-6 gap-4">
      <NavButton name={"All"} filterArray={filterArray}  current={current} setCurrent={setCurrent}/>
      <NavButton name={"Breakfast"} filterArray={filterArray}  current={current} setCurrent={setCurrent}/>
      <NavButton name={"Lunch"} filterArray={filterArray} current={current}  setCurrent={setCurrent}/>
      <NavButton name={"Shakes"} filterArray={filterArray}  current={current} setCurrent={setCurrent}/>
    </nav>
  );
};

export default Navigation;
