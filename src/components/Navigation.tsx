import NavButton from "./NavButton";
type NavigationProps = {
  filterArray: (category: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({filterArray, menu }) => {
  const filteredItems = [ ...new Set([{id:123, category:'all'}, ...menu].map(el => el.category)) ]
  return (
    <nav className="flex justify-center p-6 gap-4">
      {filteredItems.map(item => <NavButton name={item} key={item} filterArray={filterArray}/>)}
    </nav>
  );
};

export default Navigation;
