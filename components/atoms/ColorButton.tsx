interface IProps {
  color: string;
  setInputColor: (color: string) => void;
}

export default function ColorButton({ color, setInputColor }: IProps) {
  return (
    <button
      className="w-5 h-5 rounded-full"
      style={{ backgroundColor: color }}
      onClick={(e) => {
        e.preventDefault();
        setInputColor(color);
      }}
    />
  );
}
