import MainBox from "@/components/atoms/MainBox";

import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostsContainer from "@/components/PostsContainer";
import { toKSTDate } from "@/hooks/useFormattedDate";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(toKSTDate(a.date), toKSTDate(b.date))
  );

  const recentPosts = posts.slice(0, 5);

  return (
    <section>
      <MainBox />
      <h1 className="text-2xl font-bold text-center my-10">RECENT POSTS</h1>
      <PostsContainer posts={recentPosts} />
    </section>
  );
}
