import Image from "next/image";
import profileImage from "@/public/images/chahyunwoo-profile.jpg";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profileImage}
        alt="chahyunwoo"
        className="mx-auto rounded-full"
        width={240}
        height={240}
        priority
      />
    </section>
  );
}
