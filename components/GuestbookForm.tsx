import { COLORS } from "@/data/colors";
import { ChangeEvent, FormEvent } from "react";
import ColorButton from "./atoms/ColorButton";
import RotatingSpinner from "./atoms/RotatingSpinner";
import SendFillIcon from "./icons/SendFillIcon";

interface IProps {
  newMessage: string;
  handleSubmit: (e: FormEvent) => void;
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputColor?: string;
  isSubmitting: boolean;
  setInputColor: (color: string) => void;
}

export default function GuestbookForm({
  handleSubmit,
  newMessage,
  handleMessageChange,
  inputColor,
  isSubmitting,
  setInputColor,
}: IProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-x-2 mt-4 fixed w-[90%] md:w-3/4 bottom-10 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl bg-white/80 shadow-md dark:bg-black/80 overflow-hidden"
    >
      {isSubmitting && (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white/90 dark:bg-black/90">
          <RotatingSpinner />
        </div>
      )}
      <div className="w-full flex space-x-2">
        <input
          value={newMessage}
          onChange={handleMessageChange}
          className="flex-grow p-2 rounded-lg focus:outline-none placeholder-neutral-100 transition-colors duration-300 text-white"
          style={{ backgroundColor: inputColor }}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-300 bg-transparent border transition-colors duration-300 outline-none"
          style={{ borderColor: inputColor }}
        >
          <SendFillIcon color={inputColor} />
        </button>
      </div>
      <div className="flex space-x-2 justify-end mt-4">
        {COLORS.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            setInputColor={setInputColor}
          />
        ))}
      </div>
    </form>
  );
}
