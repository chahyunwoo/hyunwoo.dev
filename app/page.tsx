import { compareDesc } from "date-fns";

import { allPosts } from "@/.contentlayer/generated";
import MainBox from "@/components/atoms/MainBox";
import PostsContainer from "@/components/PostsContainer";
import { toKSTDate } from "@/hooks/useFormattedDate";

export default function Home() {
  const dailyPosts = allPosts
    .filter((post) => post.category === "DAILY")
    .sort((a, b) => compareDesc(toKSTDate(a.date), toKSTDate(b.date)));

  const recentDailyPosts = dailyPosts.slice(0, 5);

  return (
    <section>
      <MainBox />
      <h1 className="text-2xl font-bold text-center my-10">RECENT POSTS</h1>
      <PostsContainer posts={recentDailyPosts} />
    </section>
  );
}
