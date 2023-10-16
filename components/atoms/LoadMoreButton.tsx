interface IProps {
  displayCount: number;
  setDisplayCount: (displayCount: number) => void;
  content: string;
}

export default function LoadMoreButton({
  displayCount,
  setDisplayCount,
  content,
}: IProps) {
  return (
    <button
      onClick={() => setDisplayCount(displayCount + 30)}
      className="font-bold text-lg"
    >
      {content}
    </button>
  );
}
