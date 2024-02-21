interface NavButtonProps {
  name: string;
}

const NavButton: React.FC<NavButtonProps> = ({ name }) => {
  return (
    <button className="px-4 py-1 rounded-lg bg-orange-400 text-white">
      {name}
    </button>
  );
};

export default NavButton;
