import SearchIcon from "../icons/SearchIcon";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mb-8 px-4 py-3 rounded-lg focus:outline-none shadow-md"
      />
      <SearchIcon className="absolute right-5 top-3" />
    </div>
  );
}
