import axios from "axios";

import { GuestBook } from "@/model/guestbooks";

import { supabase } from "./supabase";

export const fetchGuestbook = async () => {
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

export const postGuestbook = async (message: string, color: string) => {
  const response = await axios.post<{ data: GuestBook }>("api/guestbook/post", {
    message,
    color,
  });

  if (response.status !== 200) throw new Error("Failed to post message");

  return response;
};
