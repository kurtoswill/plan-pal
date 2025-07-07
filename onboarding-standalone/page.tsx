import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <>
            <div
                className='w-full min-h-screen'
                style={{
                    background: 'linear-gradient(190deg, #361E90, #5C33F6)'
                }}
            >
            </div>

            {/* Mobile Onboarding Screen */}
            <div className="flex flex-col items-center justify-end w-full h-screen md:hidden" style={{ position: 'relative', background: 'linear-gradient(190deg, #361E90, #5C33F6)' }}>
                <div className="flex flex-col items-center w-full px-6 pb-10">
                    <Image
                        src="/icons/onboard1.svg"
                        alt="Onboarding Image"
                        width={250}
                        height={250}
                        className="mb-8"
                        priority
                    />
                    <div className="flex flex-row items-center justify-center mb-6">
                        <span className="inline-block w-3 h-1.5 rounded-full bg-white/60 mx-1"></span>
                        <span className="inline-block w-6 h-1.5 rounded-full bg-white mx-1"></span>
                        <span className="inline-block w-3 h-1.5 rounded-full bg-white/60 mx-1"></span>
                    </div>
                    <h2 className="text-white text-2xl font-bold text-center mb-4">Manage Funds With Confidence</h2>
                    <div className="flex flex-row w-full justify-between mt-4">
                        <button className="border border-white text-white rounded-full px-8 py-2 text-lg font-medium bg-transparent">Skip</button>
                        <button className="bg-green-400 text-white rounded-full px-8 py-2 text-lg font-medium ml-4">Next</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
