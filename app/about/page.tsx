import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "웹/앱 프론트엔드 개발자 차현우의 소개",
};

export default function Page() {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-2xl font-bold text-center mb-10">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 mt-8">
        <Hero />
        <div className="mt-4 md:mt-0 md:border-l md:pl-10">
          <h2 className="text-xl font-bold">WEB/APP Front-end Engineer</h2>
          <p className="my-4 text-lg">소통과 약속을 중요시하게 생각합니다.</p>
          <p className="leading-6 break-keep">
            공부가 취미인 프론트엔드 개발자
            <br />
            생생하고 역동적인 웹앱을 선호합니다.
            <br />
            <br />
            새로운 경험을 좋아하고, 늘 연구합니다.
            <br />
            <br />
            최신 트렌드와 새로운 기술에 대해 열려있으며, 타인과 소통하는 것에
            즐거움을 얻습니다.
            <br />
            회계학을 전공했고, 부전공으로 컴퓨터공학을 했습니다.
            <br />
            <br />
            등산과 축구를 좋아하고, 여행과 공연 관람을 좋아합니다.
            <br />
            기술 포스팅뿐만 아니라, 일상 공유를 통해 다양한 정보를 나누고
            싶습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
