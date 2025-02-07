import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence>
          {messages.map(({ id, message, color }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="max-w-2xl px-4 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-neutral-100"
              style={{ backgroundColor: color }}
            >
              {message}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
