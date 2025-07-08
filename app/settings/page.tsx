import React from 'react';
import data from '@/data/avatar.json';
import {ChevronLeft} from "lucide-react";
import SettingsChoices from "@/components/SettingsChoices";

const Page = () => {
    return (
        <main>
            <header className="relative flex items-center">
                <a
                    href="/dashboard"
                    className="absolute left-0"
                >
                    <ChevronLeft />
                </a>
                <p className="mx-auto text-[20px]">Settings</p>
            </header>

            <div className="flex flex-col justify-center rounded-full mt-[40px] items-center gap-[20px]">
                {data.profile.length > 0 && (
                    <img
                        src={data.profile[0].avatar}
                        alt="Profile Avatar"
                        className="rounded-full"
                        width={120} height={120}
                    />
                )}
                <p className='text-center font-semibold text-[20px]'>
                    {data.profile.length > 0 ? data.profile[1].name : "No profile"}
                </p>
            </div>
            <SettingsChoices />

        </main>
    );
};

export default Page;