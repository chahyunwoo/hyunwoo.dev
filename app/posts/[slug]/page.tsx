import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";

interface IProps {
  params: { slug: string };
}

const PostLayout = ({ params: { slug } }: IProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto prose dark:prose-invert max-w-2xl">
      <div className="mb-8 text-center border-b border-neutral-400/50">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "yyyy년 MM월 dd일")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDXContent />
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return { title: post.title };
};
