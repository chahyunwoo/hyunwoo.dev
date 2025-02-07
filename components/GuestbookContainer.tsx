"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { COLORS } from "@/data/colors";
import useGroupByMonth from "@/hooks/useGroupByMonth";
import { GuestBook } from "@/model/guestbooks";
import { fetchGuestbook, postGuestbook } from "@/service/guestbook";

import LoadMoreButton from "./atoms/LoadMoreButton";
import RotatingSpinner from "./atoms/RotatingSpinner";
import GuestbookForm from "./GuestbookForm";
import GuestbookList from "./GuestbookList";

interface Props {
  initialMessages: GuestBook[];
}

export default function GuestbookContainer({ initialMessages }: Props) {
  const [messages, setMessages] = useState<GuestBook[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");
  const [displayCount, setDisplayCount] = useState(30);
  const [inputColor, setInputColor] = useState<string>("#696262");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInputColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
  }, []);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!newMessage || newMessage.trim() === "") {
      alert("메세지는 공백으로 작성할 수 없습니다.");
      return;
    }

    setIsSubmitting(true);

    try {
      await postGuestbook(newMessage, inputColor || "#000000");
      const updatedMessages = await fetchGuestbook();
      setMessages(updatedMessages);
      setIsLoading(true);
      setNewMessage("");
      setInputColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    } catch (error) {
      console.error("Error submitting message: ", error);
      setIsLoading(false);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  const slicedMessages = messages.slice(0, displayCount);
  const messageGroups = useGroupByMonth(slicedMessages);

  return (
    <div className="mt-12">
      {isLoading && (
        <div className="w-full flex justify-center">
          <RotatingSpinner />
        </div>
      )}
      <div className="w-full">
        <AnimatePresence>
          {Object.entries(messageGroups).map(([key, monthMessages]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GuestbookList monthKey={key} messages={monthMessages} />
            </motion.div>
          ))}
        </AnimatePresence>

        {messages && displayCount < messages.length && (
          <div className="w-full text-center">
            <LoadMoreButton
              content={"더 보기"}
              displayCount={displayCount}
              setDisplayCount={setDisplayCount}
            />
          </div>
        )}
      </div>
      <GuestbookForm
        handleSubmit={handleSubmit}
        newMessage={newMessage}
        handleMessageChange={handleMessageChange}
        inputColor={inputColor}
        isSubmitting={isSubmitting}
        setInputColor={setInputColor}
      />
    </div>
  );
}
