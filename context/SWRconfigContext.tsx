"use client";

import axios from "axios";
import { SWRConfig } from "swr";

interface IProps {
  children: React.ReactNode;
}

export default function SWRconfigContext({ children }: IProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
}
