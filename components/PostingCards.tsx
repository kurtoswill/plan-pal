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

const MAX_CHARACTERS = 100;

const PostingCards = () => {
  return (
      <div>
        {data.post.map((post: Post) => {
          const contributors = Number(post.required);
          const votes = Number(post.approved);

          return (
              <div
                  key={post.id}
                  className="font-semibold border border-black/5 rounded-[12px] p-4 shadow mb-4"
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

                  {/* Progress Bar */}
                  <div className="w-full h-[6px] rounded-full bg-gray-200 overflow-hidden flex border-black border-1">
                    <div
                        className="h-full bg-green-500"
                        style={{ width: `${(Number(post.approved) / Number(post.required)) * 100}%` }}
                    />

                    <div
                        className="h-full bg-red-500"
                        style={{
                          width: `${(1 - Number(post.rejected) / Number(post.required)) * 100}%`,
                        }}
                    />
                  </div>

                  <div className='flex justify-between font-normal text-[14px]'>
                    <p><span className='text-green-700'>{post.approved}</span> - <span className='text-red-500'>{post.rejected}</span></p>
                    <p>Required Approval: {post.required}</p>
                  </div>

                  <div className='flex justify-between mt-2'>
                    <button className="bg-green-500 text-white font-normal rounded-[10px] py-2 w-[125px]">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white font-normal rounded-[10px] py-2 w-[125px]">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
};

const ExpandableText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > MAX_CHARACTERS;
  const displayText = isExpanded || !shouldTruncate
      ? text
      : text.slice(0, MAX_CHARACTERS) + "...";

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
      <div className="relative">
        <p className="font-light text-[14px] text-[#1C1C1E] break-words">
          {displayText}
        </p>
        {shouldTruncate && (
            <button
                className="cursor-pointer font-normal text-[14px] text-[#5C33F6]"
                onClick={toggleExpanded}
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
        )}
      </div>
  );
};

export default PostingCards;