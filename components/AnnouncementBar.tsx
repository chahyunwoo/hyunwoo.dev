import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="fixed w-screen h-screen backdrop-blur-sm">
      <div className="bg-orange-600 w-full h-10 text-white text-center fixed z-100 flex justify-center items-center text-sm">
        블로그 이전으로 폐쇄합니다.{" "}
        <Link
          href="https://chahyunwoo.dev"
          className="underline underline-offset-4 ml-2"
        >
          새로운 블로그 바로가기
        </Link>
      </div>
    </div>
  );
}
