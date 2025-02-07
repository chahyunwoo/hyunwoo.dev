"use client";

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  const handleSecretClick = useCallback(() => {
    const newClickCount = clicks + 1;
    setClicks(newClickCount);

    if (newClickCount === 5) {
      setTimeout(() => {
        router.push("/admin/login");
        setClicks(0);
      }, 0);
    }
  }, [clicks, router]);

  return (
    <footer className="w-full px-8 border-t flex justify-center items-center dark:border-neutral-600">
      <div className="w-full max-w-screen-sm flex justify-center items-center py-6">
        <p className="text-gray-400 dark:text-neutral-600 text-sm">
          &copy; 2025. Cha Hyun Woo. All rights{" "}
          <span onClick={handleSecretClick}>reserved.</span>
        </p>
      </div>
    </footer>
  );
}
