import { BsSearch } from "react-icons/bs";

interface IProps {
  className: string;
}

export default function SearchIcon({ className }: IProps) {
  return <BsSearch className={`w-5 h-5 ${className}`} />;
}
