type NavButtonProps = {
  name: string;
  filterArray: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const NavButton: React.FC<NavButtonProps> = ({ name, filterArray }) => {
  return (
    <button
      name={name}
      onClick={filterArray}
      className="px-4 py-1 rounded-lg bg-orange-400 text-white capitalize hover:bg-orange-700 transition-all duration-350"
    >
      {name}
    </button>
  );
};

export default NavButton;
