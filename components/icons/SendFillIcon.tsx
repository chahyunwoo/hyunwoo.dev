import { BsFillSendFill } from "react-icons/bs";

interface Iprops {
  color?: string;
}

export default function SendFillIcon({ color }: Iprops) {
  return <BsFillSendFill className="w-5 h-5" style={{ color }} />;
}
