import { GuestBook } from "@/model/guestbooks";

interface IProps {
  monthKey: string;
  messages: GuestBook[];
}

export default function GuestbookList({ monthKey, messages }: IProps) {
  return (
    <div>
      <h2 className="text-center text-xs text-gray-500 my-4">{monthKey}</h2>
      <ul className="flex flex-col gap-2 items-end">
        {messages.map(({ id, message, color }) => (
          <li
            key={id}
            className="max-w-2xl px-4 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-neutral-100"
            style={{ backgroundColor: color }}
          >
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
}
