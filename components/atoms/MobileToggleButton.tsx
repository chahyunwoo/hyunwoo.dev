import MenuIcon from "../icons/MenuIcon";

interface IProps {
  toggleMenu: () => void;
}

export default function MobileToggleButton({ toggleMenu }: IProps) {
  return (
    <button onClick={toggleMenu}>
      <MenuIcon />
    </button>
  );
}
