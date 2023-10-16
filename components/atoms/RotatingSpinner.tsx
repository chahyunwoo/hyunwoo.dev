import { RotatingLines } from "react-loader-spinner";

export default function RotatingSpinner() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="1"
      animationDuration="0.75"
      width="40"
      visible={true}
    />
  );
}
