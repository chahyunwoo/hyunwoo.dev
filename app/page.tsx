import { MdBuild } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-md">
        <MdBuild style={{ display: "inline" }} /> 메인 화면 구성 중..{" "}
        <MdBuild style={{ display: "inline" }} />
      </p>
    </div>
  );
}
