import { Metadata } from "next";

import Hero from "@/components/Hero";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  description: "웹/앱 개발자 차현우의 소개",
};

export default function Page() {
  return redirect("/");
  // (
  //   <div className="flex justify-center flex-col">
  //     <h1 className="text-2xl font-bold text-center mb-10">ABOUT ME</h1>
  //     <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 mt-8">
  //       <Hero />
  //       <div className="mt-4 md:mt-0 md:border-l md:pl-10">
  //         <h2 className="text-xl font-bold my-10">WEB/APP Developer (2017~)</h2>
  //         <p className="my-1 text-lg">Soongsil Univ. Computer Science</p>
  //         <p className="my-1 text-lg">mail: chahyunwoobi@gmail.com</p>
  //         <p className="my-1 text-lg">instagram: aavecvous</p>
  //         <p className="my-1 text-lg">live in SEOUL / INCHEON</p>
  //       </div>
  //     </div>
  //   </div>
  // );
}
