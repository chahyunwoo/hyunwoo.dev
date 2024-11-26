"use client";

import { useState } from "react";

import { Post } from "@/.contentlayer/generated";
import useDebounce from "@/hooks/useDebounce";

import SearchBar from "./atoms/SearchBar";
import PostCard from "./PostCard";
import PostsTabs from "./PostsTabs";

interface IProps {
  posts: Post[];
  isPostsPage?: boolean;
}

export default function PostsContainer({ posts, isPostsPage = false }: IProps) {
  const [selectedTab, setSelectedTab] = useState("DAILY");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const categoryOrder = ["DAILY", "DEVELOP"];

  const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.category.toUpperCase()))
  ).sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  const tabs = [...uniqueCategories, "ALL"];

  const filteredPosts = posts
    .filter((post) => selectedTab === "ALL" || post.category === selectedTab)
    .filter((post) =>
      post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

  return (
    <>
      {isPostsPage && (
        <>
          <PostsTabs
            tabs={tabs}
            selectedTab={selectedTab}
            onSelect={setSelectedTab}
          />
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </>
      )}
      {filteredPosts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </>
  );
}
