"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import useGroupByMonth from "@/hooks/useGroupByMonth";
import { COLORS } from "@/data/colors";
import LoadMoreButton from "./atoms/LoadMoreButton";
import useSWR, { mutate } from "swr";
import RotatingSpinner from "./atoms/RotatingSpinner";
import GuestbookForm from "./GuestbookForm";
import GuestbookList from "./GuestbookList";
import { fetchGuestbook, postGuestbook } from "@/service/guestbook";

const DISPLAY_COUNT = 30;

export default function GuestbookContiner() {
  const [newMessage, setNewMessage] = useState<string>("");
  const [displayCount, setDisplayCount] = useState(DISPLAY_COUNT);
  const [inputColor, setInputColor] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  useEffect(() => {
    setInputColor(getRandomColor());
  }, []);

  const fetcher = async () => {
    const data = await fetchGuestbook();
    return data;
  };

  const {
    data: messages,
    isLoading: loading,
    error,
  } = useSWR("/api/guestbook", fetcher);

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
      const response = await postGuestbook(newMessage, inputColor);
      mutate("/api/guestbook");
      setNewMessage("");
    } catch (error) {
      console.error("Error submitting message: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const slicedMessages = messages ? messages.slice(0, displayCount) : [];
  const messageGroups = useGroupByMonth(slicedMessages);

  return (
    <div className="mt-20">
      {loading && (
        <div className="w-full flex justify-center">
          <RotatingSpinner />
        </div>
      )}
      <div className="w-full">
        {Object.entries(messageGroups).map(([key, monthMessages]) => (
          <GuestbookList key={key} monthKey={key} messages={monthMessages} />
        ))}

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
