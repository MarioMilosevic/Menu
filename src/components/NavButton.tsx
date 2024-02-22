type NavButtonProps = {
  name: string;
  filterArray: (category: string) => string[];
};

const NavButton: React.FC<NavButtonProps> = ({ name, filterArray }) => {
  return (
    <button
      onClick={filterArray}
      className="px-4 py-1 rounded-lg bg-orange-400 text-white capitalize hover:bg-orange-700 transition-all duration-350"
    >
      {name}
    </button>
  );
};

export default NavButton;
