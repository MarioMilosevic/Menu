interface NavButtonProps {
  name: string;
}

const NavButton: React.FC<NavButtonProps> = ({ name, filterArray }) => {
  const onFilterArray = () => {
   const filteredArray = filterArray(name)
    console.log(filteredArray)
  }
  return (
    <button
      onClick={onFilterArray}
      className="px-4 py-1 rounded-lg bg-orange-400 text-white hover:bg-orange-700 transition-all duration-350"
    >
      {name}
    </button>
  );
};

export default NavButton;
