import { GuestBook } from "@/model/guestbooks";

export default function useGroupByMonth(messages: GuestBook[]) {
  const groups: { [key: string]: GuestBook[] } = {};

  messages.forEach((message) => {
    const date = new Date(message.created_at);
    const key = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(message);
  });

  return groups;
}
