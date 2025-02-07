"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { COLORS } from "@/data/colors";
import useGroupByMonth from "@/hooks/useGroupByMonth";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchGuestbookMessages,
  postGuestbookMessage,
} from "@/store/features/guestbookSlice";

import LoadMoreButton from "./atoms/LoadMoreButton";
import RotatingSpinner from "./atoms/RotatingSpinner";
import GuestbookForm from "./GuestbookForm";
import GuestbookList from "./GuestbookList";

const DISPLAY_COUNT = 30;

export default function GuestbookContiner() {
  const dispatch = useAppDispatch();
  const { messages, loading, error } = useAppSelector(
    (state) => state.guestbook
  );

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

  useEffect(() => {
    dispatch(fetchGuestbookMessages());
  }, [dispatch]);

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
      await dispatch(
        postGuestbookMessage({
          message: newMessage,
          color: inputColor || "#000000",
        })
      ).unwrap();

      await dispatch(fetchGuestbookMessages());
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
    <div className="mt-12">
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
