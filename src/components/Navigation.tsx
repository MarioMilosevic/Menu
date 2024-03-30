import NavButton from "./NavButton";


type Element = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type NavigationTypes = {
  filterArray: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  menu: Element[];
};

const Navigation: React.FC<NavigationTypes> = ({ filterArray, menu }) => {
  const filteredItems = [ ...new Set([{id:123, category:'all'}, ...menu].map(el => el.category)) ]
  return (
    <nav className="flex justify-center p-6 gap-4">
      {filteredItems.map(item => <NavButton name={item} key={item} filterArray={filterArray}/>)}
    </nav>
  );
};

export default Navigation;
