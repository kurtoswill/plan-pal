import React from 'react';
import Image from "next/image";
import SocialSignUp from "@/components/SocialSignUp";

const Page = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1
                className='font-bold text-center text-3xl mb-[60px]'
            >
                Start Planning <br /> Smarter Together
            </h1>

            <SocialSignUp />

            <div className="flex items-center my-6 w-full pt-[20px]">
                <div className="grow h-px bg-black" />
                <span className="mx-4 text-sm text-gray-600 font-medium">or</span>
                <div className="grow h-px bg-black" />
            </div>

            <button
                className='bg-[#5C33F6] px-4 py-4 text-white font-normal rounded-[12px] my-[20px] w-full mt-[20px]'
            >
                Create Account
            </button>


        </div>
    );
};

export default Page;