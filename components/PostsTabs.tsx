interface TabsProps {
  tabs: string[];
  selectedTab: string;
  onSelect: (tab: string) => void;
}

export default function PostsTabs({ tabs, selectedTab, onSelect }: TabsProps) {
  return (
    <ul className="flex justify-around mt-8 mb-8 text-center">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => onSelect(tab)}
          className={`border-b w-full py-4 cursor-pointer ${
            selectedTab === tab && "text-blue-400 border-blue-400"
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
