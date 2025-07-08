import React from 'react';
import Image from "next/image";

const SocialSignUp = () => {
    return (
        <div className='flex flex-col justify-center gap-2 mt-[20px] w-full'>
            <button
                className='border-black border rounded-[12px] w-full py-[10px] flex items-center justify-center gap-4'
            >
                <Image src="/icons/facebook.png" alt='facebook' width={24} height={24} />
                <p className='text-xl'>Sign up with Facebook</p>
            </button>
            <button
                className='border-black border rounded-[12px] w-full py-[10px] flex items-center justify-center gap-4'
            >
                <Image src="/icons/google.png" alt='google' width={24} height={24} />
                <p className='text-xl'>Sign up with Google</p>
            </button>
            <button
                className='border-black border rounded-[12px] w-full py-[10px] flex items-center justify-center gap-4'
            >
                <Image src="/icons/apple.png" alt='apple' width={24} height={24} />
                <p className='text-xl'>Sign up with Apple</p>
            </button>
        </div>
    );
};

export default SocialSignUp;
