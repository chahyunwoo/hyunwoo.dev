import GuestbookContainer from "@/components/GuestbookContainer";

export default function Page() {
  return (
    <section className="pb-24">
      <h1 className="text-2xl font-bold text-center mb-4">GUESTBOOK</h1>
      <p className="text-sm text-orange-500 text-center">
        🪓 악성 댓글 방지를 위해, 작성자의 IP를 수집 중입니다.
      </p>
      <GuestbookContainer />
    </section>
  );
}
