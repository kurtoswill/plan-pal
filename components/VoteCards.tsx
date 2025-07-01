import React from 'react'
import data from '@/data/votes.json'
import Image from 'next/image'

interface Post {
    id: number
    title: string
    org: string
    author: string
    contributors: string
    votes: string
    days: string
}

const VoteCards = () => {
    return (
        <div className="space-y-4">
            {data.post.map((vote: Post, index) => (
                <div
                    key={index}
                    className="font-semibold border border-black/5 rounded-[12px] p-4 shadow"
                >
                    <div className="mb-4 flex flex-col">
                        <div className='flex items-center justify-between gap-2'>
                            <h1 className="text-headline">{vote.title}</h1>
                            <button className="bg-[#5C33F6] px-4 py-1 text-white rounded-[12px]">
                                Vote
                            </button>
                        </div>

                        <p className="font-normal text-[14px]">{vote.org}</p>
                        <p className="font-normal text-[14px]">By: {vote.author}</p>
                        <p
                          className={`pt-3 font-normal text-[14px] text-[#5C33F6] ${
                            Number(vote.days) <= 3 ? 'text-red-500' : ''
                          }`}
                        >
                          Days left: {vote.days}
                        </p>

                       <div className='flex items-center justify-between'>
                           {/* Progress Bar */}
                           <div className="w-full h-[6px] rounded-full bg-gray-200 overflow-hidden flex border-black border-1">
                               <div
                                   className="h-full bg-green-500"
                                   style={{ width: `${(Number(vote.votes) / Number(vote.contributors)) * 100}%` }}
                               />

                               <div
                                   className="h-full bg-red-500"
                                   style={{
                                       width: `${(1 - Number(vote.votes) / Number(vote.contributors)) * 100}%`, 
                                   }}
                               />
                           </div>

                           <div className="flex items-center ml-4 font-normal text-[14px]">
                               <p className='pl-4 text-[#5C33F6]'>{vote.votes}</p>
                               <span>/</span>
                               <p>{vote.contributors}</p>
                           </div>
                       </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default VoteCards