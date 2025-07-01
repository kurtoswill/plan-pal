import React from 'react';
import VoteCards from "@/components/VoteCards";

const Page = () => {
    return (
        <div>
            <h3 className='text-[20px] mb-4 mt-[40px]'>Pending Votes</h3>
            <VoteCards />
        </div>
    );
};

export default Page;