import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostsContainer from "@/components/PostsContainer";
import { Metadata } from "next";
import { toKSTDate } from "@/hooks/useFormattedDate";

export const metadata: Metadata = {
  title: "Posts",
  description: "개발 관련한 각종 포스팅 및 일상 공유 포스팅",
};

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(toKSTDate(a.date), toKSTDate(b.date))
  );

  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">POSTS</h1>
      <p className="text-sm text-center">기술 뿐만 아니라 일상을 공유합니다.</p>
      <PostsContainer isPostsPage posts={posts} />
    </section>
  );
}
