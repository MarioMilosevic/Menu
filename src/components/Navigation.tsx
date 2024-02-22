import NavButton from "./NavButton";
type NavigationProps = {
  filterArray: (category: string) => void;
};
// proslijedi meni iz parenta kao props, dodaj [{id i category}, ...menu]
// mapuj preko toga i vrati NAVBUTTON

const Navigation: React.FC<NavigationProps> = ({filterArray, menu }) => {
  const filteredItems = [{id:123, category:'all'}, ...menu]
  const uniqueArray = Array.from([...new Set(filteredItems.map(obj => obj.category))])
  return (
    <nav className="flex justify-center p-6 gap-4">
      {uniqueArray.map(item => <NavButton name={item} key={item} filterArray={filterArray}/>)}
    </nav>
  );
};

export default Navigation;
