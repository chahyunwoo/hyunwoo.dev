"use client";

import { Post } from "@/.contentlayer/generated";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import SearchBar from "./atoms/SearchBar";
import PostCard from "./PostCard";
import PostsTabs from "./PostsTabs";

interface IProps {
  posts: Post[];
}

export default function PostsContainer({ posts }: IProps) {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.category.toUpperCase()))
  );
  const tabs = ["ALL", ...uniqueCategories];

  const filteredPosts = posts
    .filter((post) => selectedTab === "ALL" || post.category === selectedTab)
    .filter((post) =>
      post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

  return (
    <>
      <PostsTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
      />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {filteredPosts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </>
  );
}
