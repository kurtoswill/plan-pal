'use client';

import React from 'react';
import VoteCards from "@/components/VoteCards";
import data from '@/data/vaults.json';
import avatar from '@/data/avatar.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const Page = () => {
    return (
        <div>
            <div className='flex mb-[45px] justify-between items-center'>
                {/* Use avatar.profile instead of data.profile */}
                <h1 className='font-bold text-[32px]'>Hi, {avatar.profile.length > 0 ? avatar.profile[0].firstname : "No firstname available"}
                </h1>
                {avatar.profile.length > 0 && (
                    <a href='/settings'>
                        <img
                            src={avatar.profile[0].avatar}
                            alt="Profile Avatar"
                            className="rounded-full"
                            width={40} height={40}
                        />
                    </a>
                )}
            </div>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}>
                <CarouselContent>
                    {/* Display user-created vaults */}
                    {data.vaultcreated.map((vault: any) => (
                        <CarouselItem key={vault.id}>
                            <div className="font-semibold border border-black/5 rounded-[12px] p-4 shadow bg-[#5C33F6] text-white h-full">
                                <div className="flex flex-col justify-between h-full">
                                   <div className="mb-4">
                                       <h1 className="text-headline text-[20px]">{vault.name}</h1>
                                   </div>

                                   <div className="flex items-center justify-between mt-auto">
                                       <div>
                                           <p className='font-normal text-[14px]'>Current Balance:</p>
                                           <p className="font-normal text-[18px]">
                                               ₱ {Number(vault.balance).toLocaleString()}
                                           </p>
                                       </div>
                                       <img
                                           src={vault.avatar}
                                           alt="Avatar"
                                           width={40}
                                           height={40}
                                           className="rounded-full"
                                       />
                                   </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                    {/* Display all vaults */}
                    {data.vault.map((vault: any) => (
                        <CarouselItem key={vault.id}>
                            <div className="font-semibold border border-black/5 rounded-[12px] p-4 shadow bg-[#5C33F6] text-white h-full">
                                <div className="flex flex-col justify-between h-full">
                                   <div className="mb-4">
                                       <h1 className="text-headline text-[20px]">{vault.name}</h1>
                                   </div>

                                   <div className="flex items-center justify-between mt-auto">
                                       <div>
                                           <p className='font-normal text-[14px]'>Current Balance:</p>
                                           <p className="font-normal text-[18px]">
                                               ₱ {Number(vault.balance).toLocaleString()}
                                           </p>
                                       </div>
                                       <img
                                           src={vault.avatar}
                                           alt="Avatar"
                                           width={40}
                                           height={40}
                                           className="rounded-full"
                                       />
                                   </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <h3 className='text-[20px] mb-4 mt-[40px]'>Pending Votes</h3>
            <VoteCards />
        </div>
    );
};

export default Page;