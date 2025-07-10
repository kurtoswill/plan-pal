'use client'

import React, { useState } from "react";
import data from "@/data/posts.json";

interface Post {
  id: string;
  title: string;
  author: string;
  days: string;
  caption: string;
  approved: string;
  rejected: string;
  required: string;
}

const MAX_VISIBLE_LINES = 1; // Adjust this for how much of the caption is initially shown

const PostingCards = () => {
  return (
    <div>
      {data.post.map((post: Post) => (
        <div
          key={post.id}
          className="font-semibold border border-black/5 rounded-[12px] p-4 shadow"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-headline">{post.title}</h1>
            <p className="font-normal text-[14px]">By: {post.author}</p>
            <p
              className={`mb-2 font-normal text-[14px] text-[#5C33F6] ${
                Number(post.days) <= 3 ? "text-red-500" : ""
              }`}
            >
              Days left: {post.days}
            </p>
            <ExpandableText text={post.caption} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ExpandableText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative">
      <p
        className={`font-light text-[14px] text-[#1C1C1E] break-words ${
          isExpanded ? "line-clamp-none" : `line-clamp-${MAX_VISIBLE_LINES}`
        }`}
      >
        {text}
      </p>
      {!isExpanded && (
        <button
          className="text-blue-500 hover:underline mt-1"
          onClick={toggleExpanded}
        >
          See More
        </button>
      )}
      {isExpanded && (
        <button
          className="text-blue-500 hover:underline mt-1"
          onClick={toggleExpanded}
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default PostingCards;