import { Post } from "@/.contentlayer/generated";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import Image from "next/image";
import Link from "next/link";

export default function PostCard(post: Post) {
  const formattedDate = useFormattedDate(post.date);

  return (
    <Link
      href={post.url}
      passHref
      className="block border-b py-6 border-neutral-400/50 last-of-type:mb-0 last-of-type:border-none"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between flex-grow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="my-2">{post.description}</p>
          <time
            dateTime={post.date}
            className="block text-xs text-gray-400 dark:text-gray-600"
          >
            {formattedDate}
          </time>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={110}
          height={110}
          priority
          className="rounded-lg flex-shrink-0 ml-6"
        />
      </div>
    </Link>
  );
}
